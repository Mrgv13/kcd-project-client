import { $host } from './index'

import jwtDecode from 'jwt-decode'

export const registration = async (email, password) => {
  const { data } = await $host.post('api/registration', {
    email,
    password,
  })

  return jwtDecode(data.jwt)
}

export const login = async (email, password) => {
  const { data } = await $host.post('api/login', {
    email,
    password,
  })

  return jwtDecode(data.jwt)
}

export const check = async () => {
  const { data } = await $host.post('api/auth')
  return jwtDecode(data.jwt)
}
