<script setup lang="ts">
import { useCentreStore } from '../stores/centre'

const centreStore = useCentreStore()

</script>

<template>
  <ul>
    <li v-for="reservation in centreStore.reservationList" :key="reservation.id">
      <div>
        <span>{{ reservation.member.profile.name }}</span><br>
        <span>{{ reservation.date }} {{ reservation.hour }}시 {{ reservation.minute }}분 ({{ reservation.duration }}분)</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>
