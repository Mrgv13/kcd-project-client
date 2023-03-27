import appReducer from './appSlice';
import menuReducer from './menuSlice';

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    auth: appReducer,
    menu: menuReducer,
  },
});
