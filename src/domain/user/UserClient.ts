import axios, { AxiosResponse } from 'axios';
import User from './User';


export const fetchTrainerList = async (centre_id: string): Promise<AxiosResponse<User[]>> => {
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
  }
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/centres/${centre_id}/trainers/`, {
    headers: headers,
  })
  return response
}
