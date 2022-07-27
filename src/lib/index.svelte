<script lang="ts">
  import { fade } from "svelte/transition";
  import { LoadingEnum } from './loading.type'
  import { loadingType, isLoading } from "./store";
  import Spinner from './components/Spinner.svelte'
  import Eclipse from './components/Eclipse.svelte'
  
  isLoading.subscribe((n) => console.log(n))
</script>

{#if $isLoading}
  <div class="container-loading" transition:fade>
    {#if $loadingType === LoadingEnum.Eclipes }
      <Spinner />
    {:else if $loadingType === LoadingEnum.Spinner}
      <Eclipse />
    {:else}
      <Spinner />
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
  }
</style>