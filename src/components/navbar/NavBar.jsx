import { brigadesRoutes } from '../../routes/brigadesRoutes';
import { projectRoutes } from '../../routes/projectRoutes';
import { BRIGADES_PAGE } from '../../routes/consts/brigadesRoutes';
import { MAIN_PAGE, SETTINGS_PAGE, USER_SETTINGS_PAGE } from '../../routes/consts/pagesRoutes';
import { changeRoutes } from '../../store/menuSlice';
import './navbar.scss';
import ButtonMain from '../button/ButtonMain';
import Menu from '../menu/Menu';
import { MenuButtom, Settings, UserSettings } from '../../utils/icons/exportIcons';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const auth = useSelector((state) => state.auth.auth[0].type);
  const menu = useSelector((state) => state.menu.menu[0].menuAttribute);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__menu__bottom">
        <div className="svg__icons" onClick={() => setMenuActive(!menuActive)}>
          <MenuButtom stroke={'black'} />
        </div>
      </div>
      <div className="navbar__button" onClick={() => setMenuActive(false)}>
        {auth ? (
          <ButtonMain
            text={'ПРОЕКТЫ'}
            onClick={() => {
              dispatch(changeRoutes(projectRoutes));
              navigate(MAIN_PAGE);
            }}
          />
        ) : (
          <></>
        )}
        {auth ? (
          <ButtonMain
            text={'БРИГАДЫ'}
            onClick={() => {
              dispatch(changeRoutes(brigadesRoutes));
              navigate(BRIGADES_PAGE);
            }}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="settings">
        {auth ? (
          <div className="svg__icons">
            <Settings stroke={'black'} onClick={() => navigate(SETTINGS_PAGE)} />
          </div>
        ) : (
          <></>
        )}
        {auth ? (
          <div className="svg__icons">
            <UserSettings stroke={'black'} onClick={() => navigate(USER_SETTINGS_PAGE)} />
          </div>
        ) : (
          <></>
        )}
      </div>
      <Menu items={menu} menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default NavBar;
