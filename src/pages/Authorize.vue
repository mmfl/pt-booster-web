<script setup lang="ts">
import qs from 'qs';
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { useAuthTokenStore } from '../stores/authToken'
import { useUserStore } from '../stores/user'

const route = useRoute()
const router = useRouter()

const authTokenStore = useAuthTokenStore();
const userStore = useUserStore();

const code = route.query.code

axios.post('https://kauth.kakao.com/oauth/token', qs.stringify({
  grant_type: 'authorization_code',
  client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
  redirect_uri: `${import.meta.env.VITE_BASE_URL}/oauth/kakao`,
  code: code,
})).then(res => {
  authTokenStore.setAccessToken(res.data.access_token)
  authTokenStore.setRefreshToken(res.data.refresh_token)

  userStore.setUser()

  router.replace('/centres')
}).catch(err => {
  console.log(err)
})

</script>

<template>
</template>

<style scoped>
</style>
