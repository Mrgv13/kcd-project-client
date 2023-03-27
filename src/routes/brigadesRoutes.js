import { BRIGADES_PAGE } from './consts/brigadesRoutes';

import BrigadesList from '../components/brigades-page-components/BrigadesList';

export const brigadesRoutes = [
  {
    path: BRIGADES_PAGE,
    Component: BrigadesList,
    name: 'TEST',
  },
];
