import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
  check: 0
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
    checkUser(state) {
      state.check = 1
    }
  },
})

export const {setUser , removeUser, checkUser } = userSlice.actions;

export default userSlice.reducer;