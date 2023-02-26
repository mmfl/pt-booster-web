<script setup lang="ts">
import { useReservationStore } from '../stores/reservation';
import Reservation from './Reservation.vue'


const reservationStore = useReservationStore()


</script>

<template>
  <div class="reservation-list">
    <div v-if="reservationStore.isLoaded">
      <ul v-if="reservationStore.list?.length">
        <li v-for="reservation in reservationStore.list" :key="reservation.id">
          <Reservation :reservation="reservation"></Reservation>
        </li>
      </ul>
      <ul v-else>
        <li>
          <div class="reservation-list--empty">
            예약이 없습니다.
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.reservation-list {
  @apply p-4 min-h-full;
}
.reservation-list--empty {
  @apply border border-gray-200 rounded p-4 text-center text-slate-400;
}
</style>
