import { $authHost } from './index'

export const createProject = async (project) => {
  const data = await $authHost.post('api-project/', project)
  return data
}

export const fetchProjects = async (userId) => {
  const data = await $authHost.get('api-project/' + userId)
  return data
}

export const fetchOneProject = async (id) => {
  const data = await $authHost.get(`api-project/?id=${id}`)
  return data
}

export const deleteProject = async (id) => {
  const data = await $authHost.delete(`api-project/?id=${id}`)
  return data
}
