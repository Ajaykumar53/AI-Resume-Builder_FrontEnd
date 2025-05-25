import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="relative p-6 bg-white border rounded-lg shadow-lg md:w-sm lg:w-sm w-[320px]  mx-auto mb-1.5 md:mb-0">
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-900 mb-2 pt-[180px]">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-500 font-medium tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
