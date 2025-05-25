// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   templates: {
//     template1: {
//       container: "w-full bg-black rounded-lg shadow-lg p-8 flex gap-6",
//       header: "text-center text-red-600 text-3xl font-bold mb-2",
//       subHeader: "text-center text-gray-500 text-lg italic mb-4",
//       sectionTitle: "text-lg font-semibold text-blue-700 mb-4",
//       section: "mb-8",
//       summary: {
//         container: "mb-8",
//         title: "text-red-00 font-semibold text-lg mb-2",
//         text: "text-red-600 text-sm leading-relaxed",
//       },
//       experience: {
//         container: "mb-8",
//         item: "mb-6",
//         title: "text-red-900 font-bold text-md",
//         subTitle: "text-red-600 text-sm",
//         description: "text-gray-600 text-sm mt-2 leading-relaxed",
//         list: "list-disc list-inside text-gray-600 text-sm",
//       },
//       projects: {
//         container: "mb-8",
//         item: "mb-6",
//         title: "text-red-900 font-bold text-md",
//         description: "text-red-600 text-sm leading-relaxed mt-2",
//         link: "text-blue-600 text-sm underline",
//       },
//       contact: {
//         container: "text-sm text-red-600 leading-relaxed mb-6",
//         info: "mb-2",
//       },
//       technicalSkills: {
//         container: "mb-8",
//         skill: "text-sm text-red-600 leading-relaxed",
//       },
//       personalSkills: {
//         container: "mb-8",
//         skill: "text-sm text-red-600 leading-relaxed",
//       },
//     },
//   },
//   selectedTemplate: null
  
// }
  

// const TemplateSlice = createSlice({
//   name: "templates",
//   initialState, 
//   reducers: {
//     setTemplate(state, action) {
//       console.log(state); 
//       state.selectedTemplate = action.payload; 
//     },
//   },
// });

// export const { setTemplate } = TemplateSlice.actions;

// export default TemplateSlice.reducer; // Export the reducer
