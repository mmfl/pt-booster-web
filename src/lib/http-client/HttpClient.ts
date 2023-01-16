export default interface HttpClient {
  get(
    url: string,
    config?: Record<string, unknown>
  ): Promise<any>;
  post(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any>;
  put(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any>;
  patch(
    url: string,
    body: unknown,
    config?: Record<string, unknown>
  ): Promise<any>;
  delete(
    url: string,
    config?: Record<string, unknown>
  ): Promise<any>;
}

export type Filter = (body: Record<string, unknown>) => Record<string, unknown>;

export interface HttpClientBuilder {
  setBaseUrl(url: string): HttpClientBuilder;
  build(): HttpClient;
}
