
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const hospitalImages = {
  hero: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=90",

  // A more relevant healthcare consultation image
  welcome:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=90",

  doctor:
    "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg",
};

const services = [
  {
    number: "01",
    icon: "✚",
    title: "General Consultation",
    description:
      "Medical assessment, health advice, and personalised guidance for everyday health concerns.",
  },
  {
    number: "02",
    icon: "♡",
    title: "Internal Medicine",
    description:
      "Evaluation and ongoing management of common adult medical conditions.",
  },
  {
    number: "03",
    icon: "✳",
    title: "Preventive Healthcare",
    description:
      "Routine health assessments and guidance to support healthier lifestyle choices.",
  },
  {
    number: "04",
    icon: "⌂",
    title: "Family Healthcare",
    description:
      "Considerate medical attention focused on individual needs and family wellbeing.",
  },
];

const benefits = [
  "Personalised attention",
  "Clear medical guidance",
  "Patient-first approach",
  "Focus on wellbeing",
];

export default function Home() {
  return (
    <main className="hospital-home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <img
          className="hero-background"
          src={hospitalImages.hero}
          alt="Modern healthcare facility"
          fetchPriority="high"
        />

        <div className="hero-overlay" />

        <div className="home-container hero-content">
          <div className="home-eyebrow light-eyebrow">
            <span className="eyebrow-line" />
            WELCOME TO SRI SHAKTHI HOSPITAL
          </div>

          <h1>
            Compassionate Care.
            <span>Trusted Medicine.</span>
          </h1>

          <p className="hero-description">
            Your health deserves attention, understanding, and care.
            We are committed to a patient-focused approach that values
            compassion, clear communication, and professional medical guidance.
          </p>

          <div className="hero-actions">
            <Link to="/appointment" className="home-btn gold-btn">
              Book an Appointment <span>↗</span>
            </Link>

            <Link to="/services" className="home-btn outline-btn">
              Explore Our Services <span>→</span>
            </Link>
          </div>

          <div className="hero-trust">
            <span>✓ Patient-focused care</span>
            <span>✓ Personalised attention</span>
            <span>✓ Professional guidance</span>
          </div>
        </div>

        <div className="hero-bottom-label">
          YOUR HEALTH. OUR COMMITMENT.
        </div>
      </section>

      {/* WELCOME / ABOUT SECTION */}
      <section className="welcome-section">
        <div className="home-container welcome-grid">
          <div className="welcome-visual">
            <div className="welcome-image-frame">
              <img
                className="welcome-image"
                src={hospitalImages.welcome}
                alt="Healthcare professional providing attentive patient care"
                loading="lazy"
              />

              <div className="welcome-image-overlay" />

              <div className="welcome-image-caption">
                <span className="caption-icon">✚</span>

                <div>
                  <strong>Care With Compassion</strong>
                  <span>Every patient matters</span>
                </div>
              </div>
            </div>

            <div className="welcome-image-border" />

            <div className="welcome-badge">
              <span className="badge-star">✦</span>
              <strong>YOUR HEALTH</strong>
              <span>Our Priority</span>
            </div>
          </div>

          <div className="welcome-content">
            <div className="home-eyebrow">
              <span className="eyebrow-line" />
              A COMMITMENT TO YOUR HEALTH
            </div>

            <h2 className="home-heading">
              Healthcare With
              <span>Heart &amp; Expertise</span>
            </h2>

            <p>
              At Sri Shakthi Hospital, we believe meaningful healthcare
              starts with listening. Understanding your concerns helps
              us provide appropriate medical guidance with care,
              respect, and attention to your individual needs.
            </p>

            <p>
              Whether you need a general consultation or guidance
              about preventive healthcare, our focus is on helping
              you feel informed, comfortable, and supported throughout
              your healthcare journey.
            </p>

            <div className="welcome-benefits">
              {benefits.map((benefit, index) => (
                <div
                  className="welcome-benefit"
                  key={benefit}
                  style={{ "--benefit-delay": `${index * 100}ms` }}
                >
                  <span className="benefit-check">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="welcome-link">
              Discover Our Hospital
              <span>→</span>
            </Link>

            <div className="welcome-note">
              <span className="welcome-note-dot" />
              Compassionate care begins with understanding you.
            </div>
          </div>
        </div>
      </section>

      {/* MEDICAL SERVICES */}
      <section className="services-section">
        <div className="home-container">
          <div className="services-heading">
            <div className="home-eyebrow">
              <span className="eyebrow-line" />
              OUR MEDICAL SERVICES
            </div>

            <h2 className="home-heading">
              Care Designed <span>Around You</span>
            </h2>

            <p>
              Medical guidance and attentive care to help you make
              informed decisions about your health.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article
                className="service-card"
                key={service.number}
                style={{ "--card-delay": `${index * 100}ms` }}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/services" className="service-link">
                  Learn More <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="services-action">
            <Link to="/services" className="home-btn navy-btn">
              View All Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="doctor-section">
        <div className="home-container doctor-grid">
          <div className="doctor-content">
            <div className="home-eyebrow">
              <span className="eyebrow-line" />
              MEET YOUR DOCTOR
            </div>

            <h2 className="home-heading">
              Medical Care Built on
              <span>Trust &amp; Experience</span>
            </h2>

            <p>
              Meet Dr. Sakthi Narasimha Garikapati. Learn more about
              the doctor and the medical care available at Sri Shakthi
              Hospital.
            </p>

            <div className="doctor-promise">
              <span>✚</span>
              <div>
                <strong>A Personal Approach to Healthcare</strong>
                <p>Listening carefully. Guiding thoughtfully.</p>
              </div>
            </div>

            <Link to="/doctor" className="home-btn navy-btn">
              Meet the Doctor <span>→</span>
            </Link>
          </div>

          <div className="doctor-visual">
            <div className="doctor-photo-border" />

            <div className="doctor-photo-frame">
              <img
                src={hospitalImages.doctor}
                alt="Dr. Sakthi Narasimha Garikapati"
                loading="lazy"
              />
            </div>

            <div className="doctor-info-card">
              <span>YOUR HEALTHCARE PARTNER</span>
              <strong>Dr. Sakthi Narasimha Garikapati</strong>
              <p>Family &amp; Internal Medicine</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT BANNER */}
      <section className="appointment-banner">
        <div className="home-container appointment-content">
          <div>
            <div className="home-eyebrow light-eyebrow">
              <span className="eyebrow-line" />
              YOUR WELLBEING MATTERS
            </div>

            <h2>Take the First Step Towards Better Health</h2>

            <p>
              Contact Sri Shakthi Hospital to enquire about consultations
              and appointment availability.
            </p>
          </div>

          <Link to="/appointment" className="home-btn gold-btn">
            Request an Appointment <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
