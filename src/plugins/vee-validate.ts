import { localize } from '@vee-validate/i18n'
import { required } from '@vee-validate/rules'
import { configure, defineRule } from 'vee-validate'

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
