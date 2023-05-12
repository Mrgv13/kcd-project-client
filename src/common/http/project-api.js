import { $authHost } from './index'

export const createProject = async (project) => {
  const data = await $authHost.post('api-project', project)
  return data
}

export const fetchProjects = async (userId) => {
  const data = await $authHost.get('api-project/' + userId)
  return data
}
