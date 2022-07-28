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


## Loading Styles
### Eclipes
![](static/Eclipse-1s-200px.png)
### Infinity 
![](static/Infinity-1s-200px.png)
### Ring
![](static/Ring-1s-200px.png)
### Ripple
![](static/Ripple-1s-200px.png)
### Spinner (default)
![](static/Spinner-1s-200px.png)

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


