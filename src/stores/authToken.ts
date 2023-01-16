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
