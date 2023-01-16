// import { createHttpClient } from '../../lib/http-client';

import type Centre from './Centre';

// import { API_COURSE_LIST } from '@/api/constants';

// const instance = createHttpClient()
//   .setBaseUrl(import.meta.env.VITE_API_BASE_URL)
//   .build();

import axios, { AxiosResponse } from 'axios';

export const fetchCentreList = async (): Promise<AxiosResponse<Centre[]>> => {
  const response = axios.get(`${import.meta.env.VITE_API_BASE_URL}/centres/`);
  return response
};
