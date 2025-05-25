import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PersonalData from "./Tabs/PersonalInfo";
import ProfessionalSummary from "./Tabs/ProfessionalSummary";
import Experience from "./Tabs/Experience";
import Projects from "./Tabs/Projects";
import Education from "./Tabs/Education";
import SkillsCertifications from "./Tabs/SkillsCertifications";
import {
  FaRegUserCircle,
  FaRegLightbulb,
  FaBuilding,
  FaFolderOpen,
  FaGraduationCap,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

export default function ResumeEditDialog() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // New state for dialog
  const scrollAreaRef = useRef(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const NextTab = () => {
    setActiveTab((prev) => prev + 1);
  };
  const PrevTab = () => {
    setActiveTab((prev) => prev - 1);
  };

  // Close dialog handler
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const tabs = [
    {
      id: 0,
      name: "Personal",
      icon: <FaRegUserCircle size={16} />,
      component: <PersonalData Next={NextTab} />,
    },
    {
      id: 1,
      name: "Summary",
      icon: <FaRegLightbulb size={16} />,
      component: <ProfessionalSummary Next={NextTab} />,
    },
    {
      id: 2,
      name: "Experience",
      icon: <FaBuilding size={16} />,
      component: <Experience Next={NextTab} />,
    },
    {
      id: 3,
      name: "Projects",
      icon: <FaFolderOpen size={16} />,
      component: <Projects Next={NextTab} />,
    },
    {
      id: 4,
      name: "Education",
      icon: <FaGraduationCap size={16} />,
      component: <Education Next={NextTab} />,
    },
    {
      id: 5,
      name: "Skills",
      icon: <FaStar size={16} />,
      component: <SkillsCertifications onClose={closeDialog} />, // Pass close handler
    },
  ];

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button
          className="flex w-full  justify-center items-center gap-2 font-medium bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-colors duration-200 cursor-pointer text-sm md:text-base"
          onClick={() => setIsDialogOpen(true)}
        >
          <FaPenToSquare size={14} /> Edit Resume
        </button>
      </DialogTrigger>

      {/* Main Dialog Content Container */}
      <DialogContent
        className="max-w-[95vw] md:max-w-[85vw] h-[90vh] flex flex-col p-0 rounded-xl shadow-2xl"
        aria-labelledby="resume-builder-title"
        aria-describedby="resume-builder-description"
      >
        <DialogTitle>
          {/* Fixed Header Section */}
          <div className="p-6 border-b border-gray-200 bg-gray-50 rounded-t-xl flex justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Resume Builder
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Complete your resume information
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4  gap-2">
              {activeTab > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={PrevTab}
                  className="px-4 py-2 text-sm text-gray-700 border-gray-300 hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaChevronLeft />
                </Button>
              )}

              {activeTab < 5 ? (
                <Button
                  type="button"
                  onClick={NextTab}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                >
                  <FaChevronRight />
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </DialogTitle>

        {/* Fixed Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-gray-200 bg-white px-4 md:px-6 hide-scrollbar">
          <div className="flex space-x-2 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#1d4ed8] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                <span
                  className={`${
                    activeTab === tab.id ? "text-white" : "text-gray-500"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          ref={scrollAreaRef}
          className="flex-1 overflow-y-auto p-6 hide-scrollbar"
        >
          <form className="space-y-8">
            {/* Current Tab Content */}
            {tabs[activeTab].component}
          </form>
        </div>
        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
