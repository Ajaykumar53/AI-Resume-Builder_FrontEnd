import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  FaStar,
  FaRegLightbulb,
  FaCertificate,
  FaRegTrashAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSkills,
  updateCertifications,
  updateResume,
} from "../../store/ResumeData";
import { useNavigate } from "react-router-dom";

export default function SkillsCertifications({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get saved data from Redux
  const savedSkills = useSelector((state) => state.resume.skills || []);
  const savedCertifications = useSelector(
    (state) => state.resume.certifications || []
  );
  const Resume = useSelector((state) => state.resume);
  const { userId } = useSelector((state) => state.userData.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    skills: savedSkills.length > 0 ? [...savedSkills] : [""],
    certifications:
      savedCertifications.length > 0 ? [...savedCertifications] : [""],
  });
  const [formErrors, setFormErrors] = useState({
    skills: "",
    certifications: "",
  });

  const validateForm = (data) => {
    const errors = {};

    // Validate skills
    if (
      data.skills.length === 0 ||
      data.skills.every((skill) => !skill.trim())
    ) {
      errors.skills = "At least one skill is required";
    }

    // Validate certifications
    if (
      data.certifications.length === 0 ||
      data.certifications.every((cert) => !cert.trim())
    ) {
      errors.certifications = "At least one certification is required";
    }

    return errors;
  };

  // Sync formData with Redux state on initial load or when savedSkills/certifications change
  useEffect(() => {
    setFormData({
      skills: savedSkills.length > 0 ? [...savedSkills] : [""],
      certifications:
        savedCertifications.length > 0 ? [...savedCertifications] : [""],
    });
  }, [savedSkills, savedCertifications]);

  // Handle input changes
  const handleChange = (type, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[type]];
      updated[index] = value;
      return {
        ...prev,
        [type]: updated,
      };
    });
  };

  // Add new field
  const addField = (type) => {
    setFormData((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  // Remove field (keep at least 1)
  const removeField = (type, index) => {
    if (formData[type].length > 1) {
      setFormData((prev) => ({
        ...prev,
        [type]: prev[type].filter((_, i) => i !== index),
      }));
    }
  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const token = getCookie("token");

  // Submit handler
  const handleSubmit = async () => {
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);

    // Filter out empty skills and certifications
    const cleanedFormData = {
      skills: formData.skills.filter((skill) => skill.trim()),
      certifications: formData.certifications.filter((cert) => cert.trim()),
    };

    // Dispatch actions to update Redux store
    dispatch(updateSkills(cleanedFormData.skills));
    dispatch(updateCertifications(cleanedFormData.certifications));

    // Construct the resume data with updated skills and certifications
    const updatedResume = {
      ...Resume,
      userId,
      skills: cleanedFormData.skills,
      certifications: cleanedFormData.certifications,
    };

    try {
      const API_URL = import.meta.env.VITE_BACKEND_URL;
      const response = await fetch(`${API_URL}/resumes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedResume),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.statusText}`);
      }

      const responseData = await response.json();

      // Update Redux store with the response data
      dispatch(updateResume(responseData.resume));

      onClose();
    } catch (error) {
      setFormErrors({ ...formErrors, general: "Failed to save resume" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <FaStar size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Skills & Certifications
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Highlight your technical abilities and professional credentials
          </p>
        </div>
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-600 mb-6">
        List your most relevant skills and certifications that demonstrate your
        qualifications for your target role.
      </p>

      {/* General Error Message */}
      {formErrors.general && (
        <p className="text-red-500 text-sm mb-4">{formErrors.general}</p>
      )}

      <div className="space-y-6">
        {/* Skills Section */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800 flex items-center">
              <FaStar className="text-blue-500 mr-2" /> Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {formData.skills.map((skill, index) => (
              <div
                key={`skill-${index}`}
                className="flex items-center space-x-3 group"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaStar size={14} />
                  </div>
                  <input
                    type="text"
                    value={skill || ""}
                    onChange={(e) =>
                      handleChange("skills", index, e.target.value)
                    }
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="JavaScript"
                  />
                  {formErrors.skills && index === 0 && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.skills}
                    </p>
                  )}
                </div>

                {formData.skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField("skills", index)}
                    className="opacity-0 group-hover:opacity-100 text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                    aria-label="Remove skill"
                  >
                    <FaRegTrashAlt size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => addField("skills")}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-columns duration-200 rounded-lg"
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
              Add Skill
            </Button>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-800 flex items-center">
              <FaCertificate className="text-blue-500 mr-2" /> Certifications
            </h3>
          </div>

          <div className="space-y-4 mb-6">
            {formData.certifications.map((cert, index) => (
              <div
                key={`cert-${index}`}
                className="flex items-center space-x-3 group"
              >
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaCertificate size={14} />
                  </div>
                  <input
                    type="text"
                    value={cert || ""}
                    onChange={(e) =>
                      handleChange("certifications", index, e.target.value)
                    }
                    className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 
                             bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-colors duration-200"
                    placeholder="AWS Certified Developer"
                  />
                  {formErrors.certifications && index === 0 && (
                    <p className="text-xs text-red-500 mt-1">
                      {formErrors.certifications}
                    </p>
                  )}
                </div>

                {formData.certifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField("certifications", index)}
                    className="opacity-0 group-hover:opacity-100 text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                    aria-label="Remove certification"
                  >
                    <FaRegTrashAlt size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={() => addField("certifications")}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 rounded-lg"
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
              Add Certification
            </Button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right w-full">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-6 py-2 text-lg bg-green-400 text-black hover:bg-green-500 cursor-pointer transition-colors duration-200 rounded-md shadow-md hover:shadow-lg 
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Tips Section */}
        <div className="pt-4 mt-6 border-t border-gray-100">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <div className="text-blue-500 mt-0.5">
              <FaRegLightbulb size={18} />
            </div>
            <div className="text-sm text-blue-800">
              <p className="font-medium">
                Pro Tips for Listing Skills & Certifications:
              </p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Focus on skills most relevant to your target role</li>
                <li>List certifications in order of relevance and recency</li>
                <li>Include both technical and soft skills</li>
                <li>Use industry-specific keywords for ATS optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
