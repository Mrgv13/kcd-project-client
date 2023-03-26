import {
  BRIGADES_PAGE,
  LOGIN_ROUTE,
  MAIN_PAGE,
  SETTINGS_PAGE,
  USER_SETTINGS_PAGE,
} from './utils/consts';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import SettingsPage from './pages/SettingsPage';
import UserSettingPage from './pages/UserSettingPage';
import BrigadesPage from './pages/BrigadesPage';

export const authRoutes = [
  {
    path: SETTINGS_PAGE,
    Component: SettingsPage,
  },
  {
    path: USER_SETTINGS_PAGE,
    Component: UserSettingPage,
  },
  {
    path: BRIGADES_PAGE,
    Component: BrigadesPage,
  },
  {
    path: MAIN_PAGE,
    Component: ProjectPage,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
];
