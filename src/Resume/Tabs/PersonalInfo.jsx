import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser, FaMobileAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { updatePersonal } from "../../store/ResumeData";
import { Form } from "react-router-dom";

export default function PersonalData({ Next }) {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.resume.personal);
  const [formData, setFormData] = useState(personal);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {}, [personal]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };
  const requiredFields = {
    name: "Full Name",
    jobTitle: "Job Title",
    phone: "Phone Number",
    email: "Email Address",
    linkedin: "LinkedIn Profile",
  };

  const validateForm = (data) => {
    const errors = {};

    Object.entries(requiredFields).forEach(([key, label]) => {
      if (!data[key]?.trim()) {
        errors[key] = `${label} is required`;
      }
    });

    return errors;
  };
  // const Save_AND_Next = () => {
  //   const errors = validateForm(formData);
  //   dispatch(updatePersonal(formData));
  //   Next(); // ✅ Properly invoke the function passed from parent
  //   setFormData(personal);
  // };

  const Save_AND_Next = () => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return; // Stop if errors exist

    dispatch(updatePersonal(formData));
    Next();
    setFormData(personal);
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="bg-blue-100 p-2 rounded-lg text-[#1d4ed8]">
          <FaUser size={20} />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Personal Information
        </h2>
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-600 mb-6">
        Please provide your basic personal information to start building your
        resume.
      </p>

      {/* Form Grid */}
      <div className="space-y-6">
        {/* Full Name & Job Title */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-800 flex items-center gap-1"
            >
              Full Name <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaUser size={16} />
              </div>
              <input
                type="text"
                id="fullName"
                name="name"
                value={formData?.name || ""}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200"
                placeholder="John Doe"
              />
              {formErrors.name && (
                <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              This will appear as your name on the resume
            </p>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-800 flex items-center gap-1"
            >
              Professional Title <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.509 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49098 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49098 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41098 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15.0 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.09 8.62 19.09 9M19 9V9.01M19 15V15.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="jobTitle"
                onChange={handleChange}
                value={formData?.jobTitle || ""}
                name="jobTitle"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200"
                placeholder="Software Engineer"
              />
              {formErrors.jobTitle && (
                <p className="text-xs text-red-500 mt-1">
                  {formErrors.jobTitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-800 flex items-center gap-1"
            >
              Phone <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaMobileAlt size={16} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={formData?.phone || ""}
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200"
                placeholder="+1 (555) 123-4567"
              />
              {formErrors.phone && (
                <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800 flex items-center gap-1"
            >
              Email <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaEnvelope size={16} />
              </div>
              <input
                type="email"
                onChange={handleChange}
                id="email"
                name="email"
                value={formData?.email || ""}
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200"
                placeholder="john@example.com"
              />
              {formErrors.email && (
                <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>
          </div>

          {/* LinkedIn */}
          <div className="space-y-2">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-800 flex items-center gap-1"
            >
              LinkedIn <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaLinkedin size={16} />
              </div>
              <input
                type="text"
                id="linkedin"
                onChange={handleChange}
                value={formData?.linkedin || ""}
                name="linkedin"
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200"
                placeholder="linkedin.com/in/johndoe"
              />
              {formErrors.linkedin && (
                <p className="text-xs text-red-500 mt-1">
                  {formErrors.linkedin}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={Save_AND_Next}
            className="px-4 py-2 text-sm bg-[#1d4ed8]  text-white transition-colors duration-200 rounded-sm"
          >
            Save & Next
          </button>
        </div>
        {/* Notes Section */}
        <div className="pt-4 mt-4 border-t border-gray-100">
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
            <div className="text-blue-500 mt-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-sm text-blue-800">
              <p>
                Fields marked with <span className="text-blue-500">*</span> are
                required
              </p>
              <p className="mt-1">
                Your information will be securely stored and never shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
