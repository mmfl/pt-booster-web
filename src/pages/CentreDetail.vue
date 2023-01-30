<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useCentreStore } from '../stores/centre'
import TrainerList from '../components/TrainerList.vue'
import ReservationList from '../components/ReservationList.vue'

const route = useRoute();
const router = useRouter();
const centreId = route.params.centreId as string

const centreStore = useCentreStore()

centreStore.setTrainerList(centreId)

if (centreStore.list) {
  const centre = centreStore.list.find(centre => `${centre.id}` === centreId)
  if (centre) {
    centreStore.setCentreDetailByCentre(centre)
  } else {
    centreStore.setCentreDetail(centreId)
  }
} else {
  centreStore.setCentreDetail(centreId)
}

const getCurrentLocalDate = () => {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = `${d.getMonth() + 1}`.padStart(2, '0')
  const dd = `${d.getDate()}`.padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

watch(() => route.params.trainerId, (newTrainerId) => {
  const date = route.query.date as string || getCurrentLocalDate()
  if (newTrainerId) {
    const tainerId = newTrainerId as string
    centreStore.setReservationList(centreId, tainerId, date)
  } else {
    centreStore.clearReservationList()
  }
}, { immediate: true })


watch(() => route.query.date, (newDate) => {
  const trainerId = route.params.trainerId as string
  if (trainerId) {
    centreStore.setReservationList(centreId, trainerId, newDate as string)
  }
})


</script>

<template>
  <h1 class="text-2xl mb-4">
    <button class="chevron" @click="router.push({ name: 'centre-list' })"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="ffffff" d="M9.78 12.78a.75.75 0 0 1-1.06 0L4.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L6.06 8l3.72 3.72a.75.75 0 0 1 0 1.06Z"></path></svg></button> {{ centreStore.data?.name }}
  </h1>
  <div class="flex">
    <TrainerList :trainer-list="centreStore.trainerList" />
    <ReservationList :reservation-list="centreStore.reservationList"/>
  </div>
</template>

<style scoped>
.chevron {
  @apply rounded hover:bg-violet-600 p-1 transition-colors ease-in-out duration-75 mr-2;
}

.chevron:hover > svg {
  @apply fill-slate-200;
}
</style>
