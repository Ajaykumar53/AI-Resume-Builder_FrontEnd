// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setFontFamily } from "../store/CustomFonts";

// const CustomFontSelector = () => {
//   const [selectedFont, setSelectedFont] = useState("Poppins");
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();

//   const fonts = [
//     {
//       name: "Urbanist",
//       link: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap",
//     },
//     {
//       name: "Poppins",
//       link: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
//     },
//     {
//       name: "Roboto",
//       link: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
//     },
//     {
//       name: "Montserrat",
//       link: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
//     },
//     {
//       name: "Lato",
//       link: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
//     },
//     {
//       name: "Inter",
//       link: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
//     },
//     {
//       name: "Open Sans",
//       link: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
//     },
//     {
//       name: "Source Sans Pro",
//       link: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap",
//     },
//     {
//       name: "Nunito",
//       link: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
//     },
//     {
//       name: "Work Sans",
//       link: "https://fonts.googleapis.com/css2?family=Work+Sans&display=swap",
//     },
//     {
//       name: "Raleway",
//       link: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
//     },
//     {
//       name: "Ubuntu",
//       link: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap",
//     },
//     {
//       name: "Mulish",
//       link: "https://fonts.googleapis.com/css2?family=Mulish&display=swap",
//     },
//     {
//       name: "DM Sans",
//       link: "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap",
//     },
//     {
//       name: "Noto Sans",
//       link: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
//     },
//   ];

//   const handleSelect = (font) => {
//     setSelectedFont(font.name);
//     setIsOpen(false);

//     const link = document.createElement("link");
//     link.href = font.link;
//     link.rel = "stylesheet";
//     document.head.appendChild(link);

//     document.documentElement.style.setProperty(
//       "--resume-font-family",
//       font.name
//     );

//     dispatch(setFontFamily({ name: font.name, link: font.link }));
//   };

//   return (
//     <div className="flex flex-col gap-2 w-full max-w-xs">
//       {/* Label */}
//       <label htmlFor="Font" className="text-xl font-medium text-stone-700">
//         Select Font
//       </label>

//       {/* Custom Dropdown */}
//       <div className="relative">
//         <button
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           className="block w-full px-4 py-2 text-stone-900 bg-white border border-stone-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition duration-150 ease-in-out"
//         >
//           {selectedFont}
//           <span className="absolute inset-y-0 right-0 flex items-center pr-2">
//             <svg
//               className="w-5 h-5 text-stone-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </span>
//         </button>

//         {isOpen && (
//           <ul className="absolute z-10 w-full mt-1 bg-white border border-stone-300 rounded-md shadow-lg max-h-60 overflow-auto">
//             {fonts.map((font) => (
//               <li
//                 key={font.name}
//                 onClick={() => handleSelect(font)}
//                 className="px-4 py-2 text-stone-900 cursor-pointer hover:bg-stone-800 hover:text-white transition duration-150 ease-in-out"
//                 style={{ fontFamily: font.name }}
//               >
//                 {font.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomFontSelector;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFontFamily } from "../store/CustomFonts";

const CustomFontSelector = () => {
  const [selectedFont, setSelectedFont] = useState("Poppins");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const fonts = [
    {
      name: "Urbanist",
      link: "https://fonts.googleapis.com/css2?family=Urbanist :wght@400;500;600;700&display=swap",
    },
    {
      name: "Poppins",
      link: "https://fonts.googleapis.com/css2?family=Poppins&display=swap ",
    },
    {
      name: "Roboto",
      link: "https://fonts.googleapis.com/css2?family=Roboto&display=swap ",
    },
    {
      name: "Montserrat",
      link: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap ",
    },
    {
      name: "Inter",
      link: "https://fonts.googleapis.com/css2?family=Inter&display=swap ",
    },
    {
      name: "Open Sans",
      link: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap ",
    },
    {
      name: "Lato",
      link: "https://fonts.googleapis.com/css2?family=Lato&display=swap ",
    },
    {
      name: "Nunito",
      link: "https://fonts.googleapis.com/css2?family=Nunito&display=swap ",
    },
    {
      name: "Work Sans",
      link: "https://fonts.googleapis.com/css2?family=Work+Sans&display=swap ",
    },
    {
      name: "Raleway",
      link: "https://fonts.googleapis.com/css2?family=Raleway&display=swap ",
    },
    {
      name: "Mulish",
      link: "https://fonts.googleapis.com/css2?family=Mulish&display=swap ",
    },
    {
      name: "DM Sans",
      link: "https://fonts.googleapis.com/css2?family=DM+Sans&display=swap ",
    },
    {
      name: "Noto Sans",
      link: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap ",
    },

    // New Additions
    {
      name: "Manrope",
      link: "https://fonts.googleapis.com/css2?family=Manrope&display=swap ",
    },
    {
      name: "Outfit",
      link: "https://fonts.googleapis.com/css2?family=Outfit&display=swap ",
    },
    {
      name: "Figtree",
      link: "https://fonts.googleapis.com/css2?family=Figtree&display=swap ",
    },
    {
      name: "Karla",
      link: "https://fonts.googleapis.com/css2?family=Karla&display=swap ",
    },
    {
      name: "Rubik",
      link: "https://fonts.googleapis.com/css2?family=Rubik&display=swap ",
    },
    {
      name: "Lora",
      link: "https://fonts.googleapis.com/css2?family=Lora&display=swap ",
    },
  ];

  const handleSelect = (font) => {
    setSelectedFont(font.name);
    setIsOpen(false);

    const link = document.createElement("link");
    link.href = font.link;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    dispatch(setFontFamily({ name: font.name, link: font.link }));
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      {/* Label */}
      <label htmlFor="Font" className="text-md font-medium text-gray-900">
        Font Family
      </label>

      {/* Custom Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[90vw] md:w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out"
          style={{ fontFamily: selectedFont }}
        >
          <span className="text-sm truncate">{selectedFont}</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute z-50 w-[90vw] md:w-full    mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[200px] overflow-auto animate-fadeIn hide-scrollbar">
            {fonts.map((font) => (
              <li
                key={font.name}
                onClick={() => handleSelect(font)}
                className={`px-4 py-3 text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 ease-in-out text-sm ${
                  selectedFont === font.name ? "bg-blue-50 text-blue-700" : ""
                }`}
                style={{ fontFamily: font.name }}
              >
                {font.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomFontSelector;
