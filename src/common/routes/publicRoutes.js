import { LOGIN_ROUTE, SIGN_ROUTE } from './consts/pagesRoutes'

import LoginPage from '../../features/login/LoginPage'
import SignInPage from '../../features/login/SignInPage'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: SIGN_ROUTE,
    Component: SignInPage,
  },
]
