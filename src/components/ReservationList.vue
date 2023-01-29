<script setup lang="ts">
import { ref } from 'vue'
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()

const date = ref(new Date().toISOString().substring(0, 10))


const prevDate = () => {
  const d = new Date(date.value)
  d.setDate(d.getDate() - 1)
  date.value = d.toISOString().substring(0, 10)
  // centreStore.setReservationList(centreStore.data?.id as string, centreStore.trainerId as string, date.value)
}

const nextDate = () => {
  const d = new Date(date.value)
  d.setDate(d.getDate() + 1)
  date.value = d.toISOString().substring(0, 10)
  // centreStore.setReservationList(centreStore.data?.id as string, centreStore.trainerId as string, date.value)
}

</script>

<template>
  <div class="flex-auto border border-slate-300 rounded p-4 min-h-full">
    <div v-show="centreStore.reservationList" class="flex items-center border-b border-slate-300 pb-4 mb-4">
      <button class="chevron" @click="prevDate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="ffffff" d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"></path></svg></button>
      <input type="date" :value="date">
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
  @apply rounded hover:bg-violet-600 p-1 transition-colors ease-in-out duration-100
}

.chevron:hover > svg {
  @apply fill-slate-200
}

.chevron:first-child {
  @apply mr-2
}

.chevron:last-child {
  @apply ml-2
}


</style>
