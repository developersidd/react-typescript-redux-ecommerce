import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <div onClick={scrollTop} className="bg-orange-500 cursor-pointer p-3 h-12 w-12 rounded-full text-white shadow-lg fixed top-[85%] right-4 z-[999999]">

          <FaAngleDoubleUp
            className="w-6 h-6"
            
          />
          <span className="animate-ping absolute top-0 right-0 inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;