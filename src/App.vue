<template>
  <component :is="layout" />
</template>

<script setup lang="ts">
import DefaultLayout from '@hn/layouts/DefaultLayout.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || DefaultLayout
})
</script>
