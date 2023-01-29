import axios, { AxiosResponse } from 'axios';
import Reservation from './Reservation';


export const fetchReservationList = async (centre_id: string, trainer_id: string): Promise<AxiosResponse<Reservation[]>> => {
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
  }
  const url = `${import.meta.env.VITE_API_BASE_URL}/centres/${centre_id}/trainers/${trainer_id}/reservations/`
  const response = axios.get(url, { headers: headers, })
  return response
}
