<script setup lang="ts">

const props = defineProps<{
  reservation: {
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
  }
}>()

const endHour = props.reservation.hour + Math.floor(props.reservation.duration / 60)
const endMinute = props.reservation.minute + props.reservation.duration % 60

</script>

<template>
<div class="reservation">
  <div class="reservation__name">{{ reservation.member.profile.name }}</div>
  <div>
      <span>{{ reservation.hour }}시 <span v-if="reservation.minute">{{ reservation.minute }}분</span></span>
      <span> - </span>
      <span>{{ endHour }}시 <span v-if="endMinute">{{ endMinute }}분</span></span> ({{ reservation.duration }}분)</div>
  </div>
</template>

<style scoped>
.reservation {
  @apply p-4 mb-4 border border-gray-300 rounded;
}

.reservation__name {
  @apply mb-1 font-bold;
}
</style>
