import { fetchWorkAttr } from '../http/workAtt-api'

import { makeAutoObservable, runInAction } from 'mobx'

export default class WorksAttrStore {
  _worksAttr = []
  _loading = false
  _workId = null

  constructor() {
    makeAutoObservable(this)
  }

  getProjectsList = async (id) => {
    this._loading = true

    try {
      const data = await fetchWorkAttr(id).then((res) => res.data)

      runInAction(() => {
        this._worksAttr = data
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this._loading = false))
    }
  }

  resetStore = () => {
    this._worksAttr = []
  }

  setWorkId(id) {
    this._workId = id
  }

  get isWorkId() {
    return this._workId
  }

  get isWorksAttr() {
    return this._worksAttr
  }

  get loading() {
    return this._loading
  }
}
