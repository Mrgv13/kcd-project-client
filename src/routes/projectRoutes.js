import {
  CALENDAR_CHART_ROUTE,
  DOCUMENTS_ROUTE,
  WORKS_ROUTE,
} from './consts/projectRoutes'

import Calendar from '../app/components/calendar/Calendar'
import WorksList from '../app/components/works-list/WorksList'
import Documents from '../app/components/documents/Documents'

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
]
