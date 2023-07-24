import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./user.reducer";


const initialState: { currentUser: User } = {
  currentUser: {} as User
}
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    addCUser: (state, action: PayloadAction<User>) => {
      if (action.payload !== undefined) {
        state.currentUser = action.payload
      }
    },
    removeCUser: (state) => {
      state.currentUser = {} as User;
    }
  }
})
export const { addCUser, removeCUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;