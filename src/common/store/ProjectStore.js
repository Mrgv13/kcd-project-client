import { fetchProjects } from '../http/project-api'

import { makeAutoObservable, runInAction } from 'mobx'

export default class ProjectStore {
  _projects = []
  _loading = false

  constructor() {
    makeAutoObservable(this)
  }

  getProjectsList = async (userId) => {
    this._loading = true

    try {
      const data = await fetchProjects(userId).then((res) => res.data)

      runInAction(() => {
        this._projects = data
      })
    } catch (error) {
      console.log(error)
    } finally {
      runInAction(() => (this._loading = false))
    }
  }

  resetStore = () => {
    this._projects = []
  }

  setProjects(projects) {
    this._projects = projects
  }

  get isProjects() {
    return this._projects
  }

  get loading() {
    return this._loading
  }
}
