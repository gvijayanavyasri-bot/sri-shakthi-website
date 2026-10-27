import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Doctor", path: "/about-doctor" },
  { label: "Services", path: "/services" },
  { label: "Hospital", path: "/hospital" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Outpatient Consultation",
  "Inpatient Care",
  "Day Care Services",
  "Diagnostic Laboratory",
  "Emergency Care",
];

export default function Footer() {
  return (
    <footer className="ss-footer">
      <div className="ss-footer-main">
        <div className="ss-footer-container">

          {/* BRAND */}
          <div className="ss-footer-brand-column">
            <Link
              to="/"
              className="ss-footer-brand"
              aria-label="Sri Sakthi Hospital home"
            >
              <img
                src="/images/logos.png"
                alt="Sri Sakthi Hospital Logo"
                className="ss-footer-logo"
                loading="lazy"
              />

              <span className="ss-footer-brand-name">
                Sri Sakthi
                <strong>Hospital</strong>
              </span>
            </Link>

            <p className="ss-footer-tagline">
              Compassion <span>•</span> Excellence <span>•</span> Trust
            </p>

            <p className="ss-footer-description">
              Quality healthcare with a personal touch.
            </p>

            <a
              className="ss-footer-call"
              href="tel:+919494456007"
            >
              <span aria-hidden="true">☎</span>
              <span>9494456007</span>
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="ss-footer-column">
            <h2>Quick Links</h2>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="ss-footer-column">
            <h2>Our Services</h2>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="ss-footer-column ss-footer-contact">
            <h2>Contact Us</h2>

            <a href="tel:+919494456007">
              <span aria-hidden="true">☎</span>
              9494456007
            </a>

            <a href="tel:+918832422189">
              <span aria-hidden="true">☎</span>
              0883-2422189
            </a>

            <a href="mailto:srisakthihospitalrjy@gmail.com">
              <span aria-hidden="true">✉</span>
              srisakthihospitalrjy@gmail.com
            </a>

            <a
              className="ss-footer-address"
              href="https://www.google.com/maps/search/?api=1&query=Sri+Shakthi+Hospital+Tilak+Road+Rajahmundry"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">⌖</span>
              <span>
                79-16-6, Tilak Road,
                Rajahmundry, Andhra Pradesh – 533101
              </span>
            </a>

            <p className="ss-footer-hours">
              <span aria-hidden="true">◷</span>
              9 AM–12:30 PM | 5:30–9 PM
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="ss-footer-bottom">
        <div className="ss-footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Sri Sakthi Hospital.
            All rights reserved.
          </p>

          <p>
            Made with care <span>♥</span> for better health.
          </p>
        </div>
      </div>
    </footer>
  );
}