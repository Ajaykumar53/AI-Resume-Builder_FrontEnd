// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import templates from "../ResumeTemplates/Templates";
// import ResumeDialog from "../components/TemplatesDialog";

// gsap.registerPlugin(ScrollTrigger);

// function TemplatesPage() {
//   const templatesRef = useRef(null);

//   // GSAP Animation for template cards (optimized for mobile)
//   useGSAP(
//     () => {
//       gsap.from(templatesRef.current.querySelectorAll(".template-card"), {
//         opacity: 0,
//         y: 50,
//         scale: 0.9,
//         stagger: 0.3,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: templatesRef.current,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none none",
//         },
//       });
//     },
//     { scope: templatesRef }
//   );

//   return (
//     <div className="bg-gray-50 py-16 md:py-28 min-h-screen">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16">
//         {/* Header */}
//         <div className="text-center mb-16 md:mb-28">
//           <span className="text-blue-600 font-semibold mb-4 block text-sm uppercase tracking-widest">
//             Explore Templates
//           </span>
//           <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-6">
//             Craft Your Perfect Resume
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Choose from our ATS-optimized, professionally curated templates to
//             create a resume that stands out in your industry.
//           </p>
//         </div>

//         {/* Templates Grid */}
//         <div
//           ref={templatesRef}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-14"
//         >
//           {templates.map((temp) => (
//             <div
//               key={temp.id}
//               className="template-card relative bg-white rounded-2xl shadow-lg md:shadow-xl overflow-hidden border-2 border-transparent bg-gradient-to-r from-blue-100 via-gray-100 to-blue-100 p-0.5 transform transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3"
//             >
//               {/* Inner Card to Maintain White Background */}
//               <div className="relative rounded-2xl bg-white overflow-hidden">
//                 {/* Template Preview Image */}
//                 <div className="relative">
//                   <img
//                     src={`/Templates/${temp.component}.png`}
//                     alt={temp.component}
//                     className="object-cover rounded-t-2xl"
//                   />
//                   {/* Template Info Overlay (Always Visible) */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4 md:p-6">
//                     <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 text-center">
//                       {temp.component}
//                     </h3>
//                     <p className="text-xs md:text-sm text-gray-200 text-center mb-3 md:mb-4">
//                       {temp.layout === "single-column"
//                         ? "Single-Column ATS-Optimized"
//                         : "Modern Multi-Column Design"}
//                     </p>
//                     <div className="flex justify-center w-full">
//                       <ResumeDialog
//                         Template={temp.component}
//                         layout={temp.layout}
//                         Style="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in flex justify-center items-center text-xs md:text-sm font-semibold gap-2 cursor-pointer px-4 md:px-6 py-2 md:py-2.5 w-4/5 md:w-3/4 shadow-md hover:shadow-lg"
//                         isOpen={true}
//                         iconStyle="text-base md:text-lg"
//                         width="w-full"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TemplatesPage;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import templates from "../ResumeTemplates/Templates";
import ResumeDialog from "../components/TemplatesDialog";

gsap.registerPlugin(ScrollTrigger);

function TemplatesPage() {
  const templatesRef = useRef(null);

  return (
    <div className="bg-white py-12 md:py-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-blue-600 font-semibold mb-3 block text-xs md:text-sm uppercase tracking-widest">
            Resume Templates
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-4 md:mb-6">
            Build Your Standout Resume
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Select from our ATS-optimized, professionally designed templates to
            create a resume that shines in your industry.
          </p>
        </div>

        {/* Templates Grid */}
        <div
          ref={templatesRef}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10"
        >
          {templates.map((temp) => (
            <div
              key={temp.id}
              className="template-card relative bg-white rounded-xl shadow-md md:shadow-lg overflow-hidden border-2 border-transparent bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50 p-0.5 transform transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2"
            >
              {/* Inner Card */}
              <div className="relative rounded-xl bg-white overflow-hidden">
                {/* Template Preview Image */}
                <div className="relative aspect-[2/3] w-full">
                  <img
                    src={`/Templates/${temp.component}.png`}
                    alt={temp.component}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  {/* Template Info Overlay (Always Visible) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-2 sm:p-3 md:p-5">
                    <h3 className="text-xs sm:text-base md:text-lg font-bold text-white mb-1 md:mb-2 text-center">
                      {temp.component}
                    </h3>
                    <p className="text-xs text-gray-200 text-center mb-1 sm:mb-2 md:mb-3">
                      {temp.layout === "single-column"
                        ? "Single-Column ATS-Optimized"
                        : "Modern Multi-Column Design"}
                    </p>
                    <div className="flex justify-center w-full">
                      <ResumeDialog
                        Template={temp.component}
                        layout={temp.layout}
                        Style="bg-[#1d4ed8] text-white rounded-md hover:bg-blue-600 transition-all duration-300 ease-in flex justify-center items-center text-xs md:text-sm font-semibold gap-2 cursor-pointer px-3 md:px-5 py-1.5 sm:py-2 w-11/12 md:w-4.5/5 shadow-md hover:shadow-lg"
                        isOpen={true}
                        iconStyle="text-base md:text-lg"
                        width="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplatesPage;
