import { $authHost, $host } from './index'

import jwtDecode from 'jwt-decode'

export const registration = async (email, password) => {
  const data = await $host.post('api/registration', {
    email,
    password,
  })
  localStorage.setItem('token', data.data.token)

  return jwtDecode(data.data.token)
}

export const login = async (email, password) => {
  const data = await $host.post('api/login', {
    email,
    password,
  })
  localStorage.setItem('token', data.data.token)

  return jwtDecode(data.data.token)
}

export const check = async () => {
  const data = await $authHost.get('api/auth')

  localStorage.setItem('token', data.data.token)
  return jwtDecode(data.data.token)
}
