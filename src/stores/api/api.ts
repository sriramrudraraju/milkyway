import axios from 'axios';

export class Api {
  private readonly axios = axios;

  public get(url: string) {
    return this.axios.get(url);
  }
  public post<T>(url: string, body: T) {
    return this.axios.post(url, body);
  }
}
