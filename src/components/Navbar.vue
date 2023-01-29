<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useAuthTokenStore } from '../stores/authToken';
import { useUserStore } from '../stores/user';

const authTokenStore = useAuthTokenStore()
const userStore = useUserStore()

const router = useRouter()

const loginWithKakao = () => {
  const redirectUri = `${import.meta.env.VITE_BASE_URL}/oauth/kakao`
  window.Kakao.Auth.authorize({
    redirectUri
  })
}

const logout = () => {
  authTokenStore.unsetTokens()

  router.push('/')
}

if (authTokenStore.isAuthenticated) {
  userStore.setUser()
}

</script>

<template>
  <nav v-if="authTokenStore.isAuthenticated">
    <span>
      {{ userStore.profile.name }} ({{ userStore.role }})
    </span>
    <button @click="logout">
      로그아웃
    </button>
  </nav>
  <nav v-else>
    <button @click="loginWithKakao">
      카카오 계정으로 로그인
    </button>
  </nav>
</template>

<style scoped>

</style>
