import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctor" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="hospital-header">
      {/* TOP CONTACT BAR */}
      <div className="hospital-topbar">
        <div className="hospital-container hospital-topbar-inner">
          <div className="topbar-item topbar-address">
            <span className="topbar-icon">✦</span>
            <span>Tilak Road, Rajahmundry, Andhra Pradesh</span>
          </div>

          <div className="topbar-item topbar-phones">
            <a href="tel:9494456007">
              ☎ 94944 56007
            </a>

            <span className="topbar-divider">|</span>

            <a href="tel:08832422189">
              0883-2422189
            </a>
          </div>

          <div className="topbar-item topbar-hours">
            <span>◷</span>
            <span>
              Mon–Sat: 9:00 AM–12:30 PM · 5:30 PM–9:00 PM
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="hospital-navbar">
        <div className="hospital-container hospital-navbar-inner">

          {/* LOGO */}
          <Link
            to="/"
            className="hospital-brand"
            onClick={closeMenu}
            aria-label="Sri Shakthi Hospital home"
          >
            <div className="hospital-logo-symbol">
              <span>✚</span>
            </div>

            <div className="hospital-brand-text">
              <span className="brand-name">SRI SHAKTHI</span>
              <span className="brand-hospital">HOSPITAL</span>
              <span className="brand-tagline">
                Care Today · Healthier Tomorrow
              </span>
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`hospital-menu-toggle ${
              menuOpen ? "menu-active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="hospital-navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAVIGATION LINKS */}
          <nav
            id="hospital-navigation"
            className={`hospital-navigation ${
              menuOpen ? "navigation-open" : ""
            }`}
          >
            <div className="hospital-nav-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `hospital-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* APPOINTMENT BUTTON */}
            <Link
              to="/appointment"
              className="hospital-appointment-button"
              onClick={closeMenu}
            >
              <span className="appointment-icon">▣</span>
              <span>Book Appointment</span>
              <span className="appointment-arrow">↗</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;