import { defineStore } from 'pinia';
import Centre from '../domain/centre/Centre';
import { fetchCentreList } from '../domain/centre/CentreClient';


interface State {
  data: Centre[] | null
}


export const useCentreStore = defineStore('centre', {
  state: (): State => ({
    data: null,
  }),
  actions: {
    setCentreList() {
      fetchCentreList().then((res) => {
        this.data = res.data
      })
    },
  }
});
