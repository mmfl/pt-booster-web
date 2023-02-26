<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const centreId = route.params.centreId as string

const getFirstAndLastDayOfWeek = (date: Date): Array<Date> => {
  const first = date.getDate() - date.getDay()
  const firstDay = new Date(date.setDate(first))
  const lastDay = new Date(date.setDate(firstDay.getDate() + 6))
  return [firstDay, lastDay]
}

const dateToString = (date: Date) => {
  const yyyy = date.getFullYear()
  const mm = `${date.getMonth() + 1}`.padStart(2, '0')
  const dd = `${date.getDate()}`.padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

const selectedDate = route.query.date ? ref(new Date(route.query.date as string)) : ref(new Date())
const date = ref(getFirstAndLastDayOfWeek(selectedDate.value))

watch(date, () => {
  const trainerId = route.params.trainerId
  router.replace({ name: 'trainer-detail', params: { centreId, trainerId }, query: { date: dateToString(date.value[0]) }})
})
</script>


<template>
  <div class="p-4">
    <VueDatePicker
      v-model="date"
      format="yyyy-MM-dd"
      week-picker
      week-start="0"
      auto-apply
      locale="ko-KR"
      position="left"
    ></VueDatePicker>
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
