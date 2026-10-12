
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hospital-footer">
      <div className="footer-top-border"></div>

      <div className="footer-main">
        <div className="footer-container footer-grid">

          {/* Hospital Information */}
          <div className="footer-column footer-about">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-icon">✚</span>

              <span>
                <strong>Sri Shakthi</strong>
                <small>HOSPITAL & HEALTHCARE</small>
              </span>
            </Link>

            <p className="footer-description">
              Compassionate care, trusted medical guidance, and
              patient-focused healthcare for you and your family.
            </p>

            <div className="footer-trust-badge">
              <span>✦</span>
              Your Health. Our Priority.
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <span className="footer-heading-line"></span>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctor">Our Doctor</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <span className="footer-heading-line"></span>

            <ul className="footer-links">
              <li><Link to="/services">General Consultation</Link></li>
              <li><Link to="/services">Family Medicine</Link></li>
              <li><Link to="/services">Internal Medicine</Link></li>
              <li><Link to="/services">Preventive Healthcare</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
              <li><Link to="/contact">Contact Hospital</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>
            <span className="footer-heading-line"></span>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">☎</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <div>
                <strong>Email</strong>
                <Link to="/contact">Contact our hospital</Link>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">⌖</span>
              <div>
                <strong>Visit Us</strong>
                <Link to="/contact">View contact details</Link>
              </div>
            </div>

            <Link to="/appointment" className="footer-appointment-btn">
              Book an Appointment <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-content">
          <p>
            © {currentYear} Sri Shakthi Hospital. All rights reserved.
          </p>

          <p className="footer-bottom-tagline">
            <span>Designed with care</span>
            <span className="footer-gold-heart">♥</span>
            <span>For better healthcare</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
