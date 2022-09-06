<script>
  import { sources } from "../stores.js";
  export let deviceChanged;
  export let shareAWindow;
  export let getPermissionsAndListDevices;

  let isOpen = false;
  const onDropdownClick = async () => {
    isOpen = !isOpen;
  };

  let sourceLabel = "Select Source";
  let selectedSourceId = null;

  $: {
    const firstSource = $sources.length > 0 && $sources[0];
    if ($sources != null && $sources.length != 0) {
      const selectedSource = $sources.find(
        s => selectedSourceId === s.deviceId
      );

      const activeSource = selectedSource || firstSource;

      sourceLabel = activeSource ? activeSource.label : "Select Source";

      if (selectedSourceId == null && firstSource != null)
        selectedSourceId = firstSource.deviceId;
    }
  }

  let isChrome = typeof window.chrome != "undefined" && window.chrome != null;
</script>

<div class="flex flex-col pt-8 ml-12 content-center relative">
  <img
    src="RCAs.png"
    class="absolute"
    style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
    alt="" />
  <div style="margin-top: -30px">
    <h3 class="font-black text-4xl text-darkcream">
      <span class="block p-0 m-0 leading-none">AUDIO</span>
      <span class="block p-0 m-0">SOURCE</span>
    </h3>
    <div
      class="shadow-md px-4 py-2 relative z-50 bg-cream"
      style="width: 18rem">
      <div on:click={onDropdownClick} class="flex justify-between">
        <div class="block">
          <img
            src="REC.png"
            width="12"
            height="12"
            alt="Source Indicator"
            class="inline" />
          <span class="font-bold text-crimson">{sourceLabel}</span>
        </div>
        ▾
      </div>
      {#if isOpen}
        <div
          class="absolute shadow-md left-0 px-4 py-2 bg-cream"
          style="width: 18rem">
          {#each $sources as source, index}
            <div class="flex flex-row content-center">
              <input
                type="radio"
                id={source.deviceId}
                value={source.deviceId}
                bind:group={selectedSourceId}
                on:change={deviceChanged} />
              <label for={source.deviceId} class="ml-2 text-sm font-bold">
                {source.label == '' ? 'Microphone ' + index : source.label}
              </label>
            </div>
          {/each}
          {#if isChrome}
            <div class="w-36 my-4 inline-block">
              <div
                class="py-2 px-4 border-crimson border-4 text-crimson text-sm
                font-bold inline-block"
                on:click={shareAWindow}>
                Share Audio from a Browser Tab
              </div>
            </div>
          {/if}
          <div class="w-36 mt-2 inline-block">
            <button
              class="py-2 px-4 bg-crimson text-cream text-sm font-bold
              inline-block outline-none"
              on:click={getPermissionsAndListDevices}>
              Refresh Inputs
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
