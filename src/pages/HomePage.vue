<template>
  <div>Home Page</div>

  <v-btn @click="changeLanguage(settingsState.language === 'en' ? 'vi' : 'en')">
    Change language
  </v-btn>
  <v-btn>{{ settingsState.language }}</v-btn>

  <hn-input name="name" rules="required" placeholder="name" label="Name" />
  <hn-input name="name2" rules="required" />
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import useSettings from '@hn/store/settings'

import HnInput from '@hn/components/common/HnInput.vue'

const { state: settingsState, changeLanguage } = useSettings()
const { values, isFieldDirty, validateField } = useForm()

watch(
  () => settingsState.language,
  () => {
    Object.keys(values).forEach(field => {
      if (isFieldDirty(field)) {
        validateField(field)
      }
    })
  }
)
</script>
