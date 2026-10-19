import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Doctor", "/doctor"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span>
            <span className="status-dot"></span>
            Patient-first care in Rajahmundry
          </span>

          <div className="top-strip-right">
            <span>
              OPD: 9:00 AM–12:30 PM · 5:30 PM–9:00 PM
            </span>

            <a href="tel:9494456007">
              Call: 94944 56007
            </a>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <Link
            to="/"
            className="brand"
            onClick={closeMenu}
            aria-label="Sri Sakthi Hospital home"
          >
            <span className="brand-mark">
              S<span>+</span>
            </span>

            <span className="brand-copy">
              <strong>SRI SAKTHI</strong>
              <small>HOSPITAL & HEALTHCARE</small>
            </span>
          </Link>

          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={`nav-links ${open ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              className="nav-appointment"
              to="/appointment"
              onClick={closeMenu}
            >
              Book a Visit <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}