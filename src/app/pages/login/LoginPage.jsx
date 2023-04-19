import { userChangeAuth } from '../../../store/appSlice'
import './login-page.scss'
import { MAIN_PAGE } from '../../../routes/consts/pagesRoutes'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div className="login__style">
      <div className="login__form">
        <span>Авторизация</span>
        <div className="text_area">
          <input
            placeholder="Логин"
            value={login}
            maxLength={40}
            onChange={(e) => setLogin(() => e.target.value)}
            autoFocus={true}
          />
          <input
            placeholder="Пароль"
            value={password}
            maxLength={40}
            onChange={(e) => setPassword(() => e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            dispatch(userChangeAuth())
            navigate(MAIN_PAGE)
          }}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default LoginPage
