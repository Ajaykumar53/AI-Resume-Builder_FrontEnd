import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdContactPage, MdFindInPage } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import { Button } from "@/components/ui/button";
import ResumeDialog from "./ResumeDilog";

function SideBarComponent() {
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const isActive = (routes) => {
    if (Array.isArray(routes)) {
      return routes.some((r) => path === r);
    }
    return path === routes;
  };
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "GET",
        credentials: "include", // Critical for sending cookies
      });
      // No need to manually remove token from localStorage if using cookies
      navigate("/sign-in");
    } catch (error) {}
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0  backdrop-blur-xs z-20 transition-opacity duration-500"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Toggle button for mobile when closed */}
      {isMobile && !isOpen && (
        <div
          className="fixed top-2 left-0 z-30  text-stone-800 p-3 rounded-full cursor-pointer "
          onClick={toggleSidebar}
        >
          <TbLayoutSidebarLeftExpandFilled className="text-2xl" />
        </div>
      )}

      <div
        className={`${
          isMobile
            ? `fixed top-0 left-0 h-full z-30 transition-transform duration-300 ${
                isOpen ? "translate-x-0 w-[50vw]" : "-translate-x-full w-0"
              }`
            : `sticky top-0 h-screen ${
                isOpen ? "md:w-2/12 w-[50vw]" : "md:w-[70px] w-[70px]"
              }`
        } bg-stone-950 text-white p-3 flex flex-col justify-between overflow-hidden  shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col h-full pl-1.5">
          {/* Header */}
          <div
            className={`flex justify-between items-center text-2xl font-extrabold py-3 ${
              isOpen ? "border-b-2" : ""
            } border-white my-3 `}
          >
            {isOpen ? "RE-GEN" : ""}
            <span onClick={toggleSidebar} className="cursor-pointer text-2xl  ">
              {isOpen ? (
                <TbLayoutSidebarLeftCollapseFilled />
              ) : (
                <TbLayoutSidebarLeftExpandFilled />
              )}
            </span>
          </div>

          {/* Navigation */}
          <ul className="flex flex-col gap-3 flex-grow">
            <SidebarLink
              to="/user"
              icon={<MdContactPage className="hover:scale-95" />}
              label="Resume"
              active={isActive(["/user", "/user/resume"])}
              isOpen={isOpen}
            />
            <SidebarLink
              to="/user/templates"
              icon={<HiTemplate className="hover:scale-95" />}
              label="Templates"
              active={isActive("/user/templates")}
              isOpen={isOpen}
            />
            <SidebarLink
              to="/user/ats-score"
              icon={<MdFindInPage className="hover:scale-95" />}
              label="ATS Score"
              active={isActive("/user/ats-score")}
              isOpen={isOpen}
            />
          </ul>

          {/* Logout */}
          <div>
            <Button
              variant="ghost"
              className="bg-[#1d4ed8]  hover:scale-105 transition-all w-full py-5 text-[14px] cursor-pointer"
              onClick={handleLogout}
              asChild
            >
              <div className="flex items-center justify-center gap-3">
                <BiLogOut className="text-md" />
                {isOpen && "Logout"}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarLink({ to, icon, label, active, isOpen }) {
  return (
    <Link to={to} className="flex items-center gap-3 group transition-all">
      <div
        className={`p-1.5 rounded-[4px] text-2xl ${
          active ? "text-[#1d4ed8]" : "text-stone-800"
        } bg-[white] group-hover:scale-105 transition-transform`}
      >
        {icon}
      </div>
      {isOpen && (
        <span
          className={`w-full py-1.5 px-4 rounded-[4px] font-medium text-[14px] ${
            active
              ? "bg-white text-stone-800"
              : "text-white hover:bg-white hover:text-stone-800"
          }`}
        >
          {label}
        </span>
      )}
    </Link>
  );
}

export default SideBarComponent;
