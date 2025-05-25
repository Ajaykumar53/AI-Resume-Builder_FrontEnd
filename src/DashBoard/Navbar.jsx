// import React from "react";
// import { Button } from "@/components/ui/button";
// import { LuGithub } from "react-icons/lu";
// import { FaUserTie } from "react-icons/fa";
// import { useSelector } from "react-redux";

// function DashboardNavbar() {
//   const { userName } = useSelector((state) => state.userData.user);
//   return (
//     <div className="w-[full]   list-none flex justify-end gap-4  mt-4 mx-2  sticky top-4">
//       <li>
//         <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-medium">
//           {userName[0].toUpperCase()}
//         </div>
//       </li>
//       <li>
//         <Button
//           variant="ghost"
//           className="bg-[#1d4ed8] text-white  hover:bg-[#1d4ed8]"
//         >
//           Contact Us
//         </Button>
//       </li>
//     </div>
//   );
// }

// export default DashboardNavbar;
import React from "react";
import { Button } from "@/components/ui/button";
import { FaUserTie } from "react-icons/fa";
import { useSelector } from "react-redux";

function DashboardNavbar() {
  const { userName } = useSelector((state) => state.userData.user);

  return (
    <nav className="sticky top-0 z-10 w-full   ">
      <div className="max-w-full ">
        <div className="backdrop-blur-sm bg-white/30 dark:bg-black/30 border border-white/50 dark:border-white/20 rounded-[6px] shadow-xs p-3 flex justify-end items-center gap-4 transition-all duration-300 hover:shadow-sm">
          {/* Profile Avatar */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium">
              {userName[0].toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
