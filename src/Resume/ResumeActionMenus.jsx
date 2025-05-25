import React, { useState } from "react";
import ResumeEditDialog from "./EditResume";
import CustomFontSelector from "./CustomFontSelector";
import ResumeTheme from "./ResumeTheme";
import FontSizeSelector from "./FontSizeSelector";
import DownloadResumeButton from "./DownloadResumeAnimation";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { SheetDemo } from "./TemplatesChanger";

const ResumeActionsMenu = ({ onDownload }) => {
  const [selectedColor, setSelectedColor] = useState("#1d4ed8");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`
      ResumeMenus 
      flex flex-col
      lg:fixed 
      lg:left-[78dvw] lg:top-[12dvh] lg:w-[20dvw] 
      gap-6
      p-5
      bg-white
      border border-gray-100
      rounded-xl
      shadow-lg
      shadow-blue-50/50
      z-50

    `}
    >
      {/* Header with Toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800">Resume Tools</h2>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
        >
          <svg
            className={`h-5 w-5 text-gray-500 transform transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
      </div>

      {/* Content with animation */}
      <div
        className={
          isExpanded ? "max-h-[200vh] opacity-100" : "max-h-0 opacity-0"
        }
        style={{ transition: "all 0.3s ease-out" }}
      >
        {/* Edit Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            Edit Resume
          </h3>
          <div>
            <ResumeEditDialog />
          </div>
        </div>
        {/* Formatting Section */}
        <div className="flex flex-col gap-3 mt-6">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            Formatting
          </h3>
          <div className="flex flex-col gap-3">
            <ResumeTheme />
            <CustomFontSelector />
            <FontSizeSelector />
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        className={`
          w-full h-12 px-6 
          bg-gradient-to-r from-blue-600 to-blue-800 
          text-white font-semibold text-lg
          rounded-md 
          shadow-sm
          transition-all duration-200
          flex justify-center items-center gap-2
          hover:shadow-md
          hover:from-blue-700 hover:to-blue-900
          active:translate-y-px
          mb-5
        `}
        onClick={onDownload}
        aria-label="Download resume"
      >
        <MdDownload className="text-white" />
        Download
      </button>
    </div>
  );
};

export default ResumeActionsMenu;
