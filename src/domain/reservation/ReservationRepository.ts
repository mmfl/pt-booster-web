// import { fetchCourseList, fetchCourseGlobalStatus } from '@/api/course';
import type Reservation from './Reservation';
import { fetchReservationList } from './ReservationClient';


interface ReservationRepository {
  getReservationList(centreId: string, trainerId: string, startDate: string, endDate?: string): Promise<Reservation[]>;
}

async function getReservationList(centreId: string, trainerId: string, startDate: string, endDate?: string): Promise<Reservation[]> {
  const response = await fetchReservationList(centreId, trainerId, startDate, endDate)
  return response.data
}

export default {
  getReservationList,
} as ReservationRepository;
