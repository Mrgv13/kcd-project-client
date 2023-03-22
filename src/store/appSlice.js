import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: [
      {
        id: 'status',
        type: false,
      },
    ],
  },
  reducers: {
    userChangeAuth(state) {
      const user = state.auth.find((action) => action.id === 'status');
      user.type = !user.type;
    },
  },
});

export const { userChangeAuth } = appSlice.actions;
export default appSlice.reducer;
