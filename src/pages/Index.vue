<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthTokenStore } from '../stores/authToken';
import imgUrl from '../assets/pt-booster-full-no-bg.png'


const router = useRouter()
const authTokenStore = useAuthTokenStore()

if (authTokenStore.isAuthenticated) {
  router.replace('/centres')
}

</script>

<template>
  <div class="wordmark__container">
    <img :src="imgUrl" alt="PT Booster Wordmark">
  </div>
</template>

<style scoped>
.wordmark__container {
  @apply py-16 px-80;
}
</style>
