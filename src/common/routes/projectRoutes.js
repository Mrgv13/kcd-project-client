import {
  CALENDAR_CHART_ROUTE,
  DOCUMENTS_ROUTE,
  WORKS_ROUTE,
} from './consts/projectRoutes'

import Calendar from '../../features/calendar/Calendar'
import WorksList from '../../features/works/WorksList'
import Documents from '../../features/documents/Documents'

export const projectRoutes = [
  {
    path: WORKS_ROUTE,
    Component: WorksList,
    name: 'Работы',
  },
  {
    path: CALENDAR_CHART_ROUTE,
    Component: Calendar,
    name: 'Календарный график',
  },
  {
    path: DOCUMENTS_ROUTE,
    Component: Documents,
    name: 'Загрузка документов',
  },
]
