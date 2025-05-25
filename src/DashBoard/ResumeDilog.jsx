// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Link, useNavigate } from "react-router-dom";
// import { RiAddLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { resetResume, setFile } from "../store/ResumeData";

// function ResumeDialog({ Style, isOpen, iconStyle, width, existingNames }) {
//   const [open, setOpen] = useState(false);
//   const [resumeName, setResumeName] = useState("");
//   const [layout, setLayout] = useState("single");
//   const [isJobSpecific, setIsJobSpecific] = useState(false);
//   const [jobTitle, setJobTitle] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [nameIncludes, setNameIncludes] = useState("false");

//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const handleContinue = () => {
//     dispatch(resetResume());
//     dispatch(
//       setFile({ fileName: resumeName, layout: layout, Template: "Template2" })
//     );
//     // Close dialog and navigate
//     setOpen(false);
//     navigate("/user/edit-resume");
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen} className="">
//       <DialogTrigger asChild>
//         <div
//           className={`${Style} ${isOpen && ""} ${width}`}
//           onClick={() => setOpen(true)}
//         >
//           <RiAddLine className={`${iconStyle}`} />
//           {isOpen ? "Create Resume" : ""}
//         </div>
//       </DialogTrigger>

//       <DialogContent className="bg-white sm:max-w-3xl w-full rounded-sm shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto hide-scrollbar">
//         <DialogHeader className="px-6 pt-6 pb-2 ">
//           <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
//             Create Your Resume
//           </DialogTitle>
//           <DialogDescription className="text-gray-600 mt-1 text-left">
//             Enter your details to create a new resume
//           </DialogDescription>
//         </DialogHeader>
//         <hr />
//         {/* Form Fields */}
//         <div className="px-6 py-4 space-y-6">
//           {/* Resume Name */}
//           <div className="space-y-1">
//             <label
//               htmlFor="resumename"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Resume Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               autoFocus
//               type="text"
//               id="resumename"
//               value={resumeName}
//               onChange={(e) => setResumeName(e.target.value)}
//               className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition"
//               placeholder="e.g., JohnDoe_Resume"
//             />
//             {nameIncludes === true && "Resume already created with same name"}
//           </div>

//           {/* Layout Selection */}
//           <div className="space-y-1">
//             <label className="block text-sm font-medium text-gray-700">
//               Layout <span className="text-red-500">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Single Column Option */}
//               <button
//                 type="button"
//                 onClick={() => setLayout("single")}
//                 className={`p-4 rounded-sm border-2 transition-all flex flex-col items-center ${
//                   layout === "single"
//                     ? "border-[#1d4ed8] bg-blue-50 shadow-md"
//                     : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="w-full h-24 bg-white rounded border border-gray-200 p-2">
//                   <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
//                   <div className="h-8 w-full bg-gray-100 rounded"></div>
//                 </div>
//                 <span className="mt-2 text-sm font-medium">Single Column</span>
//               </button>

//               {/* Double Column Option */}
//               <button
//                 type="button"
//                 onClick={() => setLayout("double")}
//                 className={`p-4 rounded-sm border-2 transition-all flex flex-col items-center ${
//                   layout === "double"
//                     ? "border-[#1d4ed8] bg-blue-50 shadow-md"
//                     : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="w-full h-24 bg-white rounded border border-gray-200 p-2 flex gap-2">
//                   <div className="w-1/3">
//                     <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
//                     <div className="h-10 w-full bg-gray-100 rounded"></div>
//                   </div>
//                   <div className="w-2/3">
//                     <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
//                     <div className="h-10 w-full bg-gray-100 rounded"></div>
//                   </div>
//                 </div>
//                 <span className="mt-2 text-sm font-medium">Double Column</span>
//               </button>
//             </div>
//           </div>

//           {/* Job Specific Toggle */}
//           <div className="flex items-center space-x-2 pt-2">
//             <input
//               type="checkbox"
//               id="jobSpecific"
//               checked={isJobSpecific}
//               onChange={(e) => setIsJobSpecific(e.target.checked)}
//               className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-[#1d4ed8]"
//             />
//             <label
//               htmlFor="jobSpecific"
//               className="text-sm font-medium text-gray-700"
//             >
//               Create job-specific resume
//             </label>
//           </div>

//           {/* Conditional Fields */}
//           {isJobSpecific && (
//             <div className="animate-fadeIn">
//               {/* Responsive layout for job fields */}
//               <div className=" md:flex-row gap-4 border-t border-gray-100 pt-4">
//                 {/* Left Column (Job Title) */}
//                 <div className="flex-1 space-y-1">
//                   <label
//                     htmlFor="jobtitle"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Job Title
//                   </label>
//                   <input
//                     type="text"
//                     id="jobtitle"
//                     value={jobTitle}
//                     onChange={(e) => setJobTitle(e.target.value)}
//                     placeholder="e.g., Senior Software Engineer"
//                     className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition"
//                   />
//                 </div>
//                 {/* Right Column (Job Description) */}
//                 <div className="flex-1 space-y-1 pt-4">
//                   <label
//                     htmlFor="jobdescription"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Job Description
//                   </label>
//                   <textarea
//                     id="jobdescription"
//                     value={jobDescription}
//                     onChange={(e) => setJobDescription(e.target.value)}
//                     placeholder="Paste the job description here..."
//                     rows="3"
//                     className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition resize-none"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <DialogFooter className="px-6 py-4 border-t border-gray-100">
//           <Button
//             type="button"
//             className={`w-full py-2.5 rounded-sm font-medium transition-colors
//                `}
//             onClick={handleContinue}
//           >
//             Continue
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default ResumeDialog;
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Link, useNavigate } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { resetResume, setFile } from "../store/ResumeData";

function ResumeDialog({ Style, isOpen, iconStyle, width, existingNames }) {
  const [open, setOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [layout, setLayout] = useState("single");
  const [isJobSpecific, setIsJobSpecific] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [nameError, setNameError] = useState(""); // State to track name error

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Validate resume name
  const validateResumeName = (name) => {
    if (!name.trim()) {
      return "Resume name is required";
    }
    if (existingNames.includes(name.toLowerCase())) {
      return "A resume with this name already exists";
    }
    return "";
  };

  // Handle input change and validate
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setResumeName(newName);
    setNameError(validateResumeName(newName));
  };
  const selectedTemplate =
    layout === "single"
      ? "Template1"
      : layout === "double"
      ? "Template2"
      : "Template1";

  const handleContinue = () => {
    const error = validateResumeName(resumeName);
    if (error) {
      setNameError(error);
      return;
    }

    dispatch(resetResume());
    dispatch(
      setFile({
        fileName: resumeName,
        layout: layout,
        Template: selectedTemplate,
      })
    );
    setOpen(false);
    navigate("/user/edit-resume");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} className="">
      <DialogTrigger asChild>
        <div
          className={`${Style} ${isOpen && ""} ${width}`}
          onClick={() => setOpen(true)}
        >
          <RiAddLine className={`${iconStyle}`} />
          {isOpen ? "Create Resume" : ""}
        </div>
      </DialogTrigger>

      <DialogContent className="bg-white sm:max-w-3xl w-full rounded-sm shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto hide-scrollbar">
        <DialogHeader className="px-6 pt-6 pb-2 ">
          <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
            Create Your Resume
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-1 text-left">
            Enter your details to create a new resume
          </DialogDescription>
        </DialogHeader>
        <hr />
        {/* Form Fields */}
        <div className="px-6 py-4 space-y-6">
          {/* Resume Name */}
          <div className="space-y-1">
            <label
              htmlFor="resumename"
              className="block text-sm font-medium text-gray-700"
            >
              Resume Name <span className="text-red-500">*</span>
            </label>
            <input
              autoFocus
              type="text"
              id="resumename"
              value={resumeName}
              onChange={handleNameChange}
              className={`w-full px-4 py-2 rounded-sm border ${
                nameError ? "border-red-500" : "border-gray-300"
              } focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition`}
              placeholder="e.g., JohnDoe_Resume"
            />
            {nameError && (
              <p className="text-red-500 text-xs mt-1">{nameError}</p>
            )}
          </div>

          {/* Layout Selection */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Layout <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Single Column Option */}
              <button
                type="button"
                onClick={() => setLayout("single")}
                className={`p-4 rounded-sm border-2 transition-all flex flex-col items-center ${
                  layout === "single"
                    ? "border-[#1d4ed8] bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-full h-24 bg-white rounded border border-gray-200 p-2">
                  <div className="h-3 w-3/4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-8 w-full bg-gray-100 rounded"></div>
                </div>
                <span className="mt-2 text-sm font-medium">Single Column</span>
              </button>

              {/* Double Column Option */}
              <button
                type="button"
                onClick={() => setLayout("double")}
                className={`p-4 rounded-sm border-2 transition-all flex flex-col items-center ${
                  layout === "double"
                    ? "border-[#1d4ed8] bg-blue-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="w-full h-24 bg-white rounded border border-gray-200 p-2 flex gap-2">
                  <div className="w-1/3">
                    <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                    <div className="h-10 w-full bg-gray-100 rounded"></div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-3 w-full bg-gray-200 rounded mb-1"></div>
                    <div className="h-10 w-full bg-gray-100 rounded"></div>
                  </div>
                </div>
                <span className="mt-2 text-sm font-medium">Double Column</span>
              </button>
            </div>
          </div>

          {/* Job Specific Toggle */}
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="jobSpecific"
              checked={isJobSpecific}
              onChange={(e) => setIsJobSpecific(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-[#1d4ed8]"
            />
            <label
              htmlFor="jobSpecific"
              className="text-sm font-medium text-gray-700"
            >
              Create job-specific resume
            </label>
          </div>

          {/* Conditional Fields */}
          {isJobSpecific && (
            <div className="animate-fadeIn">
              <div className="md:flex-row gap-4 border-t border-gray-100 pt-4">
                <div className="flex-1 space-y-1">
                  <label
                    htmlFor="jobtitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobtitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g., Senior Software Engineer"
                    className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition"
                  />
                </div>
                <div className="flex-1 space-y-1 pt-4">
                  <label
                    htmlFor="jobdescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Description
                  </label>
                  <textarea
                    id="jobdescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    rows="3"
                    className="w-full px-4 py-2 rounded-sm border border-gray-300 focus:border-[#1d4ed8] focus:ring focus:ring-blue-200 outline-none transition resize-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="px-6 py-4 border-t border-gray-100">
          <Button
            type="button"
            className={`w-full py-2.5 rounded-sm font-medium transition-colors ${
              nameError || !resumeName.trim()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#1d4ed8] hover:bg-[#1e40af] text-white"
            }`}
            onClick={handleContinue}
            disabled={nameError || !resumeName.trim()}
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ResumeDialog;
