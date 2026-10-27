import { useState } from "react";
import "./Contact.css";

const contactDetails = {
  phone: "9494456007",
  landline: "08832422189",
  email: "srisakthihospitalrjy@gmail.com",
  address:
    "79-16-6, Tilak Road, Opposite Lane to Sai Baba Temple, Rajahmundry, Andhra Pradesh - 533101",
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    const emailBody = `
Patient / Enquirer Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:${contactDetails.email}` +
      `?subject=${encodeURIComponent("Website Enquiry - " + formData.subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setStatus(
      "Your email application should open with your enquiry. Please send the email to complete your request."
    );
  };

  return (
    <main className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-decoration contact-decoration-one" />
        <div className="contact-hero-decoration contact-decoration-two" />

        <div className="contact-container contact-hero-content">
          <span className="contact-eyebrow">
            <span className="contact-pulse" />
            WE ARE HERE FOR YOU
          </span>

          <h1>
            Let's Talk About
            <br />
            <span>Your Health.</span>
          </h1>

          <p>
            Your health matters to us. Connect with Sri Sakthi Hospital
            for appointments, medical enquiries, and assistance from our
            caring team.
          </p>

          <div className="contact-hero-actions">
            <a href="#contact-form" className="contact-btn contact-btn-primary">
              Send an Enquiry <span aria-hidden="true">↗</span>
            </a>

            <a
              href={`tel:${contactDetails.phone}`}
              className="contact-btn contact-btn-outline"
            >
              <span aria-hidden="true">☎</span> Call Hospital
            </a>
          </div>

          <div className="contact-trust-note">
            <span className="contact-trust-icon" aria-hidden="true">
              +
            </span>
            <span>Compassionate Care. Personal Attention.</span>
          </div>
        </div>

        <div className="contact-hero-bottom-line" />
      </section>

      {/* INTRODUCTION */}
      <section className="contact-intro">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-label">GET IN TOUCH</span>
            <h2>
              We're Just a <span>Call Away.</span>
            </h2>
            <p>
              Whether you need appointment assistance or have a question,
              we are happy to help you take the next step in your healthcare
              journey.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="contact-cards">
            <article className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>

              <span className="contact-card-label">VISIT OUR HOSPITAL</span>
              <h3>Our Location</h3>
              <p>{contactDetails.address}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sri+Sakthi+Hospital+79-16-6+Tilak+Road+Rajahmundry"
                target="_blank"
                rel="noreferrer"
                className="contact-card-link"
              >
                Get Directions <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="contact-card contact-card-featured">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
                </svg>
              </div>

              <span className="contact-card-label">TALK TO OUR TEAM</span>
              <h3>Phone Number</h3>
              <a
                href={`tel:${contactDetails.phone}`}
                className="contact-detail-link"
              >
                +91 {contactDetails.phone}
              </a>
              <a
                href={`tel:${contactDetails.landline}`}
                className="contact-detail-link"
              >
                0883-2422189
              </a>

              <a
                href={`tel:${contactDetails.phone}`}
                className="contact-card-link"
              >
                Call Us Now <span aria-hidden="true">→</span>
              </a>
            </article>

            <article className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <span className="contact-card-label">WRITE TO US</span>
              <h3>Email Address</h3>
              <a
                href={`mailto:${contactDetails.email}`}
                className="contact-email-link"
              >
                {contactDetails.email}
              </a>
              <p>Send us your questions and enquiries.</p>

              <a
                href={`mailto:${contactDetails.email}`}
                className="contact-card-link"
              >
                Send an Email <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* FORM AND TIMINGS */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-container contact-form-layout">
          <div className="contact-form-info">
            <span className="contact-label">WE'RE LISTENING</span>

            <h2>
              How Can We
              <br />
              <span>Help You?</span>
            </h2>

            <p>
              Have a question or need assistance? Send us your details.
              Our contact information is provided here to help you reach
              the hospital directly.
            </p>

            <div className="contact-timing-card">
              <div className="contact-timing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>

              <div>
                <span className="contact-timing-label">
                  CONSULTATION TIMINGS
                </span>
                <h3>We're Here to Help</h3>
                <p>Morning: 9:00 AM – 12:30 PM</p>
                <p>Evening: 5:30 PM – 9:00 PM</p>
                <span className="contact-timing-note">
                  Walk-in and appointment based
                </span>
              </div>
            </div>

            <div className="contact-emergency-note">
              <span aria-hidden="true">✚</span>
              For medical emergencies, seek immediate emergency care.
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-label">CONTACT US</span>
              <h2>Send Us a Message</h2>
              <p>Fill in the details below to prepare your enquiry.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-input-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="contact-input-row">
                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    maxLength={254}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">Enquiry Type</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option>General Enquiry</option>
                    <option>Appointment Request</option>
                    <option>Consultation Information</option>
                    <option>Hospital Facilities</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="How can we assist you?"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  maxLength={2000}
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Prepare Enquiry Email <span aria-hidden="true">↗</span>
              </button>

              {status && (
                <p className="contact-form-status" role="status">
                  {status}
                </p>
              )}

              <p className="contact-form-disclaimer">
                This form opens your email application. Your enquiry is not
                sent automatically from this website.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-map-heading">
            <div>
              <span className="contact-label">FIND US</span>
              <h2>Visit Sri Sakthi Hospital</h2>
              <p>
                Find us on Tilak Road, Rajahmundry, Andhra Pradesh.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Sakthi+Hospital+79-16-6+Tilak+Road+Rajahmundry"
              target="_blank"
              rel="noreferrer"
              className="contact-map-btn"
            >
              Open in Maps <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-map-frame">
            <iframe
              title="Map showing Sri Sakthi Hospital in Rajahmundry"
              src="https://maps.google.com/maps?q=Sri%20Sakthi%20Hospital%2C%20Tilak%20Road%2C%20Rajahmundry&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="contact-map-address">
            <span className="contact-map-pin" aria-hidden="true">
              ◎
            </span>
            <p>{contactDetails.address}</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="contact-cta">
        <div className="contact-container contact-cta-inner">
          <div>
            <span>YOUR HEALTH. OUR PRIORITY.</span>
            <h2>We're Here When You Need Us.</h2>
            <p>
              Connect with Sri Sakthi Hospital for assistance and
              appointment enquiries.
            </p>
          </div>

          <a
            href={`tel:${contactDetails.phone}`}
            className="contact-cta-btn"
          >
            <span aria-hidden="true">☎</span> Call 9494456007
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;