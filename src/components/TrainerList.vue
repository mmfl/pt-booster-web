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
  <div class="trainer-list">
    <ul>
      <li v-for="trainer in trainerList" :key="trainer.id">
        <router-link 
          :to="{ name: 'trainer-detail', params: { centreId: centreId, trainerId: trainer.id }, query: { date: route.query.date }}"
          class="trainer-item">
          {{ trainer.profile.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.trainer-list {
  @apply flex-initial border border-slate-300 rounded py-4 mr-4;
  min-width: 10rem;
}

.trainer-item {
  @apply block py-2 px-4 hover:bg-violet-500 hover:text-slate-200 transition-colors duration-75;
}

.trainer-item.router-link-exact-active {
  @apply bg-violet-600 text-slate-200 hover:bg-violet-600;
}
</style>
