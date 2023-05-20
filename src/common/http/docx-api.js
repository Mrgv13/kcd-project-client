import { $authHost } from './index'

export const createDocx = async (id) => {
  const data = await $authHost.post(`gen-docx/?userId=${id}`)
  return data
}
