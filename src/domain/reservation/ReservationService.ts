import Reservation from './Reservation';
import ReservationRepository from './ReservationRepository';


interface ReservationService {
  getReservationList: () => Promise<Reservation[]>;
}


async function getReservationList(centreId: string, trainerId: string, date: string) {
  const response = await ReservationRepository.getReservationList(centreId, trainerId, date);
  return response;
}


export default {
  getReservationList,
} as ReservationService;
