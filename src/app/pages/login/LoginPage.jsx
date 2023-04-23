import { userChangeAuth } from '../../../store/appSlice'
import './login-page.scss'
import { MAIN_PAGE } from '../../../routes/consts/pagesRoutes'

import useInput from '../../../hooks/useInput'

import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const dispatch = useDispatch()

  const log = useInput('', {
    minLength: 7,
    maxLength: 25,
    isEmail: true,
  })
  const pass = useInput('', { minLength: 7, maxLength: 20 })

  const navigate = useNavigate()
  return (
    <div className="login__style">
      <div className="login__form">
        <span>Авторизация</span>
        <div className="text_area">
          {log.errorText}
          <input
            placeholder="Логин"
            value={log.value}
            maxLength={40}
            onChange={(e) => log.onChange(e)}
            onBlur={(e) => log.onBlur(e)}
            autoFocus={true}
          />
          {pass.errorText}
          <input
            placeholder="Пароль"
            value={pass.value}
            onChange={(e) => pass.onChange(e)}
            onBlur={(e) => pass.onBlur(e)}
            maxLength={40}
          />
        </div>
        <button
          disabled={!log.inputValid || !pass.inputValid}
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
