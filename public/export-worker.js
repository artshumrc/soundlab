importScripts('lame.min.js')

async function lameEncode(lo, numberOfChannels, sampleRate, progress) {
    var mp3Encoder = new lamejs.Mp3Encoder(numberOfChannels, sampleRate, 128);

    var blockSize = 1152;
    var blocks = [];
    var mp3Buffer;

    var length = lo.length;
    var l = new Float32Array(lo.length);

    for (var i = 0; i < lo.length; i++) {
      l[i] = lo[i] * 32767.5;
    }
    for (var i = 0; i < length; i += blockSize) {
      progress((i / length) * 100);
      var lc = l.subarray(i, i + blockSize);
      mp3Buffer = mp3Encoder.encodeBuffer(lc);
      if (mp3Buffer.length > 0) blocks.push(mp3Buffer);
    }
    mp3Buffer = mp3Encoder.flush();
    if (mp3Buffer.length > 0) blocks.push(mp3Buffer);
    progress(100);
    return new Blob(blocks, { type: "audio/mpeg" });
  }


onmessage = async function(e) {
    console.log('Worker: Exporting Audio');
    const {channelData, sampleRate, numberOfChannels} = e.data
    const blob = await lameEncode(channelData, numberOfChannels, sampleRate, () => {});
    const url = URL.createObjectURL(blob);
    console.log("Worker: Export succeeded")
    postMessage(url)
  }