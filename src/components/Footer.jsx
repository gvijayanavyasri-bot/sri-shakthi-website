
import { Link } from "react-router-dom";
import "./Footer.css";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Our Doctor", path: "/doctor" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "General Medicine",
  "Outpatient Consultation",
  "Inpatient Care",
  "Emergency Assistance",
  "Diagnostic Services",
  "IV Therapy & Nebulization",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hospital-footer">
      {/* Appointment call-to-action */}
      <div className="footer-cta-wrapper">
        <div className="footer-container">
          <div className="footer-cta">
            <div className="footer-cta-icon">✚</div>

            <div className="footer-cta-text">
              <span>YOUR HEALTH MATTERS</span>
              <h2>Need Medical Attention?</h2>
              <p>
                Contact Sri Sakthi Hospital for consultation and
                appointment enquiries.
              </p>
            </div>

            <Link to="/appointment" className="footer-cta-button">
              Request Appointment <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Hospital details */}
            <div className="footer-about">
              <Link to="/" className="footer-brand">
                <span className="footer-brand-icon">✚</span>

                <span className="footer-brand-text">
                  <strong>SRI SAKTHI</strong>
                  <small>HOSPITAL</small>
                </span>
              </Link>

              <p className="footer-about-description">
                Your health. Our commitment. We believe in providing
                thoughtful medical care with compassion, respect,
                and personal attention.
              </p>

              <div className="footer-trust-label">
                <span>✦</span>
                CARE WITH COMPASSION
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-column">
              <h3>Quick Links</h3>

              <span className="footer-heading-line"></span>

              <ul>
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <span>›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h3>Our Services</h3>

              <span className="footer-heading-line"></span>

              <ul>
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services">
                      <span>›</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="footer-column footer-contact-column">
              <h3>Contact Us</h3>

              <span className="footer-heading-line"></span>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">⌖</span>

                <div>
                  <strong>Hospital Address</strong>
                  <p>
                    79-16-6, Tilak Road,
                    <br />
                    Opposite lane to Sai Baba Temple,
                    <br />
                    Rajahmundry, Andhra Pradesh 533101.
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">☎</span>

                <div>
                  <strong>Phone Number</strong>
                  <a href="tel:9494456007">9494456007</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <span className="footer-contact-icon">◷</span>

                <div>
                  <strong>Consultation Hours</strong>
                  <p>Monday – Saturday</p>
                  <p>9:00 AM – 12:30 PM</p>
                  <p>5:30 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="footer-bottom">
            <p>
              © {currentYear} <strong>Sri Sakthi Hospital.</strong>{" "}
              All rights reserved.
            </p>

            <div className="footer-bottom-links">
              <Link to="/contact">Contact</Link>
              <span>•</span>
              <Link to="/appointment">Appointments</Link>
            </div>

            <a className="footer-back-top" href="#top">
              Back to top <span>↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

