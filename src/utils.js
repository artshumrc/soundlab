// Adapted from https://stackoverflow.com/questions/14143652/web-audio-api-append-concatenate-different-audiobuffers-and-play-them-as-one-son
export function concatBuffers(context, audioBuffers) {
  var bufferLength = audioBuffers.length;
  var channels = [];
  var totalDuration = 0;

  for (var a = 0; a < bufferLength; a++) {
    channels.push(audioBuffers[a].numberOfChannels);
    totalDuration += audioBuffers[a].duration;
  }

  var numberOfChannels = channels.reduce(function (a, b) {
    return Math.min(a, b);
  }); // The lowest value contained in the array channels
  var tmp = context.createBuffer(
    numberOfChannels,
    context.sampleRate * totalDuration,
    context.sampleRate
  ); // Create new buffer

  for (var b = 0; b < numberOfChannels; b++) {
    var channel = tmp.getChannelData(b);
    var dataIndex = 0;

    for (var c = 0; c < bufferLength; c++) {
      channel.set(audioBuffers[c].getChannelData(b), dataIndex);
      dataIndex += audioBuffers[c].length; // Next position where we should store the next buffer values
    }
  }
  return tmp;
}
