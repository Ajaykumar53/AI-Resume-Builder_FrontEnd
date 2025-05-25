// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // For dashboard routes, wait for content to load before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 100); // Small delay for layout stabilization

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
