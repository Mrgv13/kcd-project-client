import { LOGIN_ROUTE, MAIN_PAGE, SETTINGS_PAGE } from './utils/consts';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Settings from './pages/Settings';

export const authRoutes = [
  {
    path: SETTINGS_PAGE,
    Component: Settings,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: MAIN_PAGE,
    Component: MainPage,
  },
];
