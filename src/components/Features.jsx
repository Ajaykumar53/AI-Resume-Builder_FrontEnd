import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const features = [
    {
      title: "AI Optimization",
      description:
        "Enhance your resume with AI-driven suggestions for better visibility.",
    },
    {
      title: "Industry-Specific Suggestions",
      description:
        "Tailored suggestions based on your industry and experience.",
    },
    {
      title: "Real-Time Feedback",
      description:
        "Instant feedback to improve the clarity and impact of your resume.",
    },
  ];

  return (
    <div className="mt-16 p-8 bg-gradient-to-b from-[#292929] to-stone-800 text-white rounded-xl pb-[100px]">
      <h3 className="text-center text-4xl font-bold mb-10">Why Choose Us?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="p-6 border border-gray-800 rounded-xl bg-blue-200 shadow-lg transition-transform transform hover:scale-105"
          >
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
