// components/ResumeTheme.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrimaryColor } from "../store/theme";

function ResumeTheme() {
  const dispatch = useDispatch();
  const primaryColor = useSelector((state) => state.theme.primaryColor);

  const colors = [
    { name: "Sky Blue", value: "#1d4ed8" },
    { name: "Emerald", value: "#10b981" },
    { name: "Amber", value: "#f59e0b" },
    { name: "Rose", value: "#f43f5e" },
    { name: "Slate", value: "#64748b" },
    { name: "Indigo", value: "#6366f1" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Purple", value: "#8b5cf6" },
    { name: "black", value: "#000000" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedColorName, setSelectedColorName] = React.useState("Sky Blue");

  const handleColorSelect = (color) => {
    dispatch(setPrimaryColor(color.value));
    setSelectedColorName(color.name);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-xs w-full">
      {/* Label */}
      <label className="text-md font-medium text-gray-900 mb-2 block">
        Select Theme
      </label>

      {/* Color Picker Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-[90vw] md:w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm 
                 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 
                 focus:border-blue-500 transition-all duration-200 ease-in-out
                 flex items-center justify-between hover:border-gray-300"
      >
        <div className="flex items-center gap-3">
          <span
            className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0"
            style={{
              backgroundColor: primaryColor,
              border: `2px solid ${primaryColor}`,
            }}
          />
          <span className="text-gray-800 font-medium text-sm truncate">
            {selectedColorName}
          </span>
        </div>

        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-[90vw] md:w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl">
          <div className="max-h-[200px] overflow-y-auto py-1 text-sm">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => handleColorSelect(color)}
                className="w-full  text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-50 
                         transition-colors duration-150 ease-in-out"
                type="button"
              >
                <span
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center
                            ${
                              primaryColor === color.value
                                ? "border-blue-600"
                                : "border-gray-300"
                            }`}
                  style={{ backgroundColor: color.value }}
                >
                  {primaryColor === color.value && (
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </span>
                <span className="text-gray-800 group-hover:text-blue-600">
                  {color.name}
                </span>
                <span className="ml-auto text-xs text-gray-400">
                  {color.value}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeTheme;
