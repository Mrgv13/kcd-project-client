import { ERROR_PAGE, LOGIN_ROUTE } from './consts/pagesRoutes';

import LoginPage from '../pages/LoginPage';
import ErrorPage from '../pages/ErrorPage';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: ERROR_PAGE,
    Component: ErrorPage,
  },
];
