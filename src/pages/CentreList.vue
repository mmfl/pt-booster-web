<script setup lang="ts">
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()

centreStore.setCentreList()

</script>

<template>
  <ul>
    <li v-for="centre in centreStore.list" :key="centre.id">
      <router-link
        :to="{ name: 'centre-detail', params: { centreId: centre.id }}"
        class="block border border-slate-300 rounded p-4 hover:bg-violet-600 hover:text-slate-200">
        {{ centre.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
