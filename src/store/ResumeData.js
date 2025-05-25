
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileName:"",
  layout: "single",
  Template:"",
  personal: {
    name: "",
    jobTitle: "",
    phone: "",
    email: "",
    linkedin: ""
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  certifications: [],
  projects: [],
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setFile: (state, action) => {
      state.fileName = action.payload.fileName;
      state.layout = action.payload.layout;
      state.Template = action.payload.Template
    },
    templateChange: (state, action) => {
      state.Template = action.payload.Template
    },
    updatePersonal: (state, action) => {
      return { ...state, personal: { ...state.personal, ...action.payload } };
    },
    updateSummary: (state, action) => {
      return { ...state, summary: action.payload };
    },
    updateExperience: (state, action) => {
      return { ...state, experience: action.payload };
    },
    updateEducation: (state, action) => {
      return { ...state, education: action.payload };
    },
    updateSkills: (state, action) => {
      return { ...state, skills: action.payload};
    },
    updateCertifications: (state, action) => {
      return { ...state, certifications: action.payload };
    },
    updateProjects: (state, action) => {
      return { ...state, projects: action.payload };
    },
    updateResume: (state, action) => {
    return action.payload;
    },
    resetResume: () => initialState
  }
});

export const {
  updatePersonal,
  updateSummary,
  updateExperience,
  updateEducation,
  updateSkills,
  updateCertifications,
  updateProjects,
  resetResume,
  setFile,
  updateResume,
  templateChange
} = resumeSlice.actions;

export default resumeSlice.reducer;