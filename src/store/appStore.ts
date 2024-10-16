import GenerateUtil from '@hn/utils/generate.util'
import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

type AppStoreType = {
  isLoading: boolean
  language: 'en' | 'vi'
  snackbars: Types.ISnackbar[]
}

export const useAppStore = defineStore('appStore', () => {
  const state = reactive<AppStoreType>({
    isLoading: false,
    language: 'en',
    snackbars: []
  })

  const setIsLoading = (value: boolean) => {
    state.isLoading = value
  }

  const setLanguage = (value: AppStoreType['language']) => {
    state.language = value
  }

  const addSnackbar = (snackbar: Types.ISnackbarOption | string) => {
    if (typeof snackbar === 'object') {
      const newSnackbar: Types.ISnackbar = {
        ...snackbar,
        id: GenerateUtil.generateId()
      }

      state.snackbars.push(newSnackbar)
    } else {
      const newSnackbar: Types.ISnackbar = {
        id: GenerateUtil.generateId(),
        message: snackbar
      }

      state.snackbars.push(newSnackbar)
    }
  }

  const removeSnackbar = (id: string) => {
    state.snackbars = state.snackbars.filter(snackbar => snackbar.id !== id)
  }

  return {
    ...toRefs(state),
    setIsLoading,
    setLanguage,
    addSnackbar,
    removeSnackbar
  }
})
