import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-1.5   ">
      <header className="shadow-md bg-black  text-[#eae7dc] rounded-sm fixed top-0 left-0 w-[98%] m-[1%] z-100 md:m-[0.5%] md:w-[99%]">
        <nav className="flex justify-between items-center px-6 md:px-12 py-4">
          {/* Logo */}
          <div className="text-3xl font-bold flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="hover:text-stone-400 transition-colors">
                RE-GEN
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {[
                { path: "/", label: "Resume" },
                { path: "/ats-score", label: "ATS Score" },
                { path: "/about-us", label: "About Us" },
              ].map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button className="menu text-[#eae7dc] bg-black hover:bg-black hover:text-[#1d4ed8]  px-5 py-5 rounded-sm transition-all duration-300 cursor-pointer">
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex gap-4">
              <Link to="/sign-in">
                <Button className="border border-[#eae7dc] text-[#eae7dc] hover:bg-[#eae7dc] hover:text-stone-800 px-6 py-5 rounded-lg transition-all duration-300 menu cursor-pointer">
                  Login
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button className="menu bg-[#1d4ed8] text-[#eae7dc] hover:bg-[#1d4ed8] px-6 py-5 rounded-lg transition-all duration-300 cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <TiThMenu
              className="cursor-pointer text-3xl hover:text-stone-400 transition-colors"
              onClick={toggleMenu}
            />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-stone-950 bg-opacity-95 z-50 flex flex-col items-center justify-center gap-6 m-1.5 rounded-md">
              <div className="flex flex-col gap-6 text-center w-10/12">
                {[
                  { path: "/", label: "Resume" },
                  { path: "/ats-score", label: "ATS Score" },
                  { path: "/about-us", label: "About Us" },
                ].map((item) => (
                  <Link key={item.path} to={item.path} onClick={toggleMenu}>
                    <Button className="w-full text-[18px] font-semibold border border-[#eae7dc]  text-[#eae7dc] hover:bg-stone-600 px-6 py-3 rounded-lg  duration-300 h-12  shadow-[4px_4px_0px_0px_#eae7dc] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-opacity-90 ">
                      {item.label}
                    </Button>
                  </Link>
                ))}
                <div className="border-t-[5px]  border-stone-600 pt-6">
                  <Link to="/sign-in" onClick={toggleMenu}>
                    <Button className="w-full font-semibold  border border-[#eae7dc] text-[#eae7dc] shadow-[4px_4px_0px_0px_#eae7dc]  hover:bg-[#eae7dc] hover:text-stone-800  py-3 rounded-lg  duration-300 text-[18px] h-12 px-6 transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-opacity-90">
                      Login
                    </Button>
                  </Link>
                </div>
                <Link to={"/sign-up"} onClick={toggleMenu}>
                  <button
                    type="submit"
                    className="w-full h-12 px-6 bg-[#1d4ed8] text-white font-semibold text-[18px] border-2 border-[#eae7dc] rounded-md shadow-[4px_4px_0px_0px_#eae7dc] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-opacity-90"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
              <FiX
                className="absolute top-6 right-6 text-3xl text-stone-800 font-bold  cursor-pointer hover:text-stone-800 rounded-sm transition-colors bg-[#eae7dc]"
                onClick={toggleMenu}
              />
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default NavbarComponent;
