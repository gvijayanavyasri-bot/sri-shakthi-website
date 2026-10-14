import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">✚</span>

            <span className="brand-text">
              <strong>SRI SHAKTHI</strong>
              <small>HOSPITAL & HEALTHCARE</small>
            </span>
          </Link>

          <p>
            Dedicated to compassionate healthcare, personalised medical
            attention, and the wellbeing of every patient.
          </p>

          <span className="footer-highlight">
            Your Health. Our Commitment.
          </span>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Hospital</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/doctor">Our Doctor</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3>Patient Care</h3>
          <ul className="footer-links">
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Family Medicine</li>
            <li>General Consultation</li>
            <li>Preventive Healthcare</li>
          </ul>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>📍 Sri Shakthi Hospital</p>
          <p>🕒 Monday–Saturday</p>
          <p>Morning: 9:00 AM–12:30 PM</p>
          <p>Evening: 5:30 PM–9:00 PM</p>
          <p className="footer-note">
            Please confirm contact details and consultation timings before
            publishing this website.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Sri Shakthi Hospital. All rights
            reserved.
          </p>

          <p>Compassion • Care • Commitment</p>
        </div>
      </div>
    </footer>
  );
}