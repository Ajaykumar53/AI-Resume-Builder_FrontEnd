import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FaRegBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { updateExperience } from "../../store/ResumeData";

export default function Experience({ Next }) {
  const Experience = useSelector((state) => state.resume.experience || []);
  const [experienceCount, setExperienceCount] = useState(1);
  const resume = useSelector((state) => state.resume);
  const JobDescription = useRef([]);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(null);
  const [formData, setFormData] = useState([
    {
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      workType: "",
      description: "",
      remote: false,
    },
  ]);

  useEffect(() => {
    setFormData([...Experience]);
  }, [Experience]);

  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const handleGenerateDescription = async (index) => {
    const roughDescription = formData[index]?.description || "";
    if (!roughDescription) return;
    try {
      const response = await fetch(`${API_URL}/generate-job-description`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roughDescription }),
      });

      if (!response.ok)
        throw new Error(`Backend error: ${response.statusText}`);

      const data = await response.json();

      // ✅ Update specific experience
      setFormData((prev) => {
        const updated = [...prev];
        updated[index].description = data.optimizedData;
        return updated;
      });

      setCurrentDescriptionIndex(null); // Clear focus
    } catch (error) {}
  };

  const dispatch = useDispatch();
  const addMoreExperience = () => {
    setExperienceCount((prev) => prev + 1);
    setFormData((prev) => [
      ...prev,
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        workType: "",
        description: "",
        remote: false,
      },
    ]);
  };

  const removeExperience = (index) => {
    setExperienceCount((prev) => Math.max(0, prev - 1));
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const [field, index] = name.split("-");

    setFormData((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: type === "checkbox" ? checked : value,
      };
      return updated;
    });
  };

  const Save_AND_Next = () => {
    dispatch(updateExperience(formData));
    Next();
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <FaRegBuilding size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Work Experience
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Add your professional experience details
          </p>
        </div>
      </div>

      {/* Experience Cards */}

      <div className="space-y-6">
        {formData.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                Experience {index + 1}
              </h3>
              {experienceCount >= 1 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-sm text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded-md transition-colors duration-200"
                >
                  Remove
                </button>
              )}
            </div>

            {/* Company & Job Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label
                  htmlFor={`companyName-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Company Name <span className="text-blue-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaRegBuilding size={16} />
                  </div>
                  <input
                    id={`companyName-${index}`}
                    type="text"
                    name={`companyName-${index}`}
                    value={exp?.companyName || ""}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="Tech Corp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={`jobTitle-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Job Title <span className="text-blue-500">*</span>
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
                    id={`jobTitle-${index}`}
                    type="text"
                    name={`jobTitle-${index}`}
                    onChange={handleChange}
                    value={exp?.jobTitle || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="Senior Developer"
                  />
                </div>
              </div>
            </div>

            {/* Date & Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <label
                  htmlFor={`startDate-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Start Date <span className="text-blue-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCalendarAlt size={16} />
                  </div>
                  <input
                    id={`startDate-${index}`}
                    type="date"
                    name={`startDate-${index}`}
                    onChange={handleChange}
                    value={exp?.startDate || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={`endDate-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  End Date <span className="text-blue-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCalendarAlt size={16} />
                  </div>
                  <input
                    id={`endDate-${index}`}
                    type="date"
                    name={`endDate-${index}`}
                    onChange={handleChange}
                    value={exp?.endDate || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={`location-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Location <span className="text-blue-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <input
                    id={`location-${index}`}
                    onChange={handleChange}
                    type="text"
                    name={`location-${index}`}
                    value={exp?.location || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="New York, NY"
                  />
                </div>
              </div>
            </div>

            {/* Work Type & Remote */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label
                  htmlFor={`workType-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Work Type <span className="text-blue-500">*</span>
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
                        d="M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 8H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 12H17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 16H13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <select
                    id={`workType-${index}`}
                    name={`workType-${index}`}
                    onChange={handleChange}
                    value={exp?.workType || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                  >
                    <option value="">Select Type</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Work Mode
                </label>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <input
                      id={`remote-${index}`}
                      type="checkbox"
                      name={`remote-${index}`}
                      onChange={handleChange}
                      value={exp?.remote || ""}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`remote-${index}`}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remote Work
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor={`description-${index}`}
                className="block text-sm font-medium text-gray-700 flex items-center gap-1"
              >
                Job Description <span className="text-blue-500">*</span>
              </label>
              <textarea
                id={`description-${index}`}
                name={`description-${index}`}
                onChange={handleChange}
                value={exp?.description || ""}
                ref={JobDescription}
                rows="4"
                required
                className="w-full rounded-lg border border-gray-300
                         bg-white text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition-colors duration-200 px-4 py-3"
                placeholder="Describe your responsibilities and achievements..."
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">
                Include key responsibilities, projects, and measurable
                achievements
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleGenerateDescription(index)}
                className="text-sm font-medium text-blue-600 border-blue-300 hover:bg-blue-50 transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Generate with AI
              </Button>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="pt-2">
          <Button
            type="button"
            onClick={addMoreExperience}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 rounded-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4V20M20 12H4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add Experience
          </Button>
        </div>
        <div className="text-right">
          <button
            type="button"
            onClick={Save_AND_Next}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 rounded-sm"
          >
            Save & Next
          </button>
        </div>

        {/* Tips Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <div className="text-blue-500 mt-0.5">
              <FaRegLightbulb size={18} />
            </div>
            <div className="text-sm text-blue-800">
              <p className="font-medium">Pro Tips for Writing Experience:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>
                  Use action verbs like "Developed", "Managed", "Optimized"
                </li>
                <li>Include specific metrics and outcomes where possible</li>
                <li>Tailor your description to match job requirements</li>
                <li>Highlight your most relevant experience first</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
