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
    list: [],
    data: null,
    reservationList: [],
    trainerList: [],
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
    setCentreDetailByCentre(centre: Centre) {
      this.data = centre
    },
    setTrainerList(centreId: string) {
      fetchTrainerList(centreId).then((res) => {
        this.trainerList = res.data
      })
    },
    setReservationList(centreId: string, trainerId: string, date: string) {
      fetchReservationList(centreId, trainerId, date).then((res) => {
        this.reservationList = res.data
      })
    },
    clearReservationList() {
      this.reservationList = []
    },
  }
});
