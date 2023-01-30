import type Centre from './Centre';

import axios, { AxiosResponse } from 'axios';

export const fetchCentreList = async (): Promise<AxiosResponse<Centre[]>> => {
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
  }
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/centres/`, {
    headers: headers,
  });
  return response
};

export const fetchCentreDetail = async (centreId: string): Promise<AxiosResponse<Centre>> => {
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem('auth.accessToken')}`
  }
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/centres/${centreId}/`, {
    headers: headers,
  });
  return response
}
