import './login-page.scss'
import { MAIN_PAGE, SIGN_ROUTE } from '../../common/routes/consts/pagesRoutes'

import useInput from '../../common/hooks/login/useInput'

import { login } from '../../common/http/user-api'

import { Context } from '../../index'

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

const LoginPage = observer(() => {
  const { user } = useContext(Context)

  const log = useInput('', {
    minLength: 7,
    maxLength: 25,
    isEmail: true,
  })
  const pass = useInput('', { minLength: 7, maxLength: 20 })
  const navigate = useNavigate()

  const logIn = async () => {
    let data
    try {
      data = await login(log.value, pass.value)
      user.setUser(user)
      user.setAuth(true)
      navigate(MAIN_PAGE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div className="login__style">
      <div className="login__form">
        <span>Авторизация</span>
        <div className="text_area">
          <div>
            <span className="login__err">{log.errorText}</span>
            <input
              placeholder="Логин"
              value={log.value}
              maxLength={40}
              onChange={(e) => log.onChange(e)}
              onBlur={(e) => log.onBlur(e)}
              autoFocus={true}
            />
          </div>

          <div>
            <span className="pass__err">{pass.errorText}</span>
            <input
              placeholder="Пароль"
              value={pass.value}
              onChange={(e) => pass.onChange(e)}
              onBlur={(e) => pass.onBlur(e)}
              maxLength={40}
            />
          </div>
        </div>
        <button disabled={!log.inputValid || !pass.inputValid} onClick={logIn}>
          Войти
        </button>
        <button
          onClick={() => {
            navigate(SIGN_ROUTE)
          }}>
          Sign In
        </button>
      </div>
    </div>
  )
})

export default LoginPage
