import { defineStore } from 'pinia';
import Centre from '../domain/centre/Centre';
import User from '../domain/user/User';
import Reservation from '../domain/reservation/Reservation';
import { fetchCentreList, fetchCentreDetail } from '../domain/centre/CentreClient';
import { fetchTrainerList } from '../domain/user/UserClient';
import { fetchReservationList } from '../domain/reservation/ReservationClient';


interface State {
  list: Centre[] | null,
  data: Centre | null,
  trainerList: User[] | null,
  reservationList: Reservation[] | null,
}


export const useCentreStore = defineStore('centre', {
  state: (): State => ({
    list: null,
    data: null,
    reservationList: null,
    trainerList: null,
  }),
  actions: {
    setCentreList() {
      fetchCentreList().then((res) => {
        this.list = res.data
      })
    },
    setCentreDetail(centreId: string) {
      fetchCentreDetail(centreId).then((res) => {
        this.data = res.data
      })
    },
    setTrainerList(centre_id: string) {
      fetchTrainerList(centre_id).then((res) => {
        this.trainerList = res.data
      })
    },
    setReservationList(centre_id: string, trainer_id: string) {
      fetchReservationList(centre_id, trainer_id).then((res) => {
        this.reservationList = res.data
      })
    },
    clearReservationList() {
      this.reservationList = null
    }
  }
});
