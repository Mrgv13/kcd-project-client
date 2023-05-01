import { authRoutes, publicRoutes } from '../common/routes'

import { Context } from '../index'

import { LOGIN_ROUTE } from '../common/routes/consts/pagesRoutes'

import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  const { user } = useContext(Context)
  console.log(user)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} />} />
      }} />
    </Routes>
  )
}

export default AppRouter
