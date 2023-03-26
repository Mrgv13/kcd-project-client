import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  BRIGADES_PAGE,
  MAIN_PAGE,
  SETTINGS_PAGE,
  USER_SETTINGS_PAGE,
} from '../../utils/constsRoutesPages';
import './navbar.scss';
import ButtonMain from '../button/ButtonMain';
import Menu from '../menu/Menu';
import { MenuButtom, Settings, UserSettings } from '../../utils/icons/asf';

const NavBar = () => {
  const auth = useSelector((state) => state.auth.auth[0].type);
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  // mocking

  const items = [
    { value: 'Календарный график', href: '/cg' },
    { value: 'Работы', href: '/work' },
    { value: 'Загрузка документов', href: '/load_doc' },
    { value: 'Форм док', href: '/form_doc' },
  ];

  //

  return (
    <div className="navbar">
      <div className="navbar__menu__bottom">
        <div className="svg__icons" onClick={() => setMenuActive(!menuActive)}>
          <MenuButtom stroke={'black'} />
        </div>
      </div>
      <div className="navbar__button">
        {auth ? <ButtonMain text={'ПРОЕКТЫ'} onClick={() => navigate(MAIN_PAGE)} /> : <></>}
        {auth ? <ButtonMain text={'БРИГАДЫ'} onClick={() => navigate(BRIGADES_PAGE)} /> : <></>}
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
      <Menu items={items} menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default NavBar;
