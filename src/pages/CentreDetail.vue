<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router'
import { useCentreStore } from '../stores/centre'
import TrainerList from '../components/TrainerList.vue'
import ReservationList from '../components/ReservationList.vue'

const route = useRoute();
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


watch(() => route.params.trainerId, (newTrainerId, oldTrainerId) => {
  if (newTrainerId) {
    const tainerId = newTrainerId as string
    centreStore.setReservationList(centreId, tainerId)
  } else {
    centreStore.clearReservationList()
  }
}, { immediate: true })

</script>

<template>
  <h1 class="text-2xl mb-4">{{ centreStore.data?.name }}</h1>
  <div class="flex">
    <TrainerList :trainer-list="centreStore.trainerList" />
    <ReservationList :reservation-list="centreStore.reservationList" />
  </div>
</template>

<style scoped>
</style>
