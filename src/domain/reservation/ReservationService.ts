import Reservation, { ReservationListWithDate } from './Reservation';
import ReservationRepository from './ReservationRepository';
import { dateToString } from '../../utils/date';


interface ReservationService {
  getReservationList: (centreId: string, trainerId: string, startDate: string, endDate?: string) => Promise<ReservationListWithDate>;
}


async function getReservationList(centreId: string, trainerId: string, startDate: string, endDate?: string): Promise<ReservationListWithDate> {
  const reservations = await ReservationRepository.getReservationList(centreId, trainerId, startDate, endDate);

  const reservationGroupByDate = reservations.reduce((acc, cur) => {
    const date: string = cur.date;
    if (acc[date]) {
      acc[date].push(cur);
    } else {
      acc[date] = [cur];
    }
    return acc;
  }, {} as { [key: string]: Array<Reservation> });

  return {
    startDate: new Date(startDate),
    endDate: endDate ? new Date(endDate) : new Date(startDate),
    dates: reservationGroupByDate,
  }
}


export default {
  getReservationList,
} as ReservationService;
