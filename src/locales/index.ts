import { createI18n } from 'vue-i18n'

import en from './lang/en.json'
import vi from './lang/vi.json'

const messages = { vi, en }

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false
})

export default i18n
