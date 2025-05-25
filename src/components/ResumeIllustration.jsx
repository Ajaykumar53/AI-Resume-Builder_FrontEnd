import React from "react";
import "./ResumeIllustration.css";
import Card from "./Card";

function ResumeIllustration() {
  return (
    <div className="w-full  p-1.5">
      <div className="main h-[80dvh] md:p-[10dvh] p-[5dvw] min-h-fit">
        <a href="#" className="button1" style={{ "--clr": "#7808d0" }}>
          <span className="button1__icon-wrapper">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="button1__icon-svg"
              width="10"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>

            <svg
              viewBox="0 0 14 15"
              fill="none"
              width="10"
              xmlns="http://www.w3.org/2000/svg"
              className="button1__icon-svg button1__icon-svg--copy"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          Explore All Air Max
        </a>
        <div className="Cards md:flex justify-evenly ">
          <Card
            title="Intelligent Personalization"
            description="Our platform employs advanced machine learning algorithms to understand user preferences, delivering personalized content and recommendations."
          />
          <Card
            title="Dynamic Content Delivery"
            description="Experience seamless updates with our platform's real-time content delivery system, ensuring users always have access to the latest information."
          />
          <Card
            title="Dynamic Content Delivery"
            description="Experience seamless updates with our platform's real-time content delivery system, ensuring users always have access to the latest information."
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeIllustration;
