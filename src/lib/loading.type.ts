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