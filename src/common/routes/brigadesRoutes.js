import { BRIGADES_PAGE } from './consts/brigadesRoutes'

import BrigadesList from '../../features/pages/brigades/BrigadesList'

export const brigadesRoutes = [
  {
    path: BRIGADES_PAGE,
    Component: BrigadesList,
    name: 'TEST',
  },
]
