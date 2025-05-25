import { createSlice } from "@reduxjs/toolkit";

const passWordToggleSlice = createSlice({
  name: "passWordToggle",
  initialState: {
    loginPassword: false,
    signUpPassword: false,
  },
  reducers: {
    loginPasswordToggle: (state) => {
      state.loginPassword = !state.loginPassword;
    },
    signUpPasswordToggle: (state) => {
      state.signUpPassword = !state.signUpPassword; // Fixed: updated signUpPassword instead of loginPassword
    },
  },
});

export default passWordToggleSlice.reducer;
export const passwordToggleActions = passWordToggleSlice.actions;
