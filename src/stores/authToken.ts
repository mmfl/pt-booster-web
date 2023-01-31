import qs from 'qs';
import axios from 'axios';
import { defineStore } from 'pinia';


interface State {
  accessToken: string;
  refreshToken: string;
}


export const useAuthTokenStore = defineStore('authToken', {
  state: (): State => ({
    accessToken: localStorage.getItem('auth.accessToken') ?? '',
    refreshToken: localStorage.getItem('auth.refreshToken') ?? '',
  }),
  getters: {
    isAuthenticated(): boolean {
      return !!this.accessToken;
    },
  },
  actions: {
    async validateTokens() {
      try {
        const { data } = await axios.get('https://kapi.kakao.com/v1/user/access_token_info', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
          },
        });

        if (data.expires_in < 600) {
          await this.refreshTokens()
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status == 401) {
            await this.refreshTokens()
          }
        }
      }
    },
    async refreshTokens() {
      try {
        const { data } = await axios.post('https://kauth.kakao.com/oauth/token', qs.stringify({
          grant_type: 'refresh_token',
          client_id: import.meta.env.VITE_KAKAO_CLIENT_ID,
          refresh_token: this.refreshToken,
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        });
        this.setAccessToken(data.access_token);
        if (data.refresh_token) {
          this.setRefreshToken(data.refresh_token);
        }
      } catch (error) {
        this.unsetTokens();
      }
    },
    setAccessToken(accessToken: string) {
      this.accessToken = accessToken;
      localStorage.setItem('auth.accessToken', accessToken);
    },
    setRefreshToken(refreshToken: string) {
      this.refreshToken = refreshToken;
      localStorage.setItem('auth.refreshToken', refreshToken);
    },
    unsetTokens() {
      this.accessToken = '';
      this.refreshToken = '';
      localStorage.removeItem('auth.accessToken');
      localStorage.removeItem('auth.refreshToken');
    }
  }
});
