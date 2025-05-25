import React, { useRef, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { updateSummary } from "../../store/ResumeData";

export default function ProfessionalSummary({ Next }) {
  const Summary = useSelector((state) => state.resume.summary);
  const [formData, setFormData] = useState({ summary: Summary });
  const ProfessionalSummary = useRef(null);
  const [formErrors, setFormErrors] = useState({});
  const requiredFields = {
    summary: "Professional Summary",
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

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const Save_AND_Next = () => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;
    dispatch(updateSummary(formData.summary));
    Next(); // ✅ Properly invoke the function passed from parent
    setFormData(Summary);
  };
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const handleGenerateProfessionalSummary = async () => {
    const roughDescription = ProfessionalSummary.current?.value;
    if (!roughDescription) return;
    try {
      const response = await fetch(`${API_URL}/generate-professional-summary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roughDescription }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.statusText}`);
      }
      const data = await response.json();
      // ✅ Update state directly instead of DOM
      setFormData((prev) => ({
        ...prev,
        summary: data.optimizedData,
      }));
      if (ProfessionalSummary.current) {
        ProfessionalSummary.current.value = data.optimizedData;
        // setFormData((prev) => ({ ...prev, summary: data.optimizedData }));
      }
    } catch (error) {
      console.error("Error optimizing professional summary:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm  p-6 transition-all duration-200 ">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <FaRegLightbulb size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Create a compelling overview of your career highlights
          </p>
        </div>
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-600 mb-6">
        Write a concise overview of your professional background, highlighting
        your key skills, experience, and value proposition.
      </p>

      <div className="space-y-6">
        {/* Textarea Section */}
        <div className="space-y-2">
          <label
            htmlFor="summary"
            className="blqck text-sm font-medium text-gray-800 flex items-center gap-1"
          >
            Professional Summary <span className="text-blue-500">*</span>
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"></div>
            <textarea
              id="summary"
              name="summary"
              onChange={handleChange}
              ref={ProfessionalSummary}
              value={formData?.summary || ""}
              rows="6"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                       bg-white text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition-colors duration-200 resize-y min-h-[120px]"
              placeholder="Write a brief professional summary highlighting your key skills and experience..."
            ></textarea>
            {formErrors.summary && (
              <p className="text-xs text-red-500 mt-1">{formErrors.summary}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Recommended: 3-5 sentences that showcase your professional value
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleGenerateProfessionalSummary}
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
        <div className="text-right">
          <button
            type="button"
            onClick={Save_AND_Next}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 rounded-sm"
          >
            Save & Next
          </button>
        </div>

        {/* Notes Section */}
        <div className="pt-4 mt-6 border-t border-gray-100">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
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
              <p className="font-medium">Pro Tips for Writing Your Summary:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Start with your strongest professional attribute</li>
                <li>Mention 1-2 key achievements or areas of expertise</li>
                <li>Include relevant industry keywords for ATS optimization</li>
                <li>Keep it concise (3-5 sentences is ideal)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
