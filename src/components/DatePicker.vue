<script setup lang="ts">
import { computed } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps<{
  date: Array<Date>
}>()

const emit = defineEmits<{
  (event: 'update:date', date: Array<Date>): void
}>()

const date = computed({
  get: () => props.date,
  set: (newDate: Array<Date>) => emit('update:date', newDate)
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

</style>
