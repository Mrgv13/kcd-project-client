import { BRIGADES_PAGE } from './consts/brigadesRoutes'

import BrigadesList from '../../features/brigades/BrigadesList'

export const brigadesRoutes = [
  {
    path: BRIGADES_PAGE,
    Component: BrigadesList,
    name: 'TEST',
  },
]
