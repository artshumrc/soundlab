import App from "./App.svelte";

import AudioRecorder from "audio-recorder-polyfill";
import mpegEncoder from "audio-recorder-polyfill/mpeg-encoder";

AudioRecorder.encoder = mpegEncoder;
AudioRecorder.prototype.mimeType = "audio/mp3";
window.MediaRecorder = AudioRecorder;

if (typeof window.MediaRecorder === "undefined") {
  window.MediaRecorder = AudioRecorder;
}

const app = new App({
  target: document.body,
  props: {},
});

export default app;
