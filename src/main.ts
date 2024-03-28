import { createApp } from 'vue'

import vuetify from '@hn/plugins/vuetify'
import '@hn/plugins/vee-validate'

import '@hn/assets/styles/main.scss'

import App from './App.vue'
import i18n from '@hn/locales'
import router from '@hn/router'
import pinia from '@hn/store'

const app = createApp(App)

app.use(vuetify)
app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
