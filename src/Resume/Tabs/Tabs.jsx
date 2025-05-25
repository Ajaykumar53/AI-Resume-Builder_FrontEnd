import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TabNavigation = () => {
  const dispatch = useDispatch();
  const activeTab = 0;
  const tabs = [
    { id: 0, name: "Personal Info" },
    { id: 1, name: "Professional Summary" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Education" },
    { id: 5, name: "Skills & Certifications" },
  ];

  return (
    <div className="bg-white px-4 md:px-6 sticky top-0 z-10">
      <nav className="overflow-x-auto scrollbar-hide">
        <ul className="flex space-x-2 py-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => dispatch(setActiveTab(tab.id))}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TabNavigation;
