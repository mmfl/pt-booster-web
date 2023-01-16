import axios from 'axios';
import { defineStore } from 'pinia';
import { useAuthTokenStore } from './authToken';


interface State {
  id: string;
  uid: string;
}


export const useUserStore = defineStore('user', {
  state: (): State => ({
    id: '',
    uid: '',
  }),
  getters: {
  },
  actions: {
    async setUser() {
      const authToken = useAuthTokenStore();

      axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/me/`, {
        headers: {
          Authorization: `Bearer ${authToken.accessToken}`,
        }
      }).then((res) => {
        this.id = res.data.id
        this.uid = res.data.uid
      }).catch((err) => {
        console.log(err)
      })
    },
    unsetUser() {
      this.id = ''
      this.uid = ''
    }
  }
});
