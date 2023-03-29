<script setup lang="ts">
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()

centreStore.setCentreList()

</script>

<template>
  <h1 class="text-2xl mb-4">
    센터 목록
  </h1>
  <ul>
    <li v-for="centre in centreStore.list" :key="centre.id">
      <router-link
        :to="{ name: 'centre-detail', params: { centreId: centre.id }}"
        class="item">
        {{ centre.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.item {
  @apply block border border-slate-300 rounded p-4 mb-2 hover:bg-violet-600 hover:text-slate-200 transition-colors duration-75
}
</style>
