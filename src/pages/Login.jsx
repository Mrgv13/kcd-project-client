import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userChangeAuth } from '../store/appSlice';
import { useNavigate } from 'react-router-dom';
import { MAIN_PAGE } from '../utils/consts';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <textarea />
      <textarea />
      <button onClick={() => dispatch(userChangeAuth())}>Login</button>
    </>
  );
};

export default Login;
