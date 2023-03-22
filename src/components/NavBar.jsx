import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userChangeAuth } from '../store/appSlice';
import { MAIN_PAGE, SETTINGS_PAGE } from '../utils/consts';

const NavBar = () => {
  const auth = useSelector((state) => state.auth.auth[0].type);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex' }}>
      <>
        <button onClick={() => navigate(MAIN_PAGE)}>Main</button>
        {auth ? <button onClick={() => navigate(SETTINGS_PAGE)}>Setting</button> : <></>}
        <button onClick={() => dispatch(userChangeAuth())}>Sign out</button>
      </>
    </div>
  );
};

export default NavBar;
