<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCentreStore } from '../stores/centre'
import TrainerList from '../components/TrainerList.vue'
import ReservationList from '../components/ReservationList.vue'
import { watch } from 'vue';

const route = useRoute();
const centreId = route.params.centreId as string

const centreStore = useCentreStore()
centreStore.setCentreDetail(centreId)
centreStore.setTrainerList(centreId)

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
  <h1>{{ centreStore.data?.name }}</h1>
  <div class="container">
    <TrainerList
      :trainer-list="centreStore.trainerList"
    />
    <ReservationList
      :reservation-list="centreStore.reservationList"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>