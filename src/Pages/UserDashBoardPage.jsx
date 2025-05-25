import React, { useState, useEffect, useRef } from "react";
import DashboardNavbar from "../DashBoard/Navbar";
import SideBarComponent from "../DashBoard/SideBarComponenet";
import { Outlet, useLocation } from "react-router-dom";

function UserDashBoardPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef(null);
  const location = useLocation(); // 👈 Track route changes

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇 Scroll to top of the scrollable container when route changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <SideBarComponent isMobile={isMobile} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        ref={scrollRef}
        className="flex flex-col flex-1 overflow-y-auto h-screen"
      >
        <DashboardNavbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashBoardPage;
