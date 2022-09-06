import { writable } from "svelte/store";

export let stream = writable(null);
export let mediaRecorder = writable(null);

export let sources = writable([]);

export let chunks = writable([]);

export let isRecording = writable(false);
export let isPlaying = writable(false);
export let isDownloading = writable(false);

export let showHelp = writable(false);

export let recordingBuffer = writable(null);
export let playbackBuffer = writable(null);

export let beforeScratchBuffer = writable(null);

export let startedAt = writable(0);
export let pausedAt = writable(0);

export let mixURL = writable(null);
