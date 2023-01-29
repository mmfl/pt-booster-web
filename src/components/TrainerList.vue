<script setup lang="ts">
import { useRoute } from 'vue-router';
import User from '../domain/user/User'

defineProps<{
  trainerList: User[] | null
}>()

const route = useRoute()
const centreId = route.params.centreId as string
</script>

<template>
  <ul>
    <li v-for="trainer in trainerList" :key="trainer.id">
      <router-link :to="{ name: 'trainer-detail', params: { centreId: centreId, trainerId: trainer.id }}">
        {{ trainer.profile.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>
