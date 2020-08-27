<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import toWav from "audiobuffer-to-wav";

  import localforage from "localforage";

  import Timeline from "./components/Timeline.svelte";
  import AudioSource from "./components/AudioSource.svelte";
  import HelpHeader from "./components/HelpHeader.svelte";
  import HelpDrawer from "./components/HelpDrawer.svelte";
  import Footer from "./components/Footer.svelte";
  import {
    chunks,
    stream,
    sources,
    mediaRecorder,
    recordingBuffer,
    playbackBuffer,
    isDownloading,
    isRecording,
    isPlaying,
    startedAt,
    pausedAt,
    mixURL
  } from "./stores";
  import { concatBuffers } from "./utils";

  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var analyser = audioCtx.createAnalyser();
  let source = undefined;

  let selectedDeviceId = undefined;
  let bufferSource = null;

  let raf = null;

  const baseConstraints = {
    sampleRate: 44100,
    sampleSize: 16,
    echoCancellation: false,
    noiseReduction: false
  };

  function onStopClick() {
    isRecording.set(false);
    $mediaRecorder.stop();
    console.log("Recorder stopped");
  }
  async function onRecordClick(e) {
    isRecording.set(true);
    $mediaRecorder.start();
    console.log("Recorder started");
  }

  stream.subscribe(newStream => {
    mediaRecorder.set(newStream ? new MediaRecorder(newStream) : undefined);
    if (newStream == null) return;
  });

  mediaRecorder.subscribe(recorder => {
    if (recorder == null) return;
    recorder.addEventListener("error", console.error);
    recorder.addEventListener("stop", () => {
      console.log("Recorder stopped for device " + selectedDeviceId);

      const bufBlob = new Blob($chunks, { type: "audio/ogg; codecs=opus" });
      chunks.set([]);

      const bufferReader = new FileReader();
      bufferReader.readAsArrayBuffer(bufBlob);
      bufferReader.onerror = console.error;
      bufferReader.onloadend = e => {
        recordingBuffer.set(bufferReader.result);
      };
    });

    recorder.addEventListener("dataavailable", function(e) {
      chunks.update(prev => [...prev, e.data]);
    });
  });

  recordingBuffer.subscribe(rbuf => {
    if (rbuf == null) return;
    audioCtx.decodeAudioData(rbuf, function(buf) {
      if ($playbackBuffer == null) {
        playbackBuffer.set(buf);
        return;
      }
      // Concatenate the two buffers into one.
      playbackBuffer.set(concatBuffers(audioCtx, [$playbackBuffer, buf]));
    });
  });

  playbackBuffer.subscribe(pbuf => {
    // Store audio (unless this was triggered by rehydration)
    if (!pbuf || !$recordingBuffer) return;
    const wav = toWav(pbuf);
    localforage.setItem("mixtape", wav);
  });

  async function getPermissionsAndListDevices() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
      return alert(
        "We can't access your audio inputs. Please check permissions, or use a modern browser, and try again."
      );
    try {
      // Request permissions first so we get good device labels:
      stream.set(
        await navigator.mediaDevices.getUserMedia({
          audio: baseConstraints
        })
      );

      // Then, list devices
      await loadAudioDeviceList();
    } catch (e) {
      console.error(e);
    }
  }

  async function loadAudioDeviceList() {
    const devices = await navigator.mediaDevices.enumerateDevices();

    // Filter only audio inputs, and things that aren't e.g. "monitor inputs"
    sources.set(
      devices.filter(
        d => d.kind === "audioinput" && !d.label.includes("Monitor of")
      )
    );
  }

  const downloadMix = async () => {
    isDownloading.set(true);
    console.log("Initializing Export Worker");
    // adapted from https://github.com/zhuker/lamejs/issues/10
    const exportWorker = new Worker("export-worker.js");

    const payload = {
      sampleRate: $playbackBuffer.sampleRate,
      numberOfChannels: 1,
      channelData: $playbackBuffer.getChannelData(0)
    };

    exportWorker.postMessage(payload);

    try {
      mixURL.set(
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            reject();
          }, 60 * 1000);
          exportWorker.onmessage = e => {
            resolve(e.data);
          };
        })
      );
    } catch (e) {
      alert("The export didn't complete within 60s. Please try again.");
    }

    isDownloading.set(false);
  };

  async function deviceChanged(e) {
    selectedDeviceId = e.target.value;
    if ($stream) {
      const oldTracks = $stream.getTracks();
      oldTracks.forEach(track => {
        track.stop();
      });
    }
    const newStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        ...baseConstraints,
        deviceId: selectedDeviceId
      }
    });
    stream.set(newStream);
  }

  const shareAWindow = async () => {
    const shouldProceed = confirm(
      'When prompted, select "Browser Tab" and be sure to click the "Share Audio" checkbox'
    );
    if (!shouldProceed) return;
    try {
      const screen = await navigator.mediaDevices.getDisplayMedia({
        audio: baseConstraints,
        video: true
      });

      const tracks = screen.getTracks();
      const anyTrackIncludesAudio = tracks.some(t => t.kind === "audio");

      if (!anyTrackIncludesAudio) {
        tracks.forEach(track => track.stop());
        return alert(
          "No audio track available. Please ensure you're allowing audio sharing in your browser, or try picking another input."
        );
      }
      if ($stream) {
        const oldTracks = $stream.getTracks();
        oldTracks.forEach(track => {
          track.stop();
        });
      }
      stream.set(screen);
    } catch (e) {
      console.log(e);
      alert("Something went wrong: " + e.toString());
    }
  };

  const onPlayClick = () => {
    if (!$playbackBuffer) return;
    isPlaying.set(true);

    // If we've played to the end, get rid of our offset
    if ($pausedAt >= $playbackBuffer.duration) pausedAt.set(0);

    startedAt.set(audioCtx.currentTime - $pausedAt);

    bufferSource = audioCtx.createBufferSource();
    bufferSource.buffer = $playbackBuffer;
    bufferSource.connect(audioCtx.destination);
    bufferSource.start(0, $pausedAt);
    function update() {
      raf = requestAnimationFrame(update);
      pausedAt.set(audioCtx.currentTime - $startedAt);
    }
    update();
    // After the buffer ends, rehash the buffer so we can play again
    bufferSource.onended = () => {
      if (raf) cancelAnimationFrame(raf);
      isPlaying.set(false);
    };
  };

  const onPauseClick = () => {
    pausedAt.set(audioCtx.currentTime - $startedAt);
    startedAt.set(0);

    if (raf) cancelAnimationFrame(raf);

    bufferSource.disconnect();
    bufferSource.stop();
    bufferSource = null;
    isPlaying.set(false);
  };

  onMount(getPermissionsAndListDevices);
  onMount(async () => {
    // Initialize storage driver (prefer high-volume storage if available)
    localforage.setDriver([
      localforage.INDEXEDDB,
      localforage.WEBSQL,
      localforage.LOCALSTORAGE
    ]);

    try {
      const existingMix = await localforage.getItem("mixtape");
      if (existingMix) {
        console.log("Rehydrating mix from storage");
        await new Promise((resolve, reject) =>
          audioCtx.decodeAudioData(existingMix, function(buf) {
            playbackBuffer.set(buf);
          })
        );
      }
    } catch (e) {
      console.error("Error loading mix:", e);
    }
  });
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main>
  <div class="flex flex-col items-center justify-start h-screen w-full mb-48">
    <HelpHeader />
    <div class="pt-16">
      <h1 class="m-0 text-xl text-darkcream font-black uppercase leading-none">
        <a class="slab" href="https://soundlab.fas.harvard.edu/">The Sound Lab at Harvard University</a>
      </h1>
      <h2 class="m-0 uppercase text-6xl font-black text-crimson leading-tight">
        Mixtape Creator
      </h2>
    </div>
    <div class="grid grid-cols-3">
      <AudioSource
        {getPermissionsAndListDevices}
        {deviceChanged}
        {shareAWindow} />
      <div class="flex flex-col items-center">
        <div class="py-8 z-40">
          <img
            rel="preload"
            src="cassette.png"
            alt="Cassette"
            style="max-height: 330px; margin-left: -5px; margin-right: -5px;" />
        </div>
      </div>
      <div class="flex items-center relative z-0">
        <div
          class="flex items-center {$mixURL ? 'pointer-events-none' : 'hover:opacity-50'}">
          <div
            class="w-3/4 cursor-pointer"
            style="margin-left: -10px"
            on:click={$mixURL ? () => {} : downloadMix}>
            <img src="ExportArrowFG.png" alt="" style="max-height: 350px" />
          </div>
          <div
            on:click={$mixURL ? () => {} : downloadMix}
            class="absolute w-1/2 left-0 pr-24 font-bold text-4xl md:text-2xl
            sm:text-xl text-right leading-none cursor-pointer"
            style="color: #3d4e4c;">
            <span class="block">OUTPUT</span>
            <span class="block">MIX</span>
            <div class="float-right pb-2 {$isDownloading ? '' : 'hidden'}">
              <svg
                width="25"
                height="40"
                viewBox="0 0 55 80"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(61, 78, 76)">
                <g transform="matrix(1 0 0 -1 0 80)">
                  <rect width="10" height="20" rx="3">
                    <animate
                      attributeName="height"
                      begin="0s"
                      dur="4.3s"
                      values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
                      calcMode="linear"
                      repeatCount="indefinite" />
                  </rect>
                  <rect x="15" width="10" height="80" rx="3">
                    <animate
                      attributeName="height"
                      begin="0s"
                      dur="2s"
                      values="80;55;33;5;75;23;73;33;12;14;60;80"
                      calcMode="linear"
                      repeatCount="indefinite" />
                  </rect>
                  <rect x="30" width="10" height="50" rx="3">
                    <animate
                      attributeName="height"
                      begin="0s"
                      dur="1.4s"
                      values="50;34;78;23;56;23;34;76;80;54;21;50"
                      calcMode="linear"
                      repeatCount="indefinite" />
                  </rect>
                  <rect x="45" width="10" height="30" rx="3">
                    <animate
                      attributeName="height"
                      begin="0s"
                      dur="2s"
                      values="30;45;13;80;56;72;45;76;34;23;67;30"
                      calcMode="linear"
                      repeatCount="indefinite" />
                  </rect>
                </g>
              </svg>
            </div>
            <div
              class={`flex justify-center items-center align-center px-4 pt-2 pb-1 mt-4 ml-4 rounded-none font-bold text-crimson
          border-crimson border-2 hover:opacity-75 ${$mixURL ? 'pointer-events-auto' : 'hidden'}`}>
              <a
                href={$mixURL}
                type="audio/mp3"
                download="my-mix.mp3"
                class="uppercase text-xs text-center"
                style="text-decoration: none">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <Timeline />
      <div class="flex">
        <button
          id="record"
          on:click={$isRecording ? onStopClick : onRecordClick}
          aria-label="Record"
          class="border-none"
          style="background-image: url({$isRecording ? 'HSL-RecBTN-ON-animated.gif' : 'HSL-RecBTN-Active.gif'});
          background-size: contain; background-repeat: no-repeat; width: 200px;
          height: 162px;" />

        <button
          id="play"
          on:click={$isPlaying ? onPauseClick : onPlayClick}
          diabled={!$playbackBuffer}
          aria-label="Play"
          class="border-none"
          style="background-image: url({$isPlaying ? 'HSL-PauseBtn-ON.gif' : 'HSL-PauseBtn-Active.gif'});
          background-size: contain; background-repeat: no-repeat; width: 200px;
          height: 162px;" />

      </div>
    </div>
    <HelpDrawer />
  </div>
  <Footer />
</main>
