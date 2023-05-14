import { fetchOneWork, fetchWorks } from '../http/work-aip'

import { makeAutoObservable, runInAction } from 'mobx'

export default class WorksStore {
  _works = []
  _work = []
  _loading = false
  _loading_work = false

  constructor() {
    makeAutoObservable(this)
  }

  getProjectsList = async (projectId) => {
    this._loading = true

    try {
      const data = await fetchWorks(projectId).then((res) => res.data)

      runInAction(() => {
        this._works = data
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this._loading = false))
    }
  }

  getOneWork = async (id) => {
    this._loading_work = true
    try {
      const data = await fetchOneWork(id).then((res) => res.data)

      runInAction(() => {
        this._work = data
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this._loading_work = false))
    }
  }

  resetStore = () => {
    this._works = []
  }

  resetStoreWork = () => {
    this._work = []
  }

  get isWorks() {
    return this._works
  }

  get isWork() {
    return this._work
  }

  get loading() {
    return this._loading
  }

  get loadingWork() {
    return this._loading_work
  }
}
