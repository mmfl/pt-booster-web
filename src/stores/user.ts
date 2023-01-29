import axios from 'axios';
import { defineStore } from 'pinia';
import { useAuthTokenStore } from './authToken';


interface State {
  id: string;
  uid: string;
  role: string;
  profile: {
    name: string;
  }
}


export const useUserStore = defineStore('user', {
  state: (): State => ({
    id: '',
    uid: '',
    role: '',
    profile: {
      name: '',
    }
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
        this.role = res.data.role
        this.profile.name = res.data.profile.name
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
