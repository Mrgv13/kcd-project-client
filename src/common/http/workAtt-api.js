import { $authHost } from './index'

export const createWorkAtt = async (work) => {
  const data = await $authHost.post('works_attributes/', work)
  return data
}

export const fetchWorkAttr = async (workId) => {
  const data = await $authHost.get(`works_attributes/?workId=${workId}`)
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

export const updateWorkAttrebute = async (id, updateDate) => {
  const data = await $authHost.post(`works_attributes/update/${id}`, updateDate)
  return data
}
