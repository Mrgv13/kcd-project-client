import { authRoutes, publicRoutes } from '../common/routes'

import { Context } from '../index'

import { LOGIN_ROUTE, MAIN_PAGE } from '../common/routes/consts/pagesRoutes'

import React, { Suspense, useContext } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const AppRouter = () => {
  const { user } = useContext(Context)
  return (
    <Routes>
      {user.isAuth
        ? authRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense
                  fallback={
                    <BeatLoader
                      style={{ position: 'absolute', top: '50%', left: '50%' }}
                      color="#6200EE"
                    />
                  }>
                  <Component />
                </Suspense>
              }
              exact
            />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense
                  fallback={
                    <BeatLoader
                      style={{ position: 'absolute', top: '50%', left: '50%' }}
                      color="#6200EE"
                    />
                  }>
                  <Component />
                </Suspense>
              }
              exact
            />
          ))}
      }}}
      {user.isAuth ? (
        <Route path={'*'} element={<Navigate to={MAIN_PAGE} />} />
      ) : (
        <Route path={'*'} element={<Navigate to={LOGIN_ROUTE} />} />
      )}
    </Routes>
  )
}

export default AppRouter
