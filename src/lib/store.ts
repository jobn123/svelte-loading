import {
  writable,
} from 'svelte/store'

import { LoadingEnum } from './loading.type'

export const isLoading = writable<boolean>(false)
const defaultLoadingType = LoadingEnum.Spinner

export const loadingType = writable(defaultLoadingType)

let loadingFlag = false

export const showLoading = (type = LoadingEnum.Eclipes) => {
  if (loadingFlag) return;

  changeLoadingStatus(true)
  loadingType.update(() => type)
}

export const hideLoading = () => {
  if (!loadingFlag) return;

  changeLoadingStatus(false);
  loadingType.update(() => defaultLoadingType)
}

const changeLoadingStatus = (flag: boolean) => {
  loadingFlag = flag
  isLoading.update(() => flag);
}