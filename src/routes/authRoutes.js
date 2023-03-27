import { MAIN_PAGE, SETTINGS_PAGE, USER_SETTINGS_PAGE } from './consts/pagesRoutes';
import { projectRoutes } from './projectRoutes';

import { brigadesRoutes } from './brigadesRoutes';

import SettingsPage from '../pages/SettingsPage';
import UserSettingPage from '../pages/UserSettingPage';
import ProjectPage from '../pages/ProjectPage';

export const authRoutes = [
  {
    path: SETTINGS_PAGE,
    Component: SettingsPage,
    name: 'Настройки',
  },
  {
    path: USER_SETTINGS_PAGE,
    Component: UserSettingPage,
    name: 'Пользовательские настройки',
  },
  {
    path: MAIN_PAGE,
    Component: ProjectPage,
    name: 'Страница проекта',
  },
  ...projectRoutes.map((el) => el),
  ...brigadesRoutes.map((el) => el),
];
