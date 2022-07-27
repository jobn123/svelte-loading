export type LoadingTypes = {
  size?: string | number
  color?: string
  unit?: string
  duration?: string
  type?: LoadingEnum
}

export enum LoadingEnum {
  Eclipes,
  Infinity,
  Ripple,
  Spinner
}