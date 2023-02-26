import { defineStore } from 'pinia';
import Reservation, { ReservationListWithDate } from '../domain/reservation/Reservation';
import ReservationService from '../domain/reservation/ReservationService';

interface State {
  isLoaded: boolean,
  data: ReservationListWithDate | null,
}


export const useReservationStore = defineStore('reservation', {
  state: (): State => ({
    isLoaded: false,
    data: null as ReservationListWithDate | null,
  }),
  actions: {
    setReservationList(centreId: string, trainerId: string, startDate: string, endDate?: string) {    
      ReservationService.getReservationList(centreId, trainerId, startDate, endDate).then((ReservationListWithDate) => {
        this.data = ReservationListWithDate
        this.isLoaded = true
      })
    },
    clearReservationList() {
      this.data = null
      this.isLoaded = false
    },
  }
});
