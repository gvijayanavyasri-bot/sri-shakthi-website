import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="hospital-footer">
      <div className="hospital-footer-main">
        <div className="hospital-footer-container">

          {/* ABOUT */}
          <div className="footer-column footer-about">
            <Link to="/" className="footer-brand">
              <span className="footer-logo">✚</span>

              <span className="footer-brand-text">
                <strong>SRI SHAKTHI</strong>
                <span>HOSPITAL</span>
              </span>
            </Link>

            <p>
              Compassionate care, trusted medicine, and personalised
              healthcare for every patient. We are committed to helping
              our community live healthier lives.
            </p>

            <div className="footer-tagline">
              Listening · Caring · Healing
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/doctor">Our Doctor</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              <li><Link to="/services">General Consultation</Link></li>
              <li><Link to="/services">Inpatient Care</Link></li>
              <li><Link to="/services">Day Care Services</Link></li>
              <li><Link to="/services">Diagnostic Laboratory</Link></li>
              <li><Link to="/services">IV Therapy</Link></li>
              <li><Link to="/services">Emergency Care</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Contact Information</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">⌖</span>
              <p>
                79-16-6, Tilak Road,
                <br />
                Opposite Lane to Sai Baba Temple,
                <br />
                Rajahmundry, Andhra Pradesh – 533101
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">☎</span>
              <p>
                <a href="tel:9494456007">9494456007</a>
                <br />
                <a href="tel:08832422189">0883-2422189</a>
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉</span>
              <p>
                <a href="mailto:srisakthihospitalrjy@gmail.com">
                  srisakthihospitalrjy@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONSULTATION HOURS */}
      <div className="footer-hours">
        <div className="hospital-footer-container footer-hours-inner">
          <div>
            <span className="footer-hours-icon">◷</span>
            <strong>Consultation Hours</strong>
          </div>

          <p>
            Monday–Saturday: 9:00 AM–12:30 PM | 5:30 PM–9:00 PM
          </p>

          <Link to="/appointment" className="footer-appointment">
            Book Appointment ↗
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <div className="hospital-footer-container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Sri Shakthi Hospital.
            All rights reserved.
          </p>

          <p className="footer-bottom-message">
            Listening · Caring · Healing
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;