<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer v-model="state.open">
      <v-list>
        <v-list-item title="Logo" class="text-center"></v-list-item>
      </v-list>

      <hr />

      <the-menu />

      <template #append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-btn @click="state.open = !state.open">
        <v-icon :icon="toggleIcon"></v-icon>
      </v-btn>
    </v-app-bar>

    <v-main style="min-height: 300px">
      <div class="pa-4">
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { mdiMenuClose, mdiMenuOpen } from '@mdi/js'
import { computed, reactive } from 'vue'

import TheMenu from '@hn/components/layouts/TheMenu.vue'

const state = reactive({
  open: true
})

const toggleIcon = computed(() => {
  return state.open ? mdiMenuOpen : mdiMenuClose
})
</script>
