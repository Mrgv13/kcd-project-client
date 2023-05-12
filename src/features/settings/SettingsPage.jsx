import './setting-page.scss'
import ButtonMain from '../../common/components/button/ButtonMain'

import { Context } from '../../index'

import React, { useContext } from 'react'

const SettingsPage = () => {
  const { user } = useContext(Context)
  return (
    <div className="setting__page__style">
      <span>Настройки</span>
      <div className="child">
        <span>Email адрес</span>
        Ваш адрес электронной почты - {user.user.email}
        <ButtonMain
          styleComponent="default"
          text={'Сменить почту'}
          onClick={() => {}}
        />
      </div>
      <div className="child">
        <span>Пароль</span>
        Запрос на смену пароля будет направлен на ваш email
        <ButtonMain
          styleComponent="default"
          text={'Сменить пароль'}
          onClick={() => {}}
        />
      </div>
      <div className="child">
        <span>Удалить аккаунт</span>
        Навсегда удалить аккаунт?
        <ButtonMain
          styleComponent="default"
          text={'Удалить аккаунт'}
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default SettingsPage
