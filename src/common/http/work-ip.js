import { $authHost } from './index'

export const createWork = async (project) => {
  const data = await $authHost.post('api-works/', project)
  return data
}

export const fetchWorks = async (projectId) => {
  const data = await $authHost.get(`api-works/?projectId=${projectId}`)
  return data
}

export const fetchOneWork = async (id) => {
  const data = await $authHost.get(`api-works/${id}`)
  return data
}

export const deleteWork = async (id) => {
  const data = await $authHost.delete(`api-works/?id=${id}`)
  return data
}
