import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string,
  avatar: string
}
const initialState: { user: User } = {
  user: {} as User
}
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = {} as User
    }
  }
})
export const { addUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;