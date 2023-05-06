import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
