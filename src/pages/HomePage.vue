<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@hn/store/appStore'
import exampleImage from '@hn/assets/images/example.png'
import useBeforeRouteLeaveConfirmation from '@hn/composables/useBeforeRouteLeaveConfirmation'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)
const { locale, t } = useI18n()
const { enable, disable } = useBeforeRouteLeaveConfirmation()

const changeLanguage = () => {
  if (language.value === 'en') {
    locale.value = 'vi'
    appStore.setLanguage('vi')
  } else {
    locale.value = 'en'
    appStore.setLanguage('en')
  }
}
</script>

<template>
  <div>
    <h2>HomePage</h2>
    <p>Current language: {{ language }}</p>
    <button @click="changeLanguage">Change language</button>

    <p>{{ t('hello') }}</p>

    <img :src="exampleImage" />

    <button @click="enable">Enable</button>
    <button @click="disable">Disable</button>
  </div>
</template>
