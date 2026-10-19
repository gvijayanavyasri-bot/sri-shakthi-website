import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let previousScroll = window.scrollY;

    function handleScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll < 100) {
        setShowHeader(true);
      } else if (currentScroll < previousScroll) {
        // Show header when scrolling upward
        setShowHeader(true);
      } else if (currentScroll > previousScroll) {
        // Hide header when scrolling downward
        setShowHeader(false);
      }

      previousScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`hospital-header ${showHeader ? "header-visible" : "header-hidden"}`}
    >
      {/* Top Information Bar */}
      <div className="hospital-topbar">
        <span className="topbar-plus">✚</span>
        <span>Compassionate Care. Trusted Healthcare.</span>
      </div>

      {/* Main Header */}
      <div className="hospital-navbar">
        <Link to="/" className="hospital-brand" onClick={closeMenu}>
          <div className="hospital-logo">
            <span>✚</span>
          </div>

          <div className="hospital-brand-text">
            <h1>SRI SAKTHI</h1>
            <h2>H O S P I T A L</h2>
            <p>CARE WITH COMPASSION</p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`hospital-navigation ${menuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/doctor" onClick={closeMenu}>
            Doctor
          </NavLink>

          <NavLink to="/facilities" onClick={closeMenu}>
            Facilities
          </NavLink>

          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>

          <NavLink to="/appointment" onClick={closeMenu}>
            Appointment
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}