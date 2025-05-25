import React, { useEffect, useState } from "react";
import ResumeDialog from "./ResumeDilog";
import { Link, useNavigate } from "react-router-dom";
import {
  RiAddLine,
  RiEditLine,
  RiDownloadLine,
  RiDeleteBinLine,
  RiShareLine,
} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateResume } from "../store/ResumeData";

function New() {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await fetch(`${API_URL}/resumes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch resumes");

        const data = await response.json();
        const formattedResumes = data.resumes.map((resume) => ({
          ...resume,
          date: new Date(resume._id).toLocaleDateString(),
          lastEdited: new Date(
            resume.last_edited || resume._id
          ).toLocaleDateString(),
        }));

        setResumes(formattedResumes);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/resumes/${id}`, {
        method: "DELETE",
        credentials: "include", // Ensures cookies are sent
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete resume");

      // Update UI by removing deleted resume from state
      setResumes(resumes.filter((resume) => resume._id !== id));
    } catch (error) {
      alert("Failed to delete resume");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Create New Resume Card - Tablet Friendly */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
        <div className="bg-black text-white px-6 py-4 flex justify-between items-center border-b border-gray-800/20">
          <h3 className="font-semibold text-lg">Create New Resume</h3>
          <div className="w-10 h-10 rounded-lg bg-[#1d4ed8] ] flex items-center justify-center transition-colors">
            <RiAddLine className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 flex flex-col items-center justify-center min-h-[220px]">
          <ResumeDialog
            Style="min-h-[180px] w-full bg-black text-white rounded-xl outline-2 outline-dashed outline-white hover:outline-gray-400 hover:bg-white hover:text-black transition-all duration-300 ease-in flex  justify-center items-center text-6xl gap-10 cursor-pointer"
            isOpen={true}
            iconStyle=" text-6xl group-hover:scale-110 transition-transform"
            width="w-full"
            existingNames={resumes.map((r) => r.fileName.toLowerCase())}
          />
        </div>
      </div>

      {/* Your Resumes Card - Tablet Optimized */}
      <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
        <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <h3 className="font-semibold text-lg text-black">Your Resumes</h3>
          <button className="text-sm text-gray-500 hover:text-black flex items-center gap-1 group">
            <span>Sort By</span>
            <svg
              className="w-3 h-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-4">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="bg-white p-5 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
            >
              {/* Resume Title & Actions */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h4 className="font-medium group-hover:text-black transition-colors">
                    {resume.fileName}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {resume.Template} •
                    <span
                      className={`
                      ml-1 font-medium
                      ${
                        resume.status === "Published"
                          ? "text-green-500"
                          : "text-yellow-500"
                      }
                    `}
                    >
                      Published
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-1 self-start sm:self-auto">
                  {/* Edit Button */}
                  <button
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center group/edit text-gray-400 hover:text-black transition-colors"
                    aria-label={`Edit ${resume.name}`}
                    onClick={() => {
                      dispatch(updateResume(resume));
                      navigate("/user/edit-resume");
                    }}
                    title="Edit Resume"
                  >
                    <RiEditLine className="w-5 h-5" />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center group/delete text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={`Delete ${resume.name}`}
                    title="Delete Resume"
                    onClick={() => handleDelete(resume._id)}
                  >
                    <RiDeleteBinLine className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Resume Metadata */}
              <div className="flex flex-wrap justify-between items-center text-xs sm:text-sm text-gray-400 mt-2 pt-2 border-t border-gray-100">
                <span>
                  Created:{" "}
                  {new Date(resume.createdAt).toISOString().split("T")[0]}
                </span>
                <span>
                  Last Edited:{" "}
                  {new Date(resume.updatedAt).toISOString().split("T")[0]}
                </span>
              </div>
            </div>
          ))}

          {/* New Resume Button - Tablet Friendly */}
          <button className="w-full mt-4 py-3 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <RiAddLine className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">Create New Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default New;
