<script setup lang="ts">
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()

centreStore.setCentreList()

</script>

<template>
  <h1>센터 목록</h1>
  <ul>
    <li v-for="centre in centreStore.data" :key="centre.id">
      {{ centre.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>
