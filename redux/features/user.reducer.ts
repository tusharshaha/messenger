import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string,
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
      if(action.payload !== undefined){
        state.user = action.payload
      }
    },
    removeUser: (state) => {
      state.user = {} as User
    }
  }
})
export const { addUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;