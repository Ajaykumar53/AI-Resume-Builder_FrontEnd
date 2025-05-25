// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setFontSize } from "../store/CustomFonts";

// const FontSizeSelector = () => {
//   const [selectedSize, setSelectedSize] = useState("md");
//   const [isOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch();

//   const sizes = [
//     { label: "XS", value: "10px" },
//     { label: "SM", value: "11px" },
//     { label: "MD", value: "12px" },
//     { label: "LG", value: "13px" },
//     { label: "XL", value: "14px" },
//   ];

//   const handleSizeChange = (size) => {
//     setSelectedSize(size.label);
//     document.documentElement.style.setProperty(
//       "--resume-font-size",
//       size.value
//     );
//     dispatch(setFontSize(size.value));
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex flex-col gap-2 w-full max-w-xs">
//       {/* Label */}
//       <label htmlFor="FontSize" className="text-md font-medium text-gray-900">
//         Adjust Font Size
//       </label>

//       {/* Custom Dropdown */}
//       <div className="relative">
//         <button
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center justify-between w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out"
//         >
//           <span className="font-medium">{selectedSize}</span>
//           <svg
//             className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
//               isOpen ? "rotate-180" : ""
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {isOpen && (
//           <ul className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[200px] overflow-auto animate-fadeIn hide-scrollbar ">
//             {sizes.map((size) => (
//               <li
//                 key={size.label}
//                 onClick={() => handleSizeChange(size)}
//                 className={`px-4 py-3 text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 text-sm  ease-in-out ${
//                   selectedSize === size.label
//                     ? "bg-blue-50 text-blue-700 font-medium"
//                     : ""
//                 }`}
//               >
//                 <div className="flex justify-between items-center">
//                   <span>{size.label}</span>
//                   <span className="text-sm text-gray-500">{size.value}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FontSizeSelector;

// components/FontSizeSelector.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize } from "../store/CustomFonts";

const FontSizeSelector = () => {
  const dispatch = useDispatch();

  const fontSizeOptions = {
    XS: {
      name: "22px",
      heading: "16px",
      subheading: "14px",
      body: "10px",
      label: "9px",
    },
    SM: {
      name: "24px",
      heading: "17px",
      subheading: "15px",
      body: "11px",
      label: "9.5px",
    },
    MD: {
      name: "26px",
      heading: "18px",
      subheading: "16px",
      body: "12px",
      label: "10px",
    },
    LG: {
      name: "28px",
      heading: "19px",
      subheading: "17px",
      body: "13px",
      label: "11px",
    },
    XL: {
      name: "30px",
      heading: "20px",
      subheading: "18px",
      body: "14px",
      label: "12px",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("MD");

  const options = ["XS", "SM", "MD", "LG", "XL"];

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      <label htmlFor="FontSize" className="text-md font-medium text-gray-900">
        Adjust Font Size
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-[90vw] md:w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
        >
          <span className="font-medium">{selectedLabel}</span>
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
          <ul className="absolute z-50 w-[90vw] md:w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-[185px] overflow-auto hide-scrollbar">
            {options.map((sizeKey) => (
              <li
                key={sizeKey}
                onClick={() => {
                  dispatch(setFontSize(sizeKey));
                  setSelectedLabel(sizeKey);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 text-gray-800 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 text-sm ${
                  selectedLabel === sizeKey
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{sizeKey}</span>
                  <span className="text-sm text-gray-500">
                    {fontSizeOptions[sizeKey].body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FontSizeSelector;
