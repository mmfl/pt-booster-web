<script setup lang="ts">
import { computed } from 'vue'
import ReservationItem from './ReservationItem.vue'

const props = defineProps<{
  date: string | Date
  reservations: Array<{
    id: number
    date: string
    hour: number
    minute: number
    duration: number
    member: {
      profile: {
        name: string
      }
    }
  }> | null
}>()

const date = computed(() => {
  if (typeof props.date === 'string') {
    return props.date
  }
  const date = new Date(props.date)
  const yyyy = date.getFullYear()
  const mm = `${date.getMonth() + 1}`.padStart(2, '0')
  const dd = `${date.getDate()}`.padStart(2, '0')
  const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' })
  return `${yyyy}-${mm}-${dd} (${weekday})`
})

</script>

<template>
  <div class="reservation-list__date">{{ date }}</div>
  <ReservationItem v-if="reservations" v-for="reservation in reservations" :reservation="reservation"></ReservationItem>
  <div v-else class="reservation-list--empty">예약이 없습니다.</div>
</template>

<style scoped>
.reservation-list__date {
  @apply mb-2 font-bold;
}

.reservation-list--empty {
  @apply mr-4 border border-gray-200 rounded p-4 text-center text-slate-400 w-48;
}
</style>
