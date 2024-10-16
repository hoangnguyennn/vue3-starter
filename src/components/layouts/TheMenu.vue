<template>
  <v-list>
    <v-list-item
      v-for="(menuItem, index) in menuItems"
      :key="index"
      link
      :prepend-icon="menuItem.icon"
      :title="menuItem.title"
      :to="menuItem.to"
    />
  </v-list>
</template>

<script setup lang="ts">
import { mdiAccountGroup, mdiViewDashboard } from '@mdi/js'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteLocationRaw } from 'vue-router'

interface MenuItem {
  title: string
  icon: string
  to?: RouteLocationRaw
}

const { t } = useI18n()

const menuItems = computed<MenuItem[]>(() => {
  return [
    {
      title: t('menu.dashboard'),
      icon: mdiViewDashboard,
      to: '/'
    },
    {
      title: t('menu.user'),
      icon: mdiAccountGroup,
      to: '/users'
    }
  ]
})
</script>
