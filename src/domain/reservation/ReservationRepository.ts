// import { fetchCourseList, fetchCourseGlobalStatus } from '@/api/course';
import type Reservation from './Reservation';

interface ReservationRepository {
  getReservationList(): Promise<Reservation[]>;
}

// async function getReservationList(): Promise<Reservation[]> {
//   return fetchReservationList();
// }

// export default {
//   getReservationList,
// } as ReservationRepository;
