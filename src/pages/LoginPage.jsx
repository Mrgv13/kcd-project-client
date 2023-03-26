import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userChangeAuth } from '../store/appSlice';
import '../style/login.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="login__style">
      <div className="login__form">
        <span>Авторизация</span>
        <div className="text_area">
          <input
            placeholder="Логин"
            value={login}
            maxLength={40}
            onChange={(e) => setLogin(() => e.target.value)}
            autoFocus={true}
          />
          <input
            placeholder="Пароль"
            value={password}
            maxLength={40}
            onChange={(e) => setPassword(() => e.target.value)}
          />
        </div>
        <button onClick={() => dispatch(userChangeAuth())}>Войти</button>
      </div>
    </div>
  );
};

export default LoginPage;
