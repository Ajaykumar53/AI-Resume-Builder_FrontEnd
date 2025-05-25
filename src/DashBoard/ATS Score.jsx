import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ATSScore() {
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("❌ File size must be under 10MB", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    setResumeFile(file);
    toast.success("✅ File uploaded successfully", {
      icon: <FaCheckCircle />,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const handleSubmit = async () => {
    if (!resumeFile) {
      toast.error("⚠️ Please upload your resume.", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    setIsProcessing(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("resume", resumeFile);
    if (jobRole) formData.append("jobRole", jobRole);
    if (jobDescription) formData.append("jobDescription", jobDescription);

    try {
      const response = await fetch(`${API_URL}/api/ATS-Score`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }

      const result = await response.json();
      setAnalysisResult({
        score: result.score,
        keywordMatch: result.keywordMatch,
        formattingScore: result.formattingScore,
        structureScore: result.structureScore,
        suggestions: result.suggestions || [
          "Use standard job titles",
          "Add more industry-specific keywords",
          "Simplify section headers",
          "Remove non-standard fonts",
        ],
      });

      toast.success(`ATS Score: ${result.score}%`, {
        icon: <FaCheckCircle />,
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error("❌ Failed to analyze resume. Please try again.", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setResumeFile(null);
    setJobRole("");
    setJobDescription("");
    setAnalysisResult(null);
    toast.info("Form reset", {
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const renderAnalysis = () => {
    if (isProcessing) {
      return (
        <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-medium">Analyzing your resume...</h3>
            <p className="mt-1 text-sm text-gray-500">
              Comparing with job description
            </p>
            <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full animate-pulse"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>
      );
    }

    if (analysisResult) {
      const { score, keywordMatch, formattingScore, structureScore } =
        analysisResult;

      return (
        <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm ">
          <div className="text-center mb-6">
            <div
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                score >= 70
                  ? "bg-green-50"
                  : score >= 40
                  ? "bg-yellow-50"
                  : "bg-red-50"
              }`}
            >
              <span
                className={`text-3xl font-bold ${
                  score >= 70
                    ? "text-green-600"
                    : score >= 40
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {score}%
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {score >= 70
                ? "Excellent! Your resume is ATS-friendly"
                : score >= 40
                ? "Good, but some improvements needed"
                : "Significant improvements required"}
            </h3>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Keyword Match</span>
                <span>{keywordMatch}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    keywordMatch >= 70
                      ? "bg-green-500"
                      : keywordMatch >= 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${keywordMatch}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Formatting Quality</span>
                <span>{formattingScore}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    formattingScore >= 70
                      ? "bg-green-500"
                      : formattingScore >= 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${formattingScore}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Resume Structure</span>
                <span>{structureScore}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    structureScore >= 70
                      ? "bg-green-500"
                      : structureScore >= 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${structureScore}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Improvement Suggestions */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-500 mb-3">
              Key Recommendations
            </h4>
            <ul className="space-y-3">
              {analysisResult.suggestions.map((suggestion, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div
                    className={`mt-0.5 ${
                      score >= 70
                        ? "text-green-500"
                        : score >= 40
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reset Button */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <button
              onClick={handleReset}
              className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Analyze Another Resume
            </button>
          </div>
        </div>
      );
    }

    // Empty state
    return (
      <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center ">
        <IoCloudUploadSharp className="w-16 h-16 text-gray-300 mb-4" />
        <h3 className="text-xl font-medium mb-2">Upload Resume to Begin</h3>
        <p className="text-sm text-gray-500 mb-6">
          Your ATS score and recommendations will appear here
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black ">
      {/* Header Section */}
      <div className="bg-[#1D4ED8] text-white px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                ATS Score Analysis
              </h1>
              <p className="mt-2 text-gray-300">
                Optimize your resume for applicant tracking systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-white p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold">Upload Resume</h2>
              <p className="text-sm text-gray-500 mt-1">
                PDF, DOCX, or DOC (Max 10MB)
              </p>
            </div>

            <div className="p-8 min-h-[300px]">
              {!resumeFile ? (
                <label
                  htmlFor="resume-upload"
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <IoCloudUploadSharp className="w-8 h-8 text-gray-600" />
                  </div>

                  <h3 className="text-lg font-medium">Upload Your Resume</h3>
                  <p className="text-sm text-gray-500 mt-1 text-center">
                    Drag & drop or click to browse
                  </p>
                  <p className="text-xs text-gray-400 mt-1 text-center">
                    PDF, DOCX, DOC • Max 10MB
                  </p>

                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
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
                              d="M7 16a4 4 0 01-.4-.06L3 15l.7-2M17 12h2m-2 5h2M19 7l-1.004.003A11.95 11.95 0 0012 4.003c-2.075 0-3.82.62-5.193 1.244M19 7l1.004.003A11.95 11.95 0 0112 19.997c-2.075 0-3.82-.62-5.193-1.244M19 7l-2 2m1.404.596L19 7m-8 0V5.997m0 8h8V14M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">{resumeFile.name}</h4>
                          <p className="text-xs text-gray-500">
                            {(resumeFile.size / 1024).toFixed(1)} KB •
                            <span className="text-green-500">Ready</span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setResumeFile(null)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove resume"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1H9a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <svg
                        className="w-5 h-5 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
                          transform="rotate(-90 12 12)"
                        ></path>
                      </svg>
                    ) : (
                      <>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Analyze Resume
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Results Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-white p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold">Analysis Results</h2>
              <p className="text-sm text-gray-500 mt-1">
                Score breakdown and recommendations
              </p>
            </div>

            <div className="p-6">{renderAnalysis()}</div>
          </div>
        </div>

        {/* Form Inputs Section */}
        <div className="mt-8 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="bg-white p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold">Enter Job Details</h2>
            <p className="text-sm text-gray-500 mt-1">
              Provide job role and description for more accurate scoring
              (optional)
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Job Role Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Role (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Frontend Developer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-black transition-shadow"
              />
            </div>

            {/* Job Description Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Description (Optional)
              </label>
              <textarea
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows="6"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-black transition-shadow resize-none"
              />
            </div>

            {/* Submit and Reset Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSubmit}
                disabled={isProcessing || !resumeFile}
                className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z"
                      transform="rotate(-90 12 12)"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12h6m-6 4h6m-6-8h6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Get ATS Score
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>

        {/* Score Interpretation */}
        <div className="mt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium">70%+ - Excellent</span>
              </div>
              <p className="text-sm text-gray-500">
                Resume is highly compatible with ATS and ready for submission
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium">40-69% - Good</span>
              </div>
              <p className="text-sm text-gray-500">
                Resume needs some adjustments for full ATS compatibility
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-medium">Under 40% - Needs Work</span>
              </div>
              <p className="text-sm text-gray-500">
                Resume requires significant changes for ATS compatibility
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Pro Optimization Tips
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 10-18 0 9 9 0 0018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Use Industry Keywords
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Match job description keywords exactly where relevant
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h6a2 2 0 012 2v2M8 7h8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Keep It Concise</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    One-page resumes work best for most professionals
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 0h6m-6 0H5a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-4z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Quantify Achievements
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Use metrics to demonstrate impact and success
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ATSScore;
