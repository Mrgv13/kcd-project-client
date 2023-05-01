import {
  CALENDAR_CHART_ROUTE,
  DOCUMENTS_ROUTE,
  PROGRESS_WORK,
  WORKS_ROUTE,
} from './consts/projectRoutes'

import Calendar from '../../features/calendar/Calendar'
import WorksList from '../../features/works/WorksList'
import Documents from '../../features/documents/Documents'
import ProgressWork from '../../features/progress-work/ProgressWork'

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
  {
    path: PROGRESS_WORK,
    Component: ProgressWork,
    name: 'Прогресс работ',
  },
]
