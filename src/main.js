import App from "./App.svelte";

import AudioRecorder from "audio-recorder-polyfill";

if (typeof window.MediaRecorder === "undefined") {
  window.MediaRecorder = AudioRecorder;
}

const app = new App({
  target: document.body,
  props: {},
});

export default app;
