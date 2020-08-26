<script>
  import { showHelp } from "../stores";
</script>

<div class="grid grid-cols-3 w-full lg:pr-12">
  <div />

  <div />

  <div class="flex justify-end align-center">
    <button
      on:click={() => showHelp.set(true)}
      class="outline-none rounded-none border-2 border-darkcream text-darkcream
      font-bold text-xl m-6 px-4 pt-2 pb-1">
      HELP
    </button>
  </div>
</div>
