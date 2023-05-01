import './menu.scss'

import { Context } from '../../../index'

import { useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { observer } from 'mobx-react'

const Menu = observer(
  ({ header, items, menuActive, setMenuActive, onClick }) => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setAuth(false)
    }

    return (
      <div
        className={menuActive ? 'menu active' : 'menu'}
        onClick={() => setMenuActive(false)}>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <div className="menu__content__link">
            {items.map((items) => (
              <button onClick={() => navigate(items.path)} key={items.path}>
                {items.name}
              </button>
            ))}
          </div>
          <button className="sign__out" onClick={logOut}>
            Выйти
          </button>
        </div>
      </div>
    )
  },
)

export default Menu
