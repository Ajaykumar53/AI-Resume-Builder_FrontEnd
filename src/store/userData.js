import { createSlice } from "@reduxjs/toolkit";


const userData = createSlice({
  name: "userData",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUserData: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
})

export const { setUserData, clearUserData } = userData.actions;

export default userData.reducer;