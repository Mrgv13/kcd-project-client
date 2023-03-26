import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userChangeAuth } from '../../store/appSlice';
import {
  BRIGADES_PAGE,
  LOGIN_ROUTE,
  MAIN_PAGE,
  SETTINGS_PAGE,
  USER_SETTINGS_PAGE,
} from '../../utils/consts';
import './navbar.scss';
import ButtonMain from '../button/ButtonMain';
import { ReactComponent as Menu } from '../../utils/icons/menu-button.svg';
import { ReactComponent as Settings } from '../../utils/icons/settings.svg';
import { ReactComponent as UserSettings } from '../../utils/icons/user-profile-circle.svg';

const NavBar = () => {
  const auth = useSelector((state) => state.auth.auth[0].type);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar__menu__bottom">
        <Menu className="svg_icons" />
      </div>
      <div className="navbar__button">
        {auth ? <ButtonMain text={'ПРОЕКТЫ'} onClick={() => navigate(MAIN_PAGE)} /> : <></>}
        {auth ? <ButtonMain text={'БРИГАДЫ'} onClick={() => navigate(BRIGADES_PAGE)} /> : <></>}
      </div>
      <div className="settings">
        {auth ? <Settings className="svg_icons" onClick={() => navigate(SETTINGS_PAGE)} /> : <></>}
        {auth ? (
          <UserSettings className="svg_icons" onClick={() => navigate(USER_SETTINGS_PAGE)} />
        ) : (
          <></>
        )}
        <a onClick={auth ? () => dispatch(userChangeAuth()) : () => navigate(LOGIN_ROUTE)}>
          {auth ? 'Выйти' : 'Войти'}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
