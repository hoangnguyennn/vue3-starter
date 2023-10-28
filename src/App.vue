<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@hn/layouts/DefaultLayout.vue'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || DefaultLayout
})
</script>
