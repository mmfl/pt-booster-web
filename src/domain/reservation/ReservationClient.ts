import axios, { AxiosResponse } from 'axios';
import Reservation from './Reservation';


export const fetchReservationList = async (centreId: string, trainerId: string, startDate: string, endDate?: string): Promise<AxiosResponse<Reservation[]>> => {
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
  }
  const url = `${import.meta.env.VITE_API_BASE_URL}/centres/${centreId}/trainers/${trainerId}/reservations/`
  const response = axios.get(url, {
    headers: headers,
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  })
  return response
}
