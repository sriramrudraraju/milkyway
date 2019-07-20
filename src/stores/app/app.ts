import { observable, action } from 'mobx';

export class AppStore {
  @observable private _counter: number = 0;

  @action
  public incrementCounter() {
    this._counter++;
  }

  public get counter() {
    return this._counter;
  }
}