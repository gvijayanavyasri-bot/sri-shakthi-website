import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctor", path: "/doctor" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>✦ Compassionate Care. Trusted Medicine.</span>
          <span>OPD: Mon–Sat | 9:00 AM–12:30 PM & 5:30–9:00 PM</span>
        </div>
      </div>

      <div className="container navbar">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-icon">✚</span>

          <span className="brand-text">
            <strong>SRI SHAKTHI</strong>
            <small>HOSPITAL & HEALTHCARE</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/appointment"
            className="btn btn-gold nav-appointment"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}