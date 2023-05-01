import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setAuth(bool) {
    this._isAuth = bool
  }

  setUser(value) {
    this._user = value
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
