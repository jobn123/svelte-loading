# svelte-loading 

> Simple Loading Spinner for Svelte

## Usage

### install
```bash
npm install svelte-loading
```

### showLoading

```html
<script lang='ts'>
  import { showLoading } from 'svelte-loading';

  showLoading()

</script>
```

if you want hide loading component you must call `hideLoading` method.

### auto hideLoading

```js
showLoading({ duration: 2000 })
```

after 2 seconds loading will auto hide 

### change loading color

```js
showLoading({ color: '#FFF'})
```

### change loading style

```js
import { showLoading, LoadingEnum } from 'svelte-loading';

showLoading({ type: LoadingEnum.Infinity })
```


## Loading Styles
### Eclipes
![Eclipse-1s-200px.png](https://s2.loli.net/2022/07/28/O8I1W9RloG2MiwX.png)
### Infinity 
![Infinity-1s-200px.png](https://s2.loli.net/2022/07/28/4ZIKrlbj9sw2uaQ.png)
### Ring
![Ring-1s-200px.png](https://s2.loli.net/2022/07/28/kehFzLvB3X2Y7T4.png)
### Ripple
![Ripple-1s-200px.png](https://s2.loli.net/2022/07/28/549JkZwBYMohfUx.png)
### Spinner (default)
![Spinner-1s-200px.png](https://s2.loli.net/2022/07/28/6Yp8o2FKLDeuByk.png)

## Svelte 

`App.svelte`

```html
<script lang='ts'>
  import { Loading, showLoading, LoadingEnum } from 'svelte-loading';

  showLoading()

</script>

...

<Loading />
```

## Options

```ts
export enum LoadingEnum {
  Eclipes,
  Infinity,
  Ring,
  Ripple,
  Spinner
}

export type LoadingTypes = {
  size?: string | number
  color?: string
  duration?: number
  type?: LoadingEnum
}
```


