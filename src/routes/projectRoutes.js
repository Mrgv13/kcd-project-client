import { CALENDAR_CHART_ROUTE, DOCUMENTS_ROUTE, WORKS_ROUTE } from './consts/projectRoutes';

import Calendar from '../components/project-page-components/calendar/Calendar';
import WorksList from '../components/project-page-components/works-list/WorksList';
import Documents from '../components/project-page-components/documents/Documents';

export const projectRoutes = [
  {
    path: CALENDAR_CHART_ROUTE,
    Component: Calendar,
    name: 'Календарный график',
  },
  {
    path: WORKS_ROUTE,
    Component: WorksList,
    name: 'Работы',
  },
  {
    path: DOCUMENTS_ROUTE,
    Component: Documents,
    name: 'Загрузка документов',
  },
];
