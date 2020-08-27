<script>
  import { showHelp } from "../stores";
  function logoAnimation(){
    document.querySelector(".siteLogo1").classList.add('logoHover');
    document.querySelector(".siteLogo5").classList.add('logoHover');
  }
  function removeAnimation(){
    setTimeout(function(){
      document.querySelector(".siteLogo1").classList.remove('logoHover');
      document.querySelector(".siteLogo5").classList.remove('logoHover');
    }, 500)
  }
</script>

<div class="grid grid-cols-3 w-full lg:pr-12">
  <div>
    <div class="navHeader" on:mouseover="{logoAnimation}" on:mouseout="{removeAnimation}">
      <a href="https://soundlab.fas.harvard.edu/">
        <div class="siteLogo">
          <div class="siteLogo1" ></div>
          <div class="siteLogo2"></div>
          <div class="siteLogo3"></div>
          <div class="siteLogo4"></div>
          <div class="siteLogo5 "></div>
        </div>
        <h2 class="siteTitle">Sound Lab</h2>
      </a></div>
  </div>

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
