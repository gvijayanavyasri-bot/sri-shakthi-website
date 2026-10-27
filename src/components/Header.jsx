
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Doctor", path: "/about-doctor" },
  { label: "Services", path: "/services" },
  { label: "Hospital", path: "/hospital" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="ss-header">
      <div className="ss-header-inner">
        <Link
          to="/"
          className="ss-header-brand"
          aria-label="Sri Shakthi Hospital home"
          onClick={closeMenu}
        >
          <img
            src="/images/logos.png"
            alt="Logo"
            className="ss-header-logo"
          />

          <span className="ss-header-brand-copy">
            <strong>Sri Shakthi Hospital</strong>
            <span>Listening • Caring • Healing</span>
          </span>
        </Link>

        <button
          type="button"
          className={`ss-header-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="ss-header-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="ss-header-navigation"
          className={`ss-header-navigation ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="ss-header-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `ss-header-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a className="ss-header-call" href="tel:+919494456007">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22 16.9v3a2 2 0 0 1-2.2 2
                19.8 19.8 0 0 1-8.6-3.1
                19.4 19.4 0 0 1-6-6
                19.8 19.8 0 0 1-3.1-8.7
                A2 2 0 0 1 4.1 2h3
                a2 2 0 0 1 2 1.7
                c.1 1 .4 2 .7 2.9
                a2 2 0 0 1-.5 2.1L8 9.9
                a16 16 0 0 0 6 6l1.2-1.3
                a2 2 0 0 1 2.1-.5
                c.9.3 1.9.6 2.9.7
                a2 2 0 0 1 1.8 2.1Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Call Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
