import { defineStore } from 'pinia';
import Reservation from '../domain/reservation/Reservation';
import { fetchReservationList } from '../domain/reservation/ReservationClient';


interface State {
  isLoaded: boolean,
  list: Reservation[] | null,
}


export const useReservationStore = defineStore('reservation', {
  state: (): State => ({
    isLoaded: false,
    list: [],
  }),
  actions: {
    setReservationList(centreId: string, trainerId: string, date: string) {
      fetchReservationList(centreId, trainerId, date).then((res) => {
        this.list = res.data
        this.isLoaded = true
      })
    },
    clearReservationList() {
      this.list = []
      this.isLoaded = false
    },
  }
});
