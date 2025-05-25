import React from "react";
import ResumeDialog from "./ResumeDilog";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  RiAddLine,
  RiBriefcaseLine,
  RiHistoryLine,
  RiBarChartBoxLine,
  RiFolderOpenLine,
} from "react-icons/ri";
import New from "./new";

function Home() {
  const { userName } = useSelector((state) => state.userData.user);
  const capitalizedName = userName[0].toUpperCase() + userName.substring(1);

  return (
    <div className="bg-white text-black min-h-screen ">
      {/* Header Section */}
      <div className="border-b border-gray-100 px-5 md:px-10 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="md:text-3xl text-2xl font-bold tracking-tight">
                Welcome Back, {capitalizedName}
              </h1>
              <p className="md:text-xl text-md text-gray-600 pt-1">
                Manage your resumes and track your career progress
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 md:px-10 py-8 max-w-6xl mx-auto">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Total Resumes</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="p-2 bg-black/5 rounded-full">
                <RiBriefcaseLine className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">+3 updated this month</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Active Templates</p>
                <h3 className="text-2xl font-bold mt-1">5</h3>
              </div>
              <div className="p-2 bg-black/5 rounded-full">
                <svg
                  className="w-5 h-5 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Based on industry standards
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <h3 className="text-2xl font-bold mt-1">2d ago</h3>
              </div>
              <div className="p-2 bg-black/5 rounded-full">
                <RiHistoryLine className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">John_Doe_Resume</p>
          </div>
        </div>

        <New />
        {/* Quick Actions Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg mb-2">Templates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Choose from 100+ professional designs
                </p>
              </div>
              <div className="p-2 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                <RiFolderOpenLine className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <Link
              to="/user/templates"
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#1d4ed8] font-medium"
            >
              Explore Templates
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg mb-2">ATS Checker</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Optimize your resume for applicant tracking systems
                </p>
              </div>
              <div className="p-2 bg-black/5 rounded-lg group-hover:bg-black/10 transition-colors">
                <RiBarChartBoxLine className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <Link
              to="/user/ats-score"
              className="inline-flex items-center text-sm text-gray-500 hover:text-[#1d4ed8] font-medium"
            >
              Analyze Now
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 p-6 bg-[#1d4ed8] text-white rounded-lg">
          <h3 className="text-xl font-medium mb-4">Professional Tips</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>Use industry-specific keywords for ATS optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>
                Keep your resume concise – one page is ideal for most
                professionals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">•</span>
              <span>Quantify achievements with metrics and results</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useState } from "react";
// import ResumeDialog from "./ResumeDilog";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   RiAddLine,
//   RiBriefcaseLine,
//   RiHistoryLine,
//   RiBarChartBoxLine,
//   RiFolderOpenLine,
// } from "react-icons/ri";

// function Home() {
//   const { userName } = useSelector((state) => state.userData.user);
//   const capitalizedName = userName[0].toUpperCase() + userName.substring(1);
//   const [isResuming, setIsResuming] = useState(false);

//   return (
//     <div className="bg-white text-black min-h-screen">
//       {/* Header Section */}
//       <div className="border-b border-gray-100 px-5 md:px-10 py-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center font-bold shadow-md">
//                 {userName[0].toUpperCase()}
//               </div>
//               <div>
//                 <h1 className="md:text-3xl text-2xl font-bold tracking-tight">
//                   Welcome Back, {capitalizedName}
//                 </h1>
//                 <p className="md:text-xl text-md text-gray-600 pt-1">
//                   Build smarter resumes, faster
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <button
//                 className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
//                 aria-label="Notifications"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                   />
//                 </svg>
//               </button>
//               <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors shadow-sm">
//                 <span className="text-sm">+ New Resume</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="px-5 md:px-10 py-8 max-w-6xl mx-auto">
//         {/* Stats Bar */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
//           <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm text-gray-500">Total Resumes</p>
//                 <h3 className="text-3xl font-bold mt-1">12</h3>
//               </div>
//               <div className="p-3 bg-black/5 rounded-lg">
//                 <RiBriefcaseLine className="w-6 h-6 text-gray-600" />
//               </div>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//               <div className="w-full bg-gray-200 rounded-full h-1.5">
//                 <div
//                   className="bg-black h-1.5 rounded-full"
//                   style={{ width: "75%" }}
//                 ></div>
//               </div>
//               <span className="text-xs text-gray-400">+3 this month</span>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm text-gray-500">Active Templates</p>
//                 <h3 className="text-3xl font-bold mt-1">5</h3>
//               </div>
//               <div className="p-3 bg-black/5 rounded-lg">
//                 <svg
//                   className="w-6 h-6 text-gray-600"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//               <span className="text-xs text-gray-400">
//                 Based on industry standards
//               </span>
//               <button className="text-xs text-gray-500 hover:text-black">
//                 View
//               </button>
//             </div>
//           </div>

//           <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm text-gray-500">Last Updated</p>
//                 <h3 className="text-3xl font-bold mt-1">2d ago</h3>
//               </div>
//               <div className="p-3 bg-black/5 rounded-lg">
//                 <RiHistoryLine className="w-6 h-6 text-gray-600" />
//               </div>
//             </div>
//             <div className="mt-4 flex items-center gap-2">
//               <div className="w-full truncate text-xs text-gray-400">
//                 John_Doe_Resume
//               </div>
//               <button className="text-xs text-gray-500 hover:text-black">
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Resume Dialog Card */}
//           <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold text-lg">Create New Resume</h3>
//               <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
//                 <RiAddLine className="w-5 h-5 text-gray-600" />
//               </div>
//             </div>
//             <ResumeDialog
//               Style="min-h-[250px] bg-black text-white rounded-lg outline-2 outline-dashed outline-white hover:outline-gray-400 hover:bg-white hover:text-black transition-all duration-300 ease-in flex flex-col justify-center items-center text-6xl md:text-8xl cursor-pointer shadow-md hover:shadow-lg"
//               isOpen={true}
//               iconStyle="text-white md:text-8xl text-6xl group-hover:scale-110 transition-transform"
//               width="w-full"
//             />
//           </div>

//           {/* Recent Resumes Card */}
//           <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
//             <div className="flex justify-between items-center mb-5">
//               <h3 className="font-semibold text-lg">Recent Resumes</h3>
//               <Link
//                 to="/user/resume-library"
//                 className="text-sm text-gray-500 hover:text-black flex items-center"
//               >
//                 View All
//                 <svg
//                   className="w-3 h-3 ml-1"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </Link>
//             </div>
//             <div className="space-y-4">
//               {[
//                 {
//                   name: "John_Doe_Resume",
//                   date: "2 days ago",
//                   template: "Modern Minimalist",
//                   progress: "75%",
//                 },
//                 {
//                   name: "Jane_Smith_Resume",
//                   date: "1 week ago",
//                   template: "Executive Leader",
//                   progress: "45%",
//                 },
//               ].map((resume, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors group cursor-pointer"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h4 className="font-medium">{resume.name}</h4>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {resume.template}
//                       </p>
//                     </div>
//                     <span className="text-xs text-gray-400 group-hover:text-black transition-colors">
//                       {resume.date}
//                     </span>
//                   </div>
//                   <div className="mt-3 flex items-center gap-2">
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div
//                         className="bg-black h-1.5 rounded-full"
//                         style={{ width: resume.progress }}
//                       ></div>
//                     </div>
//                     <span className="text-xs text-gray-400 w-10">
//                       {resume.progress}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full mt-4 py-2 text-sm border border-dashed border-gray-300 rounded-md text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
//               <RiAddLine className="w-4 h-4" />
//               <span>Create New</span>
//             </button>
//           </div>
//         </div>

//         {/* Tips Section */}
//         <div className="mt-12 p-6 bg-gray-900 text-white rounded-xl">
//           <div className="flex items-center gap-3 mb-4">
//             <svg
//               className="w-6 h-6 text-white"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <h3 className="text-xl font-medium">Professional Tips</h3>
//           </div>
//           <ul className="space-y-3 text-gray-300">
//             <li className="flex items-start gap-3">
//               <span className="text-white mt-1">•</span>
//               <span>Use industry-specific keywords for ATS optimization</span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-white mt-1">•</span>
//               <span>
//                 Keep your resume concise – one page is ideal for most
//                 professionals
//               </span>
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="text-white mt-1">•</span>
//               <span>Quantify achievements with metrics and results</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
