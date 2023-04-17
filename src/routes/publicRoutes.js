import { ERROR_PAGE, LOGIN_ROUTE } from './consts/pagesRoutes'

import LoginPage from '../app/pages/login/LoginPage'
import ErrorPage from '../app/pages/error/ErrorPage'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: ERROR_PAGE,
    Component: ErrorPage,
  },
]
