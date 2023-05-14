import {
  CALENDAR_CHART_ROUTE,
  DOCUMENTS_ROUTE,
  WORKS_ROUTE,
} from '../routes/consts/projectRoutes'

import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [
      {
        id: '1',
        menuAttribute: [
          { name: 'Работы', path: WORKS_ROUTE },
          { name: 'Календарный график', path: CALENDAR_CHART_ROUTE },
          { name: 'Загрузка документов', path: DOCUMENTS_ROUTE },
        ],
      },
    ],
  },
  reducers: {
    changeRoutes(state, action) {
      const menu = state.menu.find((action) => action.id === '1')
      const data = action.payload

      data.forEach((obj) => delete obj['Component'])

      menu.menuAttribute = data
    },
  },
})

export const { changeRoutes } = menuSlice.actions
export default menuSlice.reducer
