import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { LOGIN_ROUTE, MAIN_PAGE } from '../utils/constsRoutesPages';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const auth = useSelector((state) => state.auth.auth[0].type);
  const navigate = useNavigate();

  return (
    <Routes>
      {auth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} />} />} />
    </Routes>
  );
};

export default AppRouter;
