<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()
const route = useRoute()
const router = useRouter()

const centreId = route.params.centreId as string

const getCurrentLocalDate = () => {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = `${d.getMonth() + 1}`.padStart(2, '0')
  const dd = `${d.getDate()}`.padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const date = route.query.date ? ref(route.query.date as string) : ref(getCurrentLocalDate())

const prevDate = () => {
  const d = new Date(date.value)
  d.setDate(d.getDate() - 1)
  date.value = d.toISOString().substring(0, 10)
}

const nextDate = () => {
  const d = new Date(date.value)
  d.setDate(d.getDate() + 1)
  date.value = d.toISOString().substring(0, 10)
}

watch(date, () => {
  const trainerId = route.params.trainerId
  router.replace({ name: 'trainer-detail', params: { centreId, trainerId }, query: { date: date.value }})
})

</script>

<template>
  <div class="flex-auto border border-slate-300 rounded p-4 min-h-full">
    <div v-show="route.params.trainerId" class="flex items-center border-b border-slate-300 pb-4 mb-4">
      <button class="chevron" @click="prevDate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="ffffff" d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"></path></svg></button>
      <input type="date" v-model="date">
      <button class="chevron" @click="nextDate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg></button>
    </div>
    <ul>
      <li v-for="reservation in centreStore.reservationList" :key="reservation.id">
        <div>
          <span>{{ reservation.member.profile.name }} | {{ reservation.date }} {{ reservation.hour }}시 {{ reservation.minute }}분 ({{ reservation.duration }}분)</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.chevron {
  @apply rounded hover:bg-violet-600 p-1 transition-colors ease-in-out duration-75;
}

.chevron:hover > svg {
  @apply fill-slate-200;
}

.chevron:first-child {
  @apply mr-2
}

.chevron:last-child {
  @apply ml-2
}


</style>
