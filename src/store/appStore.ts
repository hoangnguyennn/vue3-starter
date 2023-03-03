import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const isLoading = ref(false)
  const language = ref('en')

  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }

  const setLanguage = (value: string) => {
    language.value = value
  }

  return {
    isLoading,
    language,
    setIsLoading,
    setLanguage
  }
})
