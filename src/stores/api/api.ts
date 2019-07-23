import axios from 'axios';

export class Api {
  public get(url: string) {
    return axios.get(url);
  }
  public post<T>(url: string, body: T) {
    return axios.post(url, body)
  }
}