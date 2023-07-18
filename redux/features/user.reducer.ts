import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: { user: string } = {
  user: ""
}
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = ''
    }
  }
})
export const { addUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;