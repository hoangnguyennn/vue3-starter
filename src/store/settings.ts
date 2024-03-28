import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { setLocale } from '@vee-validate/i18n'

const useSettingsStore = defineStore('settings', () => {
  const state = reactive({
    language: 'en'
  })

  const changeLanguage = (language: string) => {
    state.language = language
  }

  watch(
    () => state.language,
    language => {
      setLocale(language)
    },
    { immediate: true }
  )

  return {
    state,
    changeLanguage
  }
})

export default useSettingsStore
