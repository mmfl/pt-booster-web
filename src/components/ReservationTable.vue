<script setup lang="ts">
import { computed } from 'vue'
import { useReservationStore } from '../stores/reservation';
import ReservationList from './ReservationList.vue'
import Reservation from '../domain/reservation/Reservation'

const props = defineProps<{
  startDate: Date
  endDate: Date
}>()

const reservationStore = useReservationStore()


const datesFromStartToEnd = computed(() => {
  const dates: Date[] = []
  const currentDate = new Date(props.startDate)
  if (currentDate > props.endDate) {
    return dates
  }

  while (currentDate <= props.endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  return dates
})

const dateToString = (date: Date) => {
  const yyyy = date.getFullYear()
  const mm = `${date.getMonth() + 1}`.padStart(2, '0')
  const dd = `${date.getDate()}`.padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const getReservationsByDate = (date: Date): Array<Reservation> | null => {
  const reservations = reservationStore.data?.dates[dateToString(date)]
  if (reservations) {
    return reservations
  }
  return null
}
</script>

<template>
  <div class="reservation-table">
    <ul v-if="reservationStore.isLoaded" class="reservation-list__container">
      <li v-for="date in datesFromStartToEnd">
        <ReservationList :date="date" :reservations="getReservationsByDate(date)"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reservation-table {
  @apply p-4
}

.reservation-list__container {
  @apply flex overflow-x-scroll pb-8;
}
</style>
