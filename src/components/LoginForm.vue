<script setup lang="ts">
// import { ref } from 'vue'

// defineProps<{
//   msg: string
// }>()


const loginWithKakao = () => {
  const redirectUri = `${import.meta.env.VITE_BASE_URL}/oauth/kakao`
  console.log(redirectUri)
  window.Kakao.Auth.authorize({
    redirectUri
  })
}

</script>

<template>
  <button @click="loginWithKakao">
    카카오 계정으로 로그인
  </button>
</template>

<style scoped>

</style>
