import type HTTPClient from './HTTPClient.js';
import type { HttpClientBuilder } from './HttpClient.js';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export interface RequestInterceptor {
  onFulfilled(
    value: AxiosRequestConfig<any>
  ): AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>>;
  onRejected(err: any): any;
}

export interface ResponseInterceptor {
  onFulfilled(
    value: AxiosResponse<any>
  ): AxiosResponse<any> | Promise<AxiosResponse<any>>;
  onRejected(err: any): any;
}

export default class AxiosClient implements HTTPClient {
  private axiosClilent;

  constructor() {
    this.axiosClilent = axios.create();
  }

  set baseUrl(url: string) {
    this.axiosClilent.defaults.baseURL = url;
  }
  set requestInterceptor({ onFulfilled, onRejected }: RequestInterceptor) {
    this.axiosClilent.interceptors.request.use(onFulfilled, onRejected);
  }
  set responseInterceptor({ onFulfilled, onRejected }: ResponseInterceptor) {
    this.axiosClilent.interceptors.response.use(onFulfilled, onRejected);
  }

  async get(url: string, config?: Record<string, unknown>): Promise<any> {
    try {
      const response = await this.axiosClilent.get(url, config);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async post(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any> {
    try {
      const response = await this.axiosClilent.post(url, body, config);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async put(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any> {
    try {
      const response = await this.axiosClilent.put(url, body, config);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async patch(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any> {
    try {
      const response = await this.axiosClilent.patch(url, body, config);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async delete(
    url: string,
    config?: Record<string, unknown>
  ): Promise<unknown> {
    try {
      const response = await this.axiosClilent.delete(url, config);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export class AxiosClientBuilder implements HttpClientBuilder {
  private readonly client: AxiosClient;

  constructor() {
    this.client = new AxiosClient();
  }

  setBaseUrl(url: string): AxiosClientBuilder {
    this.client.baseUrl = url;
    return this;
  }

  setRequestInterceptor({
    onFulfilled,
    onRejected,
  }: RequestInterceptor): AxiosClientBuilder {
    this.client.requestInterceptor = { onFulfilled, onRejected };
    return this;
  }

  setResponseInterceptor({
    onFulfilled,
    onRejected,
  }: ResponseInterceptor): AxiosClientBuilder {
    this.client.responseInterceptor = { onFulfilled, onRejected };
    return this;
  }

  build(): HTTPClient {
    return this.client;
  }
}
