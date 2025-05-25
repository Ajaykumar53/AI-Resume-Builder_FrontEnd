// store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  primaryColor: "#1d4ed8", // Default Sky Blue
  secondaryColor: "#64748b", // Default Slate
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setTheme: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setPrimaryColor, setTheme } = themeSlice.actions;

export default themeSlice.reducer;