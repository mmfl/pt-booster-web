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
  <nav class="nav" v-if="authTokenStore.isAuthenticated">
    <div>
      <span v-show="userStore.id">
        {{ userStore.profile.name }} ({{ userStore.role }})
      </span>
      <button class="button button-logout" @click="logout">
        로그아웃
      </button>
    </div>
  </nav>
  <nav class="nav" v-else>
    <div>
      <button class="button button-login" @click="loginWithKakao">
        카카오 계정으로 로그인
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  @apply flex justify-end p-4 mb-4
}

.nav .button {
  @apply px-4 py-2 rounded ml-4
}

.button.button-login {
  @apply bg-violet-600 text-slate-200 
}

.button.button-logout {
  @apply bg-rose-600 text-slate-200
}
</style>
