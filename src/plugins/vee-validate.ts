import { defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'

import enMessages from '@hn/locales/messages/en.json'
import viMessages from '@hn/locales/messages/vi.json'

defineRule('required', required)

configure({
  generateMessage: localize({
    en: {
      messages: enMessages
    },
    vi: {
      messages: viMessages
    }
  })
})
