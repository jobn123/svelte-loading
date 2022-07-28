import {
  writable,
} from 'svelte/store'

import { LoadingEnum } from './loading.type'
import type { LoadingTypes } from './loading.type'

export const isLoading = writable<boolean>(false)
const defaultLoadingType = LoadingEnum.Spinner

export const loadingType = writable<LoadingEnum>(defaultLoadingType)

const defaultLoadingOpts: LoadingTypes = {
  size: 100,
  color: "#46dff0",
  type: LoadingEnum.Spinner
}

export const loadingOpts = writable<LoadingTypes>(defaultLoadingOpts)

let loadingFlag = false

export const showLoading = (opts = defaultLoadingOpts) => {
  if (loadingFlag) return

  const options = Object.assign(defaultLoadingOpts, opts)

  setLoadingOpts(options)
  changeLoadingStatus(true)
  changeLoadingType(opts.type as LoadingEnum)

  if (opts.duration) {
    setTimeout(() => {
      hideLoading()
    }, opts.duration)
  }
}

export const hideLoading = () => {
  if (!loadingFlag) return

  setLoadingOpts(defaultLoadingOpts)
  changeLoadingStatus(false)
  changeLoadingType(defaultLoadingType)
}

const changeLoadingStatus = (flag: boolean) => {
  loadingFlag = flag
  isLoading.set(flag)
}

const changeLoadingType = (type: LoadingEnum) => {
  loadingType.set(type)
}

const setLoadingOpts = (opts: LoadingTypes) => {
  loadingOpts.set(opts)
}