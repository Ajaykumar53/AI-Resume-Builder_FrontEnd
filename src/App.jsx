import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <div className="bg-[#eae7dc] custom-cursor">
        <NavbarComponent className="-z-10" />
        <ScrollToTop />
        <Outlet />
      </div>
    </>
  );
}

export default App;
