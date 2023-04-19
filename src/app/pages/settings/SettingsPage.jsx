import './setting-page.scss'
import ButtonMain from '../../components/button/ButtonMain'

import React from 'react'

const SettingsPage = () => {
  return (
    <div className="setting__page__style">
      <span>Настройки</span>
      <div className="child">
        <span>Email адрес</span>
        Ваш адрес электронной почты - {`test@mail.ru`}
        {/*TODO Сделать почту*/}
        <ButtonMain text={'Сменить почту'} onClick={() => {}} />
      </div>
      <div className="child">
        <span>Пароль</span>
        Запрос на смену пароля будет направлен на ваш email
        <ButtonMain text={'Сменить пароль'} onClick={() => {}} />
      </div>
      <div className="child">
        <span>Удалить аккаунт</span>
        Навсегда удалить аккаунт?
        <ButtonMain text={'Удалить аккаунт'} onClick={() => {}} />
      </div>
    </div>
  )
}

export default SettingsPage
