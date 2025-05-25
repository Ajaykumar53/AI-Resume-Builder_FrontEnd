import React from "react";

function ResumeAnimation() {
  return (
    <div className="resumeAnimation absolute bg-gray-100 h-[700px] w-[450px] rounded-sm z-0 p-4  -top-[400px] rotate-210 md:left-[600px] left-[100px]">
      {/* Header Placeholder */}
      <div className="h-8 bg-stone-300 rounded w-3/4 mb-4"></div>

      {/* Profile Section Placeholder */}
      <div className="flex items-center space-x-4 mb-6">
        {/* Profile Image Placeholder */}
        <div className="h-16 w-16 bg-stone-300 rounded-full"></div>
        {/* Profile Text Placeholder */}
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-stone-300 rounded w-3/4"></div>
          <div className="h-4 bg-stone-300 rounded w-1/2"></div>
        </div>
      </div>

      {/* Section Placeholder (e.g., Skills) */}
      <div className="mb-6">
        <div className="h-6 bg-stone-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-stone-300 rounded w-full mb-1"></div>
        <div className="h-4 bg-stone-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-stone-300 rounded w-4/6"></div>
      </div>

      {/* Section Placeholder (e.g., Experience) */}
      <div className="mb-6">
        <div className="h-6 bg-stone-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-stone-300 rounded w-full mb-1"></div>
        <div className="h-4 bg-stone-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-stone-300 rounded w-4/6"></div>
      </div>

      {/* Button Placeholder */}
      <div className="h-10 bg-stone-300 rounded w-full"></div>
    </div>
  );
}

export default ResumeAnimation;
