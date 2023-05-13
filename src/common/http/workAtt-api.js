import { $authHost } from './index'

export const createWorkAtt = async (project) => {
  const data = await $authHost.post('works_attributes/', project)
  return data
}

export const fetchWorkAtt = async (projectId) => {
  const data = await $authHost.get(`works_attributes/?projectId=${projectId}`)
  return data
}

export const fetchOneWorkAtt = async (id) => {
  const data = await $authHost.get(`works_attributes/${id}`)
  return data
}

export const deleteWorkAttrebute = async (id) => {
  const data = await $authHost.delete(`works_attributes/${id}`)
  return data
}
