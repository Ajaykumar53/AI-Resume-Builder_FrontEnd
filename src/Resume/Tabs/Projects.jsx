import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FaFolderOpen,
  FaLink,
  FaCode,
  FaRegLightbulb,
  FaCheckCircle,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../../store/ResumeData";

export default function Projects({ Next }) {
  const project = useSelector((state) => state.resume.projects || []);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    project.length > 0
      ? [...project]
      : [
          {
            projectTitle: "",
            technologies: "",
            projectDescription: "",
          },
        ]
  );
  const [projectCount, setProjectCount] = useState(formData.length);
  const ProjectDescription = useRef([]);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const requiredFields = {
    projectTitle: "Project Title",
    technologies: "Technologies Used",
    projectDescription: "Project Description",
  };

  const validateForm = (data) => {
    const errors = {};
    data.forEach((project, index) => {
      Object.entries(requiredFields).forEach(([key, label]) => {
        if (!project[key]?.trim()) {
          errors[`project-${index}-${key}`] = `${label} is required`;
        }
      });
    });
    return errors;
  };

  useEffect(() => {
    if (project.length > 0) {
      if (JSON.stringify(formData) !== JSON.stringify(project)) {
        setFormData([...project]);
      }
    } else {
      if (formData.length === 0) {
        setFormData([
          {
            projectTitle: "",
            technologies: "",
            projectDescription: "",
          },
        ]);
      }
    }
    setProjectCount(project.length);
  }, [project]);
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const handleGenerateDescription = async (index) => {
    const roughDescription = formData[index]?.projectDescription || "";
    if (!roughDescription) return;
    try {
      const response = await fetch(`${API_URL}/generate-project-description`, {
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
        updated[index].projectDescription = data.optimizedData;
        return updated;
      });

      setCurrentDescriptionIndex(null); // Clear focus
    } catch (error) {
      console.error("Error optimizing job description:", error);
    }
  };

  const addMoreProject = () => {
    setProjectCount((prev) => prev + 1);
    setFormData((prev) => [
      ...prev,
      {
        projectTitle: "",
        technologies: "",
        projectDescription: "",
      },
    ]);
  };

  const removeProject = (index) => {
    setProjectCount((prev) => Math.max(1, prev - 1));
    setFormData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, index] = name.split("-");

    setFormData((prev) => {
      const updated = [...prev];
      if (updated[index][field] !== value) {
        updated[index] = { ...updated[index], [field]: value };
        return updated;
      }
      return prev;
    });
  };

  const Save_AND_Next = () => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;
    dispatch(updateProjects(formData));
    Next();
    setFormData([...project]); // Reset form to Redux state
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <FaFolderOpen size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-600 mt-1">
            Showcase your most impactful work
          </p>
        </div>
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-600 mb-6">
        Add projects that demonstrate your skills and achievements. Include
        links and technologies used for each project.
      </p>

      <div className="space-y-6">
        {/* Project Cards */}
        {formData.map((pro, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                Project {index + 1}
              </h3>
              {formData.length > 1 && (
                <button
                  type="button"
                  onClick={() => {
                    removeProject(index);
                  }}
                  className="text-sm text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1 rounded-md transition-colors duration-200 flex items-center"
                >
                  <FaRegTrashAlt className="mr-1" size={14} /> Remove
                </button>
              )}
            </div>

            {/* Project Title */}
            <div className="space-y-2 mb-6">
              <label
                htmlFor={`projectTitle-${index}`}
                className="block text-sm font-medium text-gray-700 flex items-center gap-1"
              >
                Project Title <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaFolderOpen size={16} />
                </div>
                <input
                  id={`projectTitle-${index}`}
                  type="text"
                  name={`projectTitle-${index}`}
                  onChange={handleChange}
                  value={pro?.projectTitle || ""}
                  required
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                           bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-colors duration-200"
                  placeholder="Project Name"
                />
                {formErrors[`project-${index}-projectTitle`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {formErrors[`project-${index}-projectTitle`]}
                  </p>
                )}
              </div>
            </div>

            {/* Project URL & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label
                  htmlFor={`technologies-${index}`}
                  className="block text-sm font-medium text-gray-700 flex items-center gap-1"
                >
                  Technologies Used <span className="text-blue-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCode size={16} />
                  </div>
                  <input
                    id={`technologies-${index}`}
                    type="text"
                    name={`technologies-${index}`}
                    onChange={handleChange}
                    value={pro?.technologies || ""}
                    required
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="React, Node.js, MongoDB"
                  />
                  {formErrors[`project-${index}-technologies`] && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors[`project-${index}-technologies`]}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <label
                htmlFor={`projectDescription-${index}`}
                className="block text-sm font-medium text-gray-700 flex items-center gap-1"
              >
                Project Description <span className="text-blue-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaRegLightbulb size={16} />
                </div>
                <textarea
                  id={`projectDescription-${index}`}
                  name={`projectDescription-${index}`}
                  onChange={handleChange}
                  value={pro?.projectDescription || ""}
                  ref={ProjectDescription}
                  rows="4"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                           bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           transition-colors duration-200 resize-y min-h-[120px]"
                  placeholder="Describe the project, your role, and key achievements..."
                ></textarea>
                {formErrors[`project-${index}-projectDescription`] && (
                  <p className="text-xs text-red-500 mt-1">
                    {formErrors[`project-${index}-projectDescription`]}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Include specific outcomes and measurable results
                </p>
                <div className="flex items-center text-green-600">
                  <FaCheckCircle size={14} className="mr-1" />
                  <span className="text-xs font-medium">Saved</span>
                </div>
              </div>
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
            onClick={addMoreProject}
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
            Add Project
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
              <p className="font-medium">
                Pro Tips for Writing Project Descriptions:
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Use the STAR method (Situation, Task, Action, Result)</li>
                <li>Quantify your impact with metrics where possible</li>
                <li>
                  Highlight your specific contributions and technical skills
                </li>
                <li>Include links to live projects or repositories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
