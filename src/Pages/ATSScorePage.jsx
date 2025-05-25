import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ATSScoreLandingPage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showInitialText, setShowInitialText] = useState(true);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  // File upload handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // File size validation (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("❌ File size must be under 10MB", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setResumeFile(file);
    setShowInitialText(false);
    toast.success("✅ File uploaded successfully", {
      icon: <FaCheckCircle />,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Handle resume analysis
  const handleSubmit = async () => {
    if (!resumeFile) {
      toast.error("⚠️ Please upload your resume first.", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    setIsProcessing(true);
    setShowInitialText(false);

    // Prepare form data
    const formData = new FormData();
    formData.append("resume", resumeFile);

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
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error("❌ Failed to analyze resume. Please try again.", {
        icon: <FaExclamationCircle />,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Reset analysis
  const handleReset = () => {
    setResumeFile(null);
    setIsProcessing(false);
    setAnalysisResult(null);
    setShowInitialText(true);
  };

  // Render right content based on state
  const renderRightContent = () => {
    if (isProcessing) {
      return (
        <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm animate-fadeIn">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-6"></div>
            <h3 className="text-xl font-medium text-gray-900">
              Analyzing your resume...
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Comparing with industry standards
            </p>
            <div className="mt-6 w-full bg-blue-50 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full animate-pulse"
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
        <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm animate-fadeIn">
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
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {score >= 70
                ? "Excellent! Your resume is ATS-friendly"
                : score >= 40
                ? "Good, but some improvements needed"
                : "Significant improvements required"}
            </h3>
          </div>

          {/* Score Breakdown */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Keyword Match</span>
                <span>{keywordMatch}%</span>
              </div>
              <div className="w-full bg-blue-50 rounded-full h-2">
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
              <div className="w-full bg-blue-50 rounded-full h-2">
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
              <div className="w-full bg-blue-50 rounded-full h-2">
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
          <div className="mt-6 pt-4 border-t border-blue-100">
            <h4 className="text-sm font-medium text-blue-700 mb-3 flex items-center">
              <FaInfoCircle className="mr-2" /> Key Recommendations
            </h4>
            <ul className="space-y-3">
              {analysisResult.suggestions.map((suggestion, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-600">
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
                  <span className="text-sm text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reset Button */}
          <div className="mt-6 pt-4 border-t border-blue-100">
            <button
              onClick={handleReset}
              className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors"
            >
              Analyze Another Resume
            </button>
          </div>
        </div>
      );
    }

    // Initial Upload Message
    return (
      <div className="bg-white rounded-xl p-8 border border-blue-100 shadow-sm min-h-[300px] flex flex-col items-center justify-center text-center animate-fadeIn">
        <IoCloudUploadOutline className="w-16 h-16 text-blue-100 mb-4" />
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          Upload Resume to Begin
        </h3>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Upload your resume and get an instant score showing how well it
          matches applicant tracking systems.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ToastContainer />
      {/* Navigation */}
      <nav className="bg-white border-b border-blue-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12h6m-6 0H5m4 0h10M7 8v8a2 2 0 104 0V8a2 2 0 10-4 0z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">
                ResumeAnalyzer
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ATS Score Analysis
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant score showing how well your resume matches applicant
            tracking systems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side: Upload Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-white p-6 border-b border-blue-100">
              <h2 className="text-xl font-semibold text-gray-900">
                Upload Resume
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                PDF, DOCX or DOC (Max 10MB)
              </p>
            </div>
            <div className="p-8">
              {!resumeFile ? (
                <label
                  htmlFor="resume-upload"
                  className="border-2 border-dashed border-blue-200 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <IoCloudUploadOutline className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Upload Your Resume
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Drag & drop or click to browse
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
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
                  <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-blue-600"
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
                          <h4 className="font-medium text-gray-900">
                            {resumeFile.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {(resumeFile.size / 1024).toFixed(1)} KB •{" "}
                            <span className="text-blue-600">Ready</span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setResumeFile(null)}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
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
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
                        />
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
                            d="M9 12h6m-6 0H5m4 0h10M7 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2z"
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

          {/* Right Side: Analysis Results or Initial Text */}
          <div className="transition-all duration-300 ease-in-out">
            {renderRightContent()}
          </div>
        </div>

        {/* Score Interpretation Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="font-medium text-gray-900">
                  70%+ - Excellent
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Resume is highly compatible with ATS and ready for submission
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span className="font-medium text-gray-900">40-69% - Good</span>
              </div>
              <p className="text-sm text-gray-500">
                Resume needs some adjustments for full ATS compatibility
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="font-medium text-gray-900">
                  Under 40% - Needs Work
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Resume requires significant changes for ATS compatibility
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              How Our ATS Score Works
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Our AI-powered analysis examines multiple factors that affect ATS
              compatibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 17v-5a2 2 0 012-2h.01M9 5h10a2 2 0 012 2v3a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Keyword Matching
              </h3>
              <p className="text-gray-600">
                We analyze how well your resume matches the keywords used in
                typical job descriptions for your field
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 0h6m-6 0H5m4 0h10M7 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Formatting Quality
              </h3>
              <p className="text-gray-600">
                We check for formatting issues that could cause problems with
                ATS parsing
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 0H5m4 0h10M7 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Resume Structure
              </h3>
              <p className="text-gray-600">
                We evaluate the structure of your resume to ensure it's
                optimized for ATS
              </p>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-blue-50">
          <div className="bg-white p-6 md:p-8 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Pro Optimization Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
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
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Use Industry Keywords
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Match job description keywords exactly where relevant in
                    your resume
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
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
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 104 0v2M8 7h8"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Keep It Concise</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    One-page resumes work best for most professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
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
                      d="M9 12h6m-6 0H5m4 0h10M7 8v8a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2H9a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Quantify Achievements
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Use metrics to demonstrate impact and success
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-blue-600">
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
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Standard Formatting
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Avoid fancy designs and use standard section headers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0C44.7 0 0 44.7 0 100s44.7 100 100 100 100-44.7 100-100z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to improve your resume?
              </h2>
              <p className="text-blue-50 mb-8 max-w-2xl mx-auto">
                Get a free ATS score analysis and actionable recommendations to
                optimize your resume
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
                  Upload Resume
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ATSScoreLandingPage;
