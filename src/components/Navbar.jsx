// 

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top information bar */}
      <div className="hospital-topbar">
        <div className="hospital-header-container topbar-content">
          <p>
            <span className="topbar-star">✦</span>
            Trusted Healthcare Since 1995
          </p>

          <a href="tel:+919876543210" className="topbar-phone">
            <span>☎</span> Emergency: +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="hospital-header">
        <div className="hospital-header-container navbar-content">

          {/* Logo */}
          <Link
            to="/"
            className="hospital-brand"
            onClick={closeMenu}
          >
            <div className="brand-icon">✚</div>

            <div className="brand-text">
              <h2>Sri Shakthi</h2>
              <span>HOSPITAL & HEALTHCARE</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <nav className={`hospital-nav ${menuOpen ? "nav-open" : ""}`}>
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
              Doctors
            </NavLink>

            <NavLink to="/facilities" onClick={closeMenu}>
              Facilities
            </NavLink>

            <NavLink to="/gallery" onClick={closeMenu}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <Link
              to="/appointment"
              className="navbar-appointment-btn"
              onClick={closeMenu}
            >
              Book Appointment <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
