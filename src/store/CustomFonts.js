
import { createSlice } from "@reduxjs/toolkit";

const fontSizeOptions = {
  XS: {
    name: "22px",
    heading: "16px",
    subheading: "14px",
    body: "10px",
    label: "9px",
  },
  SM: {
    name: "24px",
    heading: "17px",
    subheading: "15px",
    body: "11px",
    label: "9.5px",
  },
  MD: {
    name: "26px",
    heading: "18px",
    subheading: "16px",
    body: "12px",
    label: "10px",
  },
  LG: {
    name: "28px",
    heading: "19px",
    subheading: "17px",
    body: "13px",
    label: "11px",
  },
  XL: {
    name: "30px",
    heading: "20px",
    subheading: "18px",
    body: "14px",
    label: "12px",
  },
};

const initialState = {
  fontFamily: {
    fontName: "Lora",
    fontLink: "https://fonts.googleapis.com/css2?family=Lora&display=swap ",
  },
  fontSize: fontSizeOptions.MD,
};

const fontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    setFontFamily: (state, action) => {
      state.fontFamily = {
        fontName: action.payload.name,
        fontLink: action.payload.link,
      };
    },
    setFontSize: (state, action) => {
      const selectedKey = action.payload;
      state.fontSize = fontSizeOptions[selectedKey];
    },
  },
});

export const { setFontFamily, setFontSize } = fontSlice.actions;

export default fontSlice.reducer;