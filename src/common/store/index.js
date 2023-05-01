import menuReducer from './menuSlice'
import workReducer from './worksSlice'

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    menu: menuReducer,
    work: workReducer,
  },
})
