import { createSlice } from '@reduxjs/toolkit'

const workSlice = createSlice({
  name: 'work',
  initialState: {
    work: [
      {
        name: 'workID',
        id: null,
      },
    ],
  },
  reducers: {
    workChangeID(state, action) {
      const work = state.work.find((action) => action.name === 'workID')
      work.id = action.payload
    },
  },
})

export const { workChangeID } = workSlice.actions
export default workSlice.reducer
