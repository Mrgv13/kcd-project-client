import './login-page.scss'
import { LOGIN_ROUTE } from '../../../common/routes/consts/pagesRoutes'

import useInput from '../../../common/hooks/login/useInput'

import { registration } from '../../../http/user-api'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

const LoginPage = observer(() => {
  // const dispatch = useDispatch();

  const signIn = async () => {
    const response = await registration(log.value, pass.value)
    console.log(response)
  }

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
        <span>Регистрация</span>
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
        <button
          disabled={!log.inputValid || !pass.inputValid}
          onClick={signIn}
          // onClick={() => {
          //   dispatch(userChangeAuth());
          //   navigate(MAIN_PAGE);
          // }}
        >
          Зарегистрироваться
        </button>
        <button
          onClick={() => {
            navigate(LOGIN_ROUTE)
          }}>
          Log In
        </button>
      </div>
    </div>
  )
})

export default LoginPage
