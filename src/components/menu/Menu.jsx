import './menu.scss';
import {userChangeAuth} from '../../store/appSlice';

import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';

const Menu = ({header, items, menuActive, setMenuActive, onClick}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(items);
  });

  return (
      <div className={menuActive ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <div className="menu__content__link">
            {items.map((items) => (
                <button onClick={() => navigate(items.path)} key={items.path}>
                  {items.name}
                </button>
            ))}
          </div>
          <button className="sign__out" onClick={() => dispatch(userChangeAuth())}>
            Выйти
          </button>
        </div>
      </div>
  );
};

export default Menu;
