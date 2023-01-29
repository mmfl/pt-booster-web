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
  <div class="flex-initial border border-slate-300 rounded py-4 mr-4">
    <ul>
      <li v-for="trainer in trainerList" :key="trainer.id">
        <router-link 
          :to="{ name: 'trainer-detail', params: { centreId: centreId, trainerId: trainer.id }}"
          class="block py-2 px-4 hover:bg-violet-600 hover:text-slate-200" >
          {{ trainer.profile.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
