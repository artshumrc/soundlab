<script>
  import { showHelp } from "../stores";
  import localforage from "localforage";
</script>

<div class="absolute top-0 right-0 z-50 pointer-events-none">
  <div
    class="flex flex-col p-8 h-screen overflow-x-hidden overflow-y-scroll
    pointer-events-auto bg-offwhite {$showHelp ? '' : 'opacity-0'}
    transition-all duration-150 ease-in"
    style={`width: ${$showHelp ? '600px' : '0px'}`}>
    <div
      id="pillbox"
      class="flex justify-between align-center items-center shadow-md rounded-lg
      bg-white mb-4">
      <div class="py-4 px-4 bg-crimson text-white font-bold rounded-l-lg">
        A
      </div>
      <h2 class="py-4 text-left w-full px-4 font-bold text-xl leading-none">
        HELP
      </h2>
      <button
        on:click={() => showHelp.set(false)}
        class="border-none rounded-lg text-crimson font-bold text-xs flex
        flex-col items-center px-2">
        <span class="text-2xl">X</span>
        CLOSE
      </button>
    </div>
    <article class="px-2 py-4">
      <h3 class="font-bold text-xl">Getting Started</h3>
      <p class="py-4 text-sm leading-7">
        MixtapeCreator captures some of the essential experience of an analog
        cassette recording situation in a digital medium. This may cause warm
        and fuzzy feelings in some users, while others may first need to get
        used to the differences from the drag-and-drop technique of digital
        playlists. Most importantly, MixtapeCreator records in real time.
      </p>

      <p class="py-4 text-sm leading-7">
        Here’s how it works.You follow the flow of the page, starting on the
        left by choosing an audio source. Then you will record using the
        “record’ and “play” buttons, and when you’re done you click on the arrow
        on the right to get your output mix.
      </p>

      <h3 class="font-bold text-xl">Selecting an input</h3>

      <p class="py-4 text-sm leading-7">
        MixtapeCreator automatically identifies your input sources. This is, at
        minimum, your computer speaker/microphone. If you have other devices
        (e.g. USB interfaces, external microphones) these will all be listed in
        the dropdown menu under audio source.
      </p>

      <h4 class="font-bold">Standard input</h4>

      <p class="py-4 text-sm leading-7">
        If you choose your computer microphone it will record ambient sounds.
      </p>

      <h4 class="font-bold">USB input</h4>

      <p class="py-4 text-sm leading-7">
        USB and external audio input devices will display in the audio inputs
        window, if they don’t appear, click “Refresh Inputs”. If they still
        don't appear, be sure you allowed microphone recording permissions.
      </p>

      <h4 class="font-bold">Recording from Browser Tab (on Chrome)</h4>
      <p class="py-4 text-sm leading-7">
        MixtapeCreator can capture audio from YouTube, Spotify’s web player, or
        any browser-based sound source. To do this in Chrome go to the audio
        inputs window and select “Share Audio from a Browser Tab”. Click “Ok”
        and navigate to the Chrome Tab option. Then select the tab you would
        like to record from. Make sure to select the “Share Audio” checkbox on
        the bottom left.
      </p>

      <h4 class="font-bold">Virtual Audio Input</h4>
      <p class="py-4 text-sm leading-7">
        Virtual audio drivers (VAD) help route audio from a non-browser source
        like your iTunes library, or other digital media files saved on your
        computer. To record from VADs you will need to install a virtual audio
        routing platform like
        <a
          href="https://rogueamoeba.com/loopback/"
          class="underline hover:no-underline text-crimson">
          Loopback
        </a>
        or
        <a
          href="http://existential.audio/blackhole/"
          class="underline hover:no-underline visited:no-underline text-crimson">
          BlackHole.
        </a>
        <a
          href="https://www.youtube.com/watch?v=sT7YKMTdnX4"
          class="underline hover:no-underline visited:no-underline text-crimson">
          Here is a video tutorial
        </a>
        on using BlackHole with a Mac. Once You have installed a VAD it will
        appear in the Audio Source window. You might need to click on the
        “Refresh Inputs” button to see the newly installed virtual audio driver.
      </p>

      <h3 class="font-bold text-xl">Recording</h3>

      <p class="py-4 text-sm leading-7">
        To start recording you press the “Record” button. A flashing light on
        the button indicates that a recording is in progress. To stop recording
        you press the record button again. While you are recording, your mixtape
        will capture all the sounds from your chosen input device.
      </p>

      <p class="py-4 text-sm leading-7">
        To hear what you recorded press “Play.” You can move the slider to the
        position from which you wish to start playback. To stop playback press
        “Play” again. If you move the slider to a point on the tape that has
        already been recorded on and press “record” again MixtapeCreator will
        record over your old recording; the earlier sounds will be lost.
      </p>

      <h3 class="font-bold text-xl">Saving</h3>

      <p class="py-4 text-sm leading-7">
        Once you have finished curating your mixtape and are happy with it you
        can move on to “Output mix.” When you click on the arrow a menu pops up
        that allows you to export and save your mixtape as a .wav file. Once you
        have saved it you can listen to your mixtape, share it, or edit it using
        other software such as Audacity or Garageband.
      </p>

      <div class="py-4">
        <h3 class="font-bold text-xl">Starting Over</h3>

        <p class="py-4 text-sm leading-7">
          If you want to discard your changes, you can reset your mixtape here.
          All changes will be lost.
        </p>
        <button
          class="py-2 px-4 rounded-none border-crimson border-4 text-crimson
          text-sm font-bold inline-block"
          on:click={() => {
            const iAmSure = confirm('Are you sure you want to discard your mix? This is not reversible.');
            if (!iAmSure) return;
            localforage.clear().then(() => {
              console.log('Mix has been discarded.');
              window.location.reload();
            });
          }}>
          Reset Mixtape
        </button>
      </div>
    </article>

  </div>
</div>
