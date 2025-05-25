import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function PageNotFound() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // GSAP Animations
  useGSAP(
    () => {
      // Container fade-in
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Icon and indicator animation
      gsap.from(iconRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Text animation
      gsap.from(textRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });

      // Button animation
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-slate-50/50"></div>

      {/* Decorative floating elements */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-blue-500/5 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-slate-500/5 rounded-full animate-float-slow delay-1000"></div>

      <div ref={containerRef} className="relative z-10 text-center">
        {/* Main 404 icon */}
        <div ref={iconRef} className="mb-8 relative">
          <div className="w-20 h-20 mx-auto bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
            <FileText className="w-10 h-10 text-blue-600 animate-pulse" />
          </div>
          {/* Floating indicator */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-white font-bold text-lg">404</span>
          </div>
        </div>

        {/* Text content */}
        <div ref={textRef} className="mb-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-800">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Sorry, the page you’re looking for isn’t in our resume database.
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Let’s get you back on track to build your perfect resume.
          </p>
        </div>

        {/* Call to action */}
        <div ref={buttonRef}>
          <Link
            to="/user"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}

export default PageNotFound;
