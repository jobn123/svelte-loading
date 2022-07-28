<script lang="ts">
  import type { LoadingTypes } from '../loading.type'

  export let opts: LoadingTypes
</script>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: transprent; display: block; shape-rendering: auto;" width={opts.size} height={opts.size} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill={opts.color} stroke="none">
  <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
</path>
</svg>