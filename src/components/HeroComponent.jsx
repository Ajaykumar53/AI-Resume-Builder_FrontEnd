import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaRegLightbulb,
  FaRegClock,
  FaRegCheckCircle,
  FaLaptopCode,
  FaFileAlt,
  FaRobot,
  FaSearch,
  FaPalette,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaRegLifeRing,
  FaPhoneSquare,
  FaEnvelope,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// Mock resume templates data
const resumeTemplates = [
  { id: 1, name: "Executive", color: "#1E40AF", category: "Professional" },
  { id: 2, name: "Creative", color: "#6366F1", category: "Modern" },
  { id: 3, name: "Minimalist", color: "#374151", category: "Clean" },
  { id: 4, name: "Technical", color: "#10B981", category: "Industry-Specific" },
  { id: 5, name: "Academic", color: "#F59E0B", category: "Educational" },
  { id: 6, name: "Corporate", color: "#4B5563", category: "Professional" },
];

// Mock testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Manager at TechCorp",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
    testimonial:
      "This AI resume builder transformed my job search. I received 3 interview calls within a week of updating my resume!",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Software Engineer",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
    testimonial:
      "As a developer, I was skeptical about AI tools, but this one actually understood my technical skills and formatted them perfectly for recruiters.",
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "Healthcare Professional",
    avatar: "/avatars/avatar3.jpg",
    rating: 4,
    testimonial:
      "The industry-specific suggestions helped me highlight my relevant experience in healthcare administration. Highly recommended!",
  },
];

// FAQ data
const faqData = [
  {
    question: "How does the AI resume optimization work?",
    answer:
      "Our AI analyzes your resume content against industry standards, job descriptions, and ATS requirements. It then provides suggestions to improve your wording, formatting, and content organization to maximize your resume's effectiveness.",
  },
  {
    question: "Are the templates ATS-friendly?",
    answer:
      "Yes, all our templates are designed to be fully compatible with Applicant Tracking Systems. We use clean formatting, appropriate section headers, and avoid complex elements that might confuse ATS software.",
  },
  {
    question: "Can I create multiple resume versions?",
    answer:
      "Absolutely! Our platform allows you to create unlimited resume versions, making it easy to tailor your resume for different job applications and industries.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We prioritize your privacy and security. All data is encrypted, and we never share your personal information with third parties. We're ISO 27001 certified, ensuring the highest security standards.",
  },
  {
    question: "Do I need technical skills to use this tool?",
    answer:
      "Not at all! Our intuitive interface is designed for users of all technical levels. Simply follow our step-by-step process, and the AI will guide you through creating a professional resume.",
  },
];

// Pricing plans
const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "1 Basic Resume",
      "Limited Templates",
      "Basic AI Suggestions",
      "Standard Export (PDF)",
      "Community Support",
    ],
    isPopular: false,
    ctaText: "Get Started",
  },
  {
    name: "Professional",
    price: "$9.99",
    period: "monthly",
    features: [
      "Unlimited Resumes",
      "All Premium Templates",
      "Advanced AI Optimization",
      "Multiple Export Formats",
      "ATS Compatibility Check",
      "Priority Support",
    ],
    isPopular: true,
    ctaText: "Start 7-Day Free Trial",
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "monthly",
    features: [
      "Everything in Professional",
      "Team Collaboration",
      "Admin Dashboard",
      "API Access",
      "Custom Branding",
      "Dedicated Account Manager",
    ],
    isPopular: false,
    ctaText: "Contact Sales",
  },
];

// Components
const HeroSection = ({ bubbleRefs }) => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      // Subtle heading animation
      gsap.from(heroRef.current.querySelectorAll("h1 span"), {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      });

      // Smooth paragraph animation
      gsap.from(heroRef.current.querySelector("p"), {
        opacity: 0,
        y: 20,
        delay: 0.8,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white min-h-screen md:pt-5 pb-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="md:h-[90dvh] h-[70vh] w-full rounded-lg relative overflow-hidden flex items-center pt-[200px] md:pt-0">
          {/* Professional Bubble Container */}
          <div
            className="absolute w-full h-full top-0 left-0 pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <div
              ref={bubbleRefs.bubble1}
              className="bubble absolute opacity-20"
              style={{
                width: "18vw",
                height: "18vw",
                background: "linear-gradient(45deg, #1F2937, #374151)",
                borderRadius: "49% 51% 62% 38% / 52% 39% 61% 48%",
                transform: "translate(-30%, -10%)",
              }}
            />
            <div
              ref={bubbleRefs.bubble2}
              className="bubble absolute opacity-20"
              style={{
                width: "15vw",
                height: "15vw",
                background: "linear-gradient(135deg, #6B7280, #9CA3AF)",
                borderRadius: "62% 38% 45% 55% / 43% 54% 46% 57%",
                transform: "translate(15%, 5%)",
              }}
            />
            <div
              ref={bubbleRefs.bubble3}
              className="bubble absolute opacity-20"
              style={{
                width: "16vw",
                height: "16vw",
                background: "linear-gradient(225deg, #3B82F6, #6366F1)",
                borderRadius: "38% 62% 53% 47% / 61% 44% 56% 39%",
                transform: "translate(-10%, 20%)",
              }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-blue-700 font-medium text-sm">
                Professional Resume Builder
              </span>
            </div>

            {/* Main Heading */}
            <div ref={heroRef}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
                <span className="block">Transform Your Career</span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Resume with AI Precision
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                Create ATS-friendly resumes that stand out to recruiters and
                hiring managers with our intelligent resume builder
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to={"/sign-in"}>
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="flex items-center">
                      <span>Build Your Professional Resume</span>
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
                <Link to={"/sign-in"}>
                  <button className="px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-300">
                    See How It Works
                  </button>
                </Link>
              </div>

              {/* CTA Button */}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>Trusted by 20,000+ Professionals</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>98% Success Rate in Job Applications</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span>ISO 27001 Certified Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// export const FeatureHighlight = ({
//   icon: Icon,
//   title,
//   description,
//   isReversed = false,
// }) => {
//   const featureRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(featureRef.current, {
//         x: isReversed ? 50 : -50,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: featureRef.current,
//           start: "top 80%",
//           end: "bottom 60%",
//           toggleActions: "play none none none",
//         },
//       });
//     },
//     { scope: featureRef }
//   );

//   return (
//     <div
//       ref={featureRef}
//       className="flex flex-col md:flex-row items-center gap-12 py-20"
//     >
//       {/* Content */}
//       <div className={`md:w-1/2 ${isReversed ? "md:order-2" : "md:order-1"}`}>
//         <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
//           <Icon className="text-blue-600 mr-2" />
//           <span className="text-blue-700 font-medium text-sm">
//             Feature Highlight
//           </span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//           {title}
//         </h2>
//         <p className="text-lg text-gray-600 mb-8">{description}</p>
//         <div className="flex flex-wrap gap-4">
//           <div className="flex items-center">
//             <FaCheckCircle className="text-green-500 mr-2" />
//             <span className="text-gray-700">Time-saving automation</span>
//           </div>
//           <div className="flex items-center">
//             <FaCheckCircle className="text-green-500 mr-2" />
//             <span className="text-gray-700">Expert-designed templates</span>
//           </div>
//           <div className="flex items-center">
//             <FaCheckCircle className="text-green-500 mr-2" />
//             <span className="text-gray-700">Industry-specific keywords</span>
//           </div>
//         </div>
//       </div>

//       {/* Image/Visual */}
//       <div className={`md:w-1/2 ${isReversed ? "md:order-1" : "md:order-2"}`}>
//         <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-xl">
//           <div className="aspect-w-4 aspect-h-3 bg-white rounded-lg shadow-inner overflow-hidden border border-gray-200">
//             {/* Mockup content */}
//             <div className="p-4">
//               <div className="w-full h-6 bg-gray-200 rounded-full mb-4"></div>
//               <div className="grid grid-cols-3 gap-2 mb-3">
//                 <div className="h-4 bg-gray-100 rounded"></div>
//                 <div className="h-4 bg-blue-100 rounded"></div>
//                 <div className="h-4 bg-gray-100 rounded"></div>
//               </div>
//               <div className="w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-3"></div>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="h-20 bg-gray-100 rounded"></div>
//                 <div className="h-20 bg-gray-100 rounded"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const FeatureCardsSection = () => {
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(cardsRef.current.querySelectorAll(".feature-card"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: cardsRef }
  );

  const features = [
    {
      icon: FaRobot,
      title: "AI-Powered Optimization",
      description:
        "Our AI analyzes your content against industry standards and provides real-time suggestions to strengthen your resume.",
    },
    {
      icon: FaSearch,
      title: "ATS Compatibility",
      description:
        "Ensure your resume passes through Applicant Tracking Systems with our ATS-friendly formatting tools.",
    },
    {
      icon: FaPalette,
      title: "Professional Templates",
      description:
        "Choose from 20+ modern, clean templates designed by professional HR experts and designers.",
    },
    {
      icon: FaRegLightbulb,
      title: "Smart Suggestions",
      description:
        "Get industry-specific recommendations for skills, achievements, and keywords that make your resume stand out.",
    },
    {
      icon: FaFileAlt,
      title: "Multiple Formats",
      description:
        "Download your resume in multiple formats including PDF, DOCX, and TXT, ensuring compatibility with all application systems.",
    },
    {
      icon: FaChartLine,
      title: "Resume Analytics",
      description:
        "Track the performance of your resume and get insights to continuously improve your application success rate.",
    },
  ];

  return (
    <div ref={cardsRef} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Boost Your Career
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our resume builder combines cutting-edge technology with
            professional design to give you the competitive edge in today's job
            market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProcessSteps = () => {
  const stepsRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(stepsRef.current.querySelectorAll(".step-item"), {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: stepsRef }
  );

  const steps = [
    {
      number: "01",
      title: "Select a Template",
      description:
        "Choose from our collection of ATS-friendly templates designed for your industry.",
    },
    {
      number: "02",
      title: "Fill Your Details",
      description:
        "Input your experience, skills, and achievements with guided prompts.",
    },
    {
      number: "03",
      title: "AI Enhancement",
      description:
        "Our AI analyzes your content and suggests improvements for maximum impact.",
    },
    {
      number: "04",
      title: "Download & Apply",
      description:
        "Export your optimized resume in multiple formats ready for job applications.",
    },
  ];

  return (
    <div ref={stepsRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create Your Perfect Resume in 4 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process takes the stress out of resume creation,
            guiding you from template selection to final download.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-100 transform -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="step-item md:flex items-center">
                <div
                  className={`md:w-full ${
                    index % 2 === 0
                      ? "md:pr-[650px] md:text-right"
                      : "md:pl-[650px] md:text-left md:order-2"
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded text-sm font-semibold bg-blue-100 text-blue-800 mb- ">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div
                  className={`hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-500 z-10`}
                >
                  <span className="flex items-center justify-center text-blue-600 font-bold">
                    {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock data for templates (replace with your actual image names and categories)

// Template data with 2–5 templates per category
const templates = [
  { id: 1, name: "Template1", category: "Professional" },
  { id: 2, name: "Template2", category: "Professional" },
  { id: 3, name: "Template3", category: "Professional" },
  { id: 4, name: "Template4", category: "Modern" },
  { id: 5, name: "Template5", category: "Modern" },
  { id: 6, name: "Template6", category: "Modern" },
  { id: 7, name: "Template7", category: "Modern" },
  { id: 8, name: "Template8", category: "Clean" },
  { id: 9, name: "Template9", category: "Clean" },
  { id: 10, name: "Template10", category: "Industry-Specific" },
  { id: 11, name: "Template11", category: "Industry-Specific" },
  { id: 12, name: "Template12", category: "Educational" },
  { id: 13, name: "Template13", category: "Educational" },
];

export const TemplateShowcase = () => {
  const showcaseRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Professional");

  const categories = [
    "Professional",
    "Modern",
    "Clean",
    "Industry-Specific",
    "Educational",
  ];

  const filteredTemplates = templates.filter(
    (template) => template.category === activeCategory
  );

  return (
    <div
      ref={showcaseRef}
      className="py-12 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-600 font-medium mb-2 block text-xs uppercase tracking-widest">
            Resume Templates
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Build a Standout Resume
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
            Choose from our ATS-friendly, expertly designed templates.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="template-card relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Template Preview */}
              <div className="relative aspect-[2/3] w-full">
                <img
                  src={`/Templates/${template.name}.png`}
                  alt={template.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-3 text-center">
                    <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">
                      {template.name}
                    </h3>
                    <p className="text-xs text-gray-300 mb-2">
                      {template.category}
                    </p>
                    <Link to="/sign-in">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors duration-300">
                        Use Template
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
            <span>View All Templates</span>
            <FaArrowRight className="ml-1.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
export const TestimonialsSection = () => {
  const testimonialsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      gsap.from(testimonialsRef.current.querySelector(".testimonial-content"), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: testimonialsRef }
  );

  return (
    <div ref={testimonialsRef} className="py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have boosted their career
            prospects with our AI resume builder.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-content bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Current testimonial */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 border-2 border-blue-200"></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-6 md:mb-0">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic text-lg">
              "{testimonials[activeIndex].testimonial}"
            </p>

            {/* Navigation */}
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                    activeIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingSection = () => {
  const pricingRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(pricingRef.current.querySelectorAll(".pricing-card"), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: pricingRef }
  );

  return (
    <div ref={pricingRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block text-sm uppercase tracking-wider">
            Flexible Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your career goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.isPopular
                  ? "ring-2 ring-blue-500 transform scale-105"
                  : "hover:shadow-md"
              }`}
            >
              <div className="p-6 bg-gray-50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> / {plan.period}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-colors`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const FAQSection = () => {
  const faqRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useGSAP(
    () => {
      gsap.from(faqRef.current.querySelectorAll(".faq-item"), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: faqRef }
  );

  return (
    <div ref={faqRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold mb-2 block text-sm uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our AI resume builder
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item mb-4 border rounded-lg overflow-hidden ${
                activeFaq === index ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="font-semibold">{item.question}</span>
                <span
                  className={`transform transition-transform ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {activeFaq === index && (
                <div className="p-4 pt-0">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Resume Builder</h3>
            <p className="text-gray-400 mb-4">
              Create ATS-optimized resumes that get results
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Resume Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cover Letter Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  ATS Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AI Resume Builder. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
