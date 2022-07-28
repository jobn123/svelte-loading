<script lang="ts">
  import { fade } from "svelte/transition"
  import { LoadingEnum } from './loading.type'
  import { loadingType, isLoading, loadingOpts } from "./store"
  import Spinner from './components/Spinner.svelte'
  import Eclipse from './components/Eclipse.svelte'
  import Infinity from './components/Infinity.svelte'
  import Ring from './components/Ring.svelte'
  import Ripple from './components/Ripple.svelte'
  
  let opts = $loadingOpts

</script>

{#if $isLoading}
  <div class="container-loading" transition:fade>
    {#if $loadingType === LoadingEnum.Eclipes }
      <Eclipse opts={opts} />
    {:else if $loadingType === LoadingEnum.Spinner}
      <Spinner opts={opts} />
    {:else if $loadingType === LoadingEnum.Infinity}
      <Infinity opts={opts} />
    {:else if $loadingType === LoadingEnum.Ring}
      <Ring opts={opts} />
    {:else if $loadingType === LoadingEnum.Ripple}
      <Ripple opts={opts} />
    {:else}
      <Spinner opts={opts} />
    {/if}
  </div>
{/if}

<style>
  .container-loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    background: transprent;
  }
</style>