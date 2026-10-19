
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  // Automatically scroll to the top when the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // Show or hide buttons depending on the scroll position
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      setShowTop(scrollPosition > 300);

      setShowBottom(
        scrollPosition + windowHeight < pageHeight - 100
      );
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-controls">
      {showTop && (
        <button
          className="scroll-btn scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ↑
        </button>
      )}

      {showBottom && (
        <button
          className="scroll-btn scroll-bottom"
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
          title="Scroll to bottom"
        >
          ↓
        </button>
      )}
    </div>
  );
}
