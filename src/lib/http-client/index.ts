import type { HttpClientBuilder } from './HttpClient';
import type { RequestInterceptor, ResponseInterceptor } from './AxiosClient';
import { AxiosClientBuilder } from './AxiosClient';
import {
  STORAGE_KEY_ACCESS_TOKEN,
  STORAGE_KEY_REFRESH_TOKEN,
} from '@/stores/constants';

const requestInterceptor: RequestInterceptor = {
  async onFulfilled(config) {
    const accessToken = localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN) ?? '';
    if (!accessToken) return config;

    config.headers!.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  onRejected(err) {
    return Promise.reject(err);
  },
};

const responseInterceptor: ResponseInterceptor = {
  async onFulfilled(response) {
    return response;
  },
  onRejected(err) {
    return Promise.reject(err);
  },
};

export function createHttpClient(): HttpClientBuilder {
  const builder: AxiosClientBuilder = new AxiosClientBuilder();
  return builder
    .setRequestInterceptor(requestInterceptor)
    .setResponseInterceptor(responseInterceptor);
}
