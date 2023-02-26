<script setup lang="ts">
import { useReservationStore } from '../stores/reservation';
import ReservationItem from './ReservationItem.vue'

const reservationStore = useReservationStore()

</script>

<template>
  <div class="reservation-list">
    <div v-if="reservationStore.isLoaded">
      <ul v-if="Object.keys(reservationStore.data?.dates || {}).length">
        <li v-for="(reservations, date) in reservationStore.data?.dates" :key="date" class="reservation-list__item">
          <div class="reservation-list__date">{{ date }}</div>
          <ReservationItem v-for="reservation in reservations" :reservation="reservation"></ReservationItem>
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

.reservation-list__item {
  @apply mb-8;
}

.reservation-list__date {
  @apply mb-2 font-bold;
}
</style>
