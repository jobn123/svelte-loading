<script lang='ts'>
  import { Loading, showLoading, LoadingEnum } from '../lib';

  // showLoading({ duration: 2000, size: 100, type: LoadingEnum.Infinity })
  showLoading({ type: LoadingEnum.Ring })

</script>
<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<Loading />
