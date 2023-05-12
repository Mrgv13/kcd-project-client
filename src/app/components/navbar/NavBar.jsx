import { brigadesRoutes } from '../../../common/routes/brigadesRoutes'
import { projectRoutes } from '../../../common/routes/projectRoutes'
import { BRIGADES_PAGE } from '../../../common/routes/consts/brigadesRoutes'
import {
  MAIN_PAGE,
  SETTINGS_PAGE,
} from '../../../common/routes/consts/pagesRoutes'
import { changeRoutes } from '../../../common/store/menuSlice'
import './navbar.scss'
import ButtonMain from '../../../common/components/button/ButtonMain'
import Menu from '../menu/Menu'
import {
  MenuButtom,
  Settings,
  UserSettings,
} from '../../../common/utils/icons/exportIcons'

import { Context } from '../../../index'

import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'

const NavBar = observer(() => {
  const menu = useSelector((state) => state.menu.menu[0].menuAttribute)
  const { user } = useContext(Context)
  const dispatch = useDispatch()
  const [menuActive, setMenuActive] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="navbar__menu__bottom">
        <div className="svg__icons" onClick={() => setMenuActive(!menuActive)}>
          <MenuButtom stroke={'black'} />
        </div>
      </div>
      <div className="navbar__button" onClick={() => setMenuActive(false)}>
        {user.isAuth ? (
          <ButtonMain
            text={'ПРОЕКТЫ'}
            onClick={() => {
              dispatch(changeRoutes(projectRoutes))
              navigate(MAIN_PAGE)
            }}
          />
        ) : (
          <></>
        )}
        {user.isAuth ? (
          <ButtonMain
            text={'БРИГАДЫ'}
            onClick={() => {
              dispatch(changeRoutes(brigadesRoutes))
              navigate(BRIGADES_PAGE)
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="settings">
        {user.isAuth ? (
          <div className="svg__icons">
            <Settings
              stroke={'black'}
              onClick={() => navigate(SETTINGS_PAGE)}
            />
          </div>
        ) : (
          <></>
        )}
        {user.isAuth ? (
          <div className="svg__icons">
            <UserSettings
              stroke={'black'}
              // onClick={() => navigate(USER_SETTINGS_PAGE)}
              onClick={() => console.log(user.user.id)}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Menu
        items={menu}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
      />
    </div>
  )
})

export default NavBar
