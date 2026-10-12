
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const services = [
  {
    number: "01",
    icon: "🩺",
    title: "General Consultation",
    description:
      "Personalised medical consultations, detailed health assessments, and treatment plans designed around each patient's needs.",
    features: ["Health assessment", "Medical advice"],
  },
  {
    number: "02",
    icon: "🫀",
    title: "Family & Internal Medicine",
    description:
      "Comprehensive care for common illnesses, ongoing health concerns, and preventive healthcare for adults and families.",
    features: ["Adult healthcare", "Preventive medicine"],
  },
  {
    number: "03",
    icon: "🏥",
    title: "Outpatient Care (OPD)",
    description:
      "Convenient outpatient consultations to help patients receive medical evaluation, guidance, and follow-up care.",
    features: ["Doctor consultation", "Follow-up visits"],
  },
  {
    number: "04",
    icon: "🛏️",
    title: "Inpatient Care (IPD)",
    description:
      "Patient-focused inpatient services with clinical supervision and care according to the patient's medical requirements.",
    features: ["Patient monitoring", "Coordinated care"],
  },
  {
    number: "05",
    icon: "💊",
    title: "Chronic Disease Management",
    description:
      "Ongoing medical support for long-term conditions, with regular reviews and individualised treatment guidance.",
    features: ["Regular reviews", "Treatment guidance"],
  },
  {
    number: "06",
    icon: "❤️",
    title: "Preventive Healthcare",
    description:
      "Health guidance focused on early identification of concerns, healthy habits, and reducing avoidable health risks.",
    features: ["Health awareness", "Lifestyle guidance"],
  },
];

const careSteps = [
  {
    number: "01",
    title: "Listen & Understand",
    text: "We take time to understand your symptoms, concerns, and medical history.",
  },
  {
    number: "02",
    title: "Assess & Guide",
    text: "We provide a careful assessment and explain suitable care options.",
  },
  {
    number: "03",
    title: "Treat & Follow Up",
    text: "We support your treatment journey with appropriate follow-up guidance.",
  },
];

const facilities = [
  {
    icon: "👨‍⚕️",
    title: "Experienced Medical Guidance",
    text: "Consultation and treatment guidance based on individual patient needs.",
  },
  {
    icon: "🩺",
    title: "Consultation Services",
    text: "Medical consultations for common illnesses and general health concerns.",
  },
  {
    icon: "🏥",
    title: "OPD & IPD Services",
    text: "Outpatient and inpatient care according to clinical requirements.",
  },
  {
    icon: "🤝",
    title: "Patient-Centred Approach",
    text: "Respectful communication, clear explanations, and attention to patient concerns.",
  },
];

function Services() {
  return (
    <main className="services-page">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-pattern" aria-hidden="true" />
        <div className="services-container services-hero-grid">
          <div className="services-hero-content">
            <span className="services-eyebrow">
              SRI SAKTHI HOSPITAL · QUALITY HEALTHCARE
            </span>

            <h1>
              Comprehensive Care.
              <span className="hero-highlight">
                {" "}Compassionate Hearts.
              </span>
            </h1>

            <div className="services-title-rule" />

            <p>
              Your health deserves thoughtful attention and professional
              medical guidance. Explore our healthcare services, designed
              around patient comfort, responsible care, and your wellbeing.
            </p>

            <div className="services-hero-actions">
              <Link to="/appointment" className="services-primary-btn">
                Book an Appointment <span aria-hidden="true">→</span>
              </Link>

              <Link to="/doctor" className="services-phone-btn">
                Meet Our Doctor
              </Link>
            </div>

            <div className="hero-assurance">
              <span className="assurance-check">✓</span>
              <span>Personal attention · Professional medical guidance</span>
            </div>
          </div>

          <div className="services-hero-side">
            <div className="hero-doctor-image">
              <img
                src={doctorImage}
                alt="Sri Sakthi Hospital doctor"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="hero-image-overlay">
                <span className="hero-image-label">YOUR HEALTH MATTERS</span>
                <h2>Care You Can Trust</h2>
                <p>Professional guidance with a patient-first approach.</p>
              </div>
            </div>

            <div className="hero-floating-card">
              <span className="floating-card-icon">✚</span>
              <div>
                <strong>OPD & IPD</strong>
                <span>Healthcare services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="services-trust">
        <div className="services-container trust-grid">
          <div className="trust-item">
            <span className="trust-icon">🩺</span>
            <div>
              <h3>Medical Consultation</h3>
              <p>Individual attention</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">🤝</span>
            <div>
              <h3>Patient First</h3>
              <p>Respectful care</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">❤️</span>
            <div>
              <h3>Holistic Approach</h3>
              <p>Health and wellbeing</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">📋</span>
            <div>
              <h3>Follow-up Guidance</h3>
              <p>Continuity of care</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-main-section">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="section-label">OUR MEDICAL SERVICES</span>
            <h2>
              Healthcare for <span>Every Stage of Life</span>
            </h2>
            <p>
              Explore our core healthcare services. Our approach focuses on
              understanding your concerns, explaining your options, and
              guiding you towards appropriate medical care.
            </p>
            <div className="heading-decoration">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/appointment" className="service-link">
                  Enquire About This Service
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="services-doctor">
        <div className="services-container doctor-grid">
          <div className="doctor-image-column">
            <div className="doctor-image-border" />

            <div className="doctor-image-frame">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="doctor-image-badge">
              <span className="badge-symbol">✚</span>
              <div>
                <strong>Patient-Focused Care</strong>
                <span>Professional medical guidance</span>
              </div>
            </div>
          </div>

          <div className="doctor-content">
            <span className="section-label">MEET YOUR DOCTOR</span>

            <h2>
              Experience Care With
              <span> Confidence</span>
            </h2>

            <p className="doctor-lead">
              Good healthcare begins with listening. We aim to provide clear
              medical guidance, thoughtful consultations, and care that
              respects each patient's concerns and individual needs.
            </p>

            <div className="doctor-profile">
              <h3>Dr. Sakthi Narasimha Garikapati</h3>
              <span className="doctor-role">
                Family & Internal Medicine
              </span>
              <p className="doctor-credentials">
                MBBS, DNB Family Medicine, FCD, FIIM, PGPID
              </p>
            </div>

            <ul className="doctor-highlights">
              <li>
                <span>✓</span>
                Individualised consultation and guidance
              </li>
              <li>
                <span>✓</span>
                Attention to medical history and symptoms
              </li>
              <li>
                <span>✓</span>
                Clear explanations and follow-up advice
              </li>
            </ul>

            <Link to="/doctor" className="doctor-link">
              View Doctor Profile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CARE APPROACH */}
      <section className="care-section">
        <div className="services-container">
          <div className="care-heading">
            <span className="light-label">OUR APPROACH</span>
            <h2>Care That Puts You First</h2>
            <p>
              A thoughtful approach helps patients understand their health
              and take informed steps towards appropriate treatment.
            </p>
          </div>

          <div className="care-grid">
            {careSteps.map((step) => (
              <article className="care-card" key={step.number}>
                <span className="care-number">{step.number}</span>
                <div className="care-card-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="services-facilities">
        <div className="services-container">
          <div className="facilities-heading">
            <span className="section-label">YOUR CARE EXPERIENCE</span>
            <h2>
              Designed Around <span>Your Wellbeing</span>
            </h2>
            <p>
              Our service approach centres on communication, appropriate
              medical guidance, and a supportive experience throughout your
              visit.
            </p>
          </div>

          <div className="facility-list">
            {facilities.map((facility) => (
              <article className="facility-item" key={facility.title}>
                <span className="facility-icon" aria-hidden="true">
                  {facility.icon}
                </span>
                <div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>
                <span className="facility-arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="services-cta">
        <div className="cta-decoration cta-decoration-one" />
        <div className="cta-decoration cta-decoration-two" />

        <div className="services-container cta-inner">
          <div className="cta-content">
            <span className="light-label">WE ARE HERE TO HELP</span>
            <h2>Take the Next Step Towards Better Health</h2>
            <p>
              Have a health concern or need a consultation? Contact Sri Sakthi
              Hospital to enquire about an appointment and available services.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/appointment" className="cta-primary-btn">
              Book an Appointment <span aria-hidden="true">→</span>
            </Link>

            <a href="tel:9494456007" className="cta-call-btn">
              ☎ Call Hospital
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
