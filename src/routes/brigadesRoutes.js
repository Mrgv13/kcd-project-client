import { BRIGADES_PAGE } from './consts/brigadesRoutes'

import BrigadesList from '../app/pages/brigades/BrigadesList'

export const brigadesRoutes = [
  {
    path: BRIGADES_PAGE,
    Component: BrigadesList,
    name: 'TEST',
  },
]
