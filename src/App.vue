<script setup lang="ts">
import Navbar from './components/Navbar.vue'

window.Kakao.init('1e87e5f081a762c88882f9c7e40d6378')
</script>

<template>
  <div class="container">
    <Navbar />
    <router-view></router-view>
  </div>
</template>


<style scoped>
.container {
  @apply pb-16;
}
</style>
