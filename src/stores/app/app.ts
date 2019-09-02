import { observable, action } from 'mobx';

import { Api } from '../api/api';

export class AppStore {
  @observable private _counter: number = 0;

  private readonly _api = new Api();

  @action
  public incrementCounter() {
    this._counter++;
  }

  public get counter() {
    return this._counter;
  }

  // public async sampleApiCall() {
  //   const response = await this._api.get('/users');
  // }
}
