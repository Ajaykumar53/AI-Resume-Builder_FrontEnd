import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  RiRobotLine,
  RiBarChartBoxLine,
  RiBriefcaseLine,
  RiTimeLine,
  RiArrowRightLine,
  RiCheckDoubleLine,
  RiCodeLine,
  RiUserStarLine,
} from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Animate sections on scroll
    sectionRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate features with stagger effect
    gsap.fromTo(
      ".feature-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#features-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate team member
    gsap.fromTo(
      ".team-member",
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-member",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="relative bg-gradient-to-r from-[#1d4ed8]/10 to-gray-100 py-24 md:py-36 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="#1d4ed8" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Transform Your Career with AI Resume Builder
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Create ATS-optimized, professional resumes in minutes using
              cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/user/templates"
                className="inline-flex items-center bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#1e40af] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 group"
              >
                Build Your Resume Now
                <RiArrowRightLine className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        id="my-story"
        className="py-16 max-w-6xl mx-auto px-5 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              My Story
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              I’m Ajay Parmar, a student passionate about AI and web
              development. I created AI Resume Builder as a personal project to
              solve a problem I saw among my peers: crafting a professional
              resume is tough, especially when you’re juggling studies and job
              applications.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4">
              As a student, I wanted to build a tool that makes resume creation
              fast, simple, and effective. Using AI, I designed this platform to
              generate ATS-optimized resumes that help job seekers stand out
              without needing design skills or hours of effort.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              This project is my way of learning, experimenting, and
              contributing to the community. I’m excited to share it as part of
              my portfolio and hope it helps you land your dream job!
            </p>
          </div>
          <div className="md:col-span-2 bg-gradient-to-br from-[#1d4ed8]/10 to-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <RiRobotLine className="w-5 h-5 text-[#1d4ed8] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">AI-Driven:</span> Built with
                  AI to optimize resumes for ATS and recruiters.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <RiCodeLine className="w-5 h-5 text-[#1d4ed8] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Student Project:</span> A
                  showcase of my skills in React, Node.js, and AI.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <RiUserStarLine className="w-5 h-5 text-[#1d4ed8] mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">For Job Seekers:</span>{" "}
                  Designed to help students and professionals alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        id="features-section"
        className="bg-gray-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why We Stand Out
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with
              expert design to create resumes that open doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <RiRobotLine className="w-6 h-6 text-[#1d4ed8]" />,
                title: "AI Precision",
                description:
                  "Our AI tailors resumes to your industry, ensuring every word counts.",
              },
              {
                icon: <RiBarChartBoxLine className="w-6 h-6 text-[#1d4ed8]" />,
                title: "ATS Mastery",
                description:
                  "Pass applicant tracking systems with keyword-optimized content.",
              },
              {
                icon: <RiBriefcaseLine className="w-6 h-6 text-[#1d4ed8]" />,
                title: "Elegant Templates",
                description:
                  "Choose from 100+ sleek, professional designs for any role.",
              },
              {
                icon: <RiTimeLine className="w-6 h-6 text-[#1d4ed8]" />,
                title: "Fast & Easy",
                description:
                  "Build a job-ready resume in minutes, no design skills needed.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-2 bg-[#1d4ed8]/10 rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className="bg-gradient-to-r from-[#1d4ed8] to-[#1e40af] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Start Your Career Journey Today
          </h2>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Create a resume that opens doors to your dream job with AI Resume
            Builder.
          </p>

          <Link
            to="/user/templates"
            className="inline-flex items-center bg-white text-[#1d4ed8] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 group"
          >
            Get Started Now
            <RiArrowRightLine className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="mt-6 text-gray-200 text-sm">
            No credit card required. 100% satisfaction guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
