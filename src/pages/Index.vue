<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthTokenStore } from '../stores/authToken';

const router = useRouter()
const authTokenStore = useAuthTokenStore()

if (authTokenStore.isAuthenticated) {
  router.replace('/centres')
}

</script>

<template>
  <div>
    <h1>PT Booster</h1>
  </div>
</template>

<style scoped>

</style>
