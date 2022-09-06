<script>
  import { playbackBuffer, pausedAt } from "../stores";
  let timelineWidth = 800;
  let playheadMarginLeft = 0;

  let playhead;
  let timeline;

  let duration = $playbackBuffer ? $playbackBuffer.duration : 1;
  let elapsed = $pausedAt ? $pausedAt : 0;

  let progress = 0;

  $: {
    const elapsed = $pausedAt ? $pausedAt : 0;
    duration = $playbackBuffer ? $playbackBuffer.duration : 1;
    progress = elapsed / duration;
  }

  function onTimelineClick(e) {
    pausedAt.set((e.offsetX / timelineWidth) * duration);
  }
</script>

<div class="py-12 relative">
  <div
    style="width: {timelineWidth * progress}px;"
    class="bg-teal h-8 absolute"
    id="playhead"
    on:click={onTimelineClick}
    bind:this={playhead} />
  <div
    style="width: {timelineWidth}px;"
    class="bg-darkcream h-8"
    id="timeline"
    on:click={onTimelineClick}
    bind:this={timeline} />
</div>
