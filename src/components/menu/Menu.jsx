import React from 'react';
import './menu.scss';
import { userChangeAuth } from '../../store/appSlice';

import { useDispatch } from 'react-redux';

const Menu = ({ header, items, menuActive, setMenuActive }) => {
  const dispatch = useDispatch();
  return (
    <div className={menuActive ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__content__link">
          {items.map((items) => (
            <a key={items.value}>{items.value}</a>
          ))}
        </div>
        <a className="sign__out" onClick={() => dispatch(userChangeAuth())}>
          Выйти
        </a>
      </div>
    </div>
  );
};

export default Menu;
