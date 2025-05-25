import React, { useRef } from "react";
import HeroSection, {
  FAQSection,
  FeatureCardsSection,
  FooterSection,
  ProcessSteps,
  TemplateShowcase,
} from "../components/HeroComponent";

function LandingPage() {
  const bubbleRefs = {
    bubble1: useRef(null),
    bubble2: useRef(null),
    bubble3: useRef(null),
  };
  return (
    <div className="bg-[#eae7dc]">
      {/* <div className="resumeAnimation absolute rotate-45 bg-amber-100 h-[500px] w-[400px] rounded-sm "></div> */}
      {/* <HeroComponent /> */}
      <HeroSection bubbleRefs={bubbleRefs} />
      <FeatureCardsSection />
      <ProcessSteps />
      <TemplateShowcase />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
