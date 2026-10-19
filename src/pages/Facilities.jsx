import React from "react";
import { Link } from "react-router-dom";
import "./Facilities.css";

const facilities = [
  {
    number: "01",
    icon: "✚",
    category: "CONSULTATION",
    title: "Consultation Rooms",
    description:
      "Dedicated consultation spaces for medical evaluation, patient discussions, and personalized healthcare guidance.",
    features: [
      "Individual medical consultations",
      "Clinical assessment and guidance",
      "Patient-focused communication",
    ],
  },
  {
    number: "02",
    icon: "♡",
    category: "INPATIENT CARE",
    title: "Inpatient Facilities",
    description:
      "Supportive inpatient care for patients who require hospital admission, medical treatment, and observation.",
    features: [
      "Patient admission and care",
      "Medical observation",
      "Individual care planning",
    ],
  },
  {
    number: "03",
    icon: "⌕",
    category: "DIAGNOSTICS",
    title: "Diagnostic Laboratory",
    description:
      "Laboratory testing supports medical assessments and helps healthcare professionals make informed decisions.",
    features: [
      "Diagnostic testing",
      "Clinical evaluation support",
      "Laboratory reporting processes",
    ],
  },
  {
    number: "04",
    icon: "✧",
    category: "PHARMACY",
    title: "In-house Pharmacy",
    description:
      "Convenient access to prescribed medicines within the hospital to support treatment and patient convenience.",
    features: [
      "Access to prescribed medicines",
      "Medication-related guidance",
      "Convenient hospital access",
    ],
  },
  {
    number: "05",
    icon: "✚",
    category: "URGENT CARE",
    title: "Emergency Care",
    description:
      "Medical assessment and assistance for urgent health concerns, with appropriate treatment and referral guidance.",
    features: [
      "Urgent medical assessment",
      "Initial treatment support",
      "Appropriate referral when needed",
    ],
  },
  {
    number: "06",
    icon: "◷",
    category: "SHORT-STAY CARE",
    title: "Day Care Services",
    description:
      "Medical care and suitable procedures for patients who do not require an overnight hospital admission.",
    features: [
      "Short-duration treatments",
      "Clinical supervision",
      "Patient comfort and guidance",
    ],
  },
];

const carePrinciples = [
  {
    number: "01",
    icon: "♡",
    title: "Patient Comfort",
    description:
      "A considerate approach that respects patient comfort, dignity, and individual needs.",
  },
  {
    number: "02",
    icon: "✧",
    title: "Clinical Precision",
    description:
      "Medical assessment and diagnostic support to guide appropriate healthcare decisions.",
  },
  {
    number: "03",
    icon: "✚",
    title: "Coordinated Care",
    description:
      "Connecting consultations, investigations, and treatment guidance around patient needs.",
  },
];

function Facilities() {
  return (
    <main className="hp-page hp-facilities">
      {/* ================= HERO ================= */}
      <section className="fac-hero">
        <div className="hp-container fac-hero-grid">
          <div className="fac-hero-content">
            <span className="fac-eyebrow">
              <span className="fac-eyebrow-line" />
              SRI SAKTHI HOSPITAL
            </span>

            <h1>
              Thoughtfully Designed.
              <br />
              <span>Focused on Your Care.</span>
            </h1>

            <p>
              Discover a patient-focused healthcare environment designed
              around consultation, diagnosis, treatment, and supportive
              medical care.
            </p>

            <div className="fac-hero-actions">
              <Link to="/appointment" className="fac-btn fac-btn-primary">
                Request an Appointment <span>↗</span>
              </Link>

              <Link to="/contact" className="fac-btn fac-btn-outline">
                Contact Our Hospital
              </Link>
            </div>

            <div className="fac-trust-note">
              <span className="fac-trust-icon">✦</span>

              <div>
                <strong>Compassion • Excellence • Trust</strong>
                <small>Healthcare with a personal touch</small>
              </div>
            </div>
          </div>

          {/* CSS-ONLY HOSPITAL ILLUSTRATION */}
          <div className="fac-hero-visual">
            <div className="fac-orbit fac-orbit-one" />
            <div className="fac-orbit fac-orbit-two" />

            <div className="fac-hospital-art">
              <div className="fac-art-header">
                <div className="fac-art-logo">SS</div>

                <div>
                  <strong>SRI SAKTHI</strong>
                  <small>HOSPITAL</small>
                </div>
              </div>

              <div className="fac-art-cross">✚</div>

              <div className="fac-art-building">
                <div className="fac-building-roof" />

                <div className="fac-building-body">
                  <div className="fac-building-sign">
                    <span>✚</span>
                    <small>MEDICAL CARE</small>
                  </div>

                  <div className="fac-building-windows">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>

                  <div className="fac-building-door" />
                </div>
              </div>

              <div className="fac-art-footer">
                <span>COMPASSION</span>
                <span>CARE</span>
                <span>TRUST</span>
              </div>
            </div>

            <div className="fac-floating-card fac-floating-top">
              <span className="fac-floating-icon">♡</span>
              <div>
                <strong>Patient First</strong>
                <small>Care with compassion</small>
              </div>
            </div>

            <div className="fac-floating-card fac-floating-bottom">
              <span className="fac-floating-icon">✚</span>
              <div>
                <strong>Healthcare Support</strong>
                <small>Care at every step</small>
              </div>
            </div>
          </div>
        </div>

        <div className="fac-hero-bottom-line" />
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="fac-intro-section">
        <div className="hp-container fac-intro-grid">
          <div className="fac-intro-heading">
            <span className="fac-eyebrow">OUR FACILITIES</span>

            <h2>
              A Supportive
              <br />
              <span>Healthcare Environment.</span>
            </h2>
          </div>

          <div className="fac-intro-copy">
            <p>
              At Sri Sakthi Hospital, our facilities support the different
              stages of a patient's healthcare journey, from consultation
              and diagnostic evaluation to treatment and follow-up.
            </p>

            <p>
              We believe that clear communication, appropriate medical
              guidance, and respectful patient care are essential parts
              of a positive healthcare experience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FACILITY CARDS ================= */}
      <section className="fac-services-section">
        <div className="hp-container">
          <div className="fac-section-heading">
            <span className="fac-eyebrow">CARE UNDER ONE ROOF</span>

            <h2>
              Our Hospital
              <span> Facilities.</span>
            </h2>

            <p>
              Explore the key facilities supporting medical consultation,
              diagnosis, treatment, and patient care.
            </p>
          </div>

          <div className="fac-grid">
            {facilities.map((facility, index) => (
              <article
                className="fac-card"
                key={facility.number}
                style={{ "--fac-index": index }}
              >
                <div className="fac-card-top">
                  <span className="fac-number">{facility.number}</span>

                  <span className="fac-card-icon">{facility.icon}</span>
                </div>

                <span className="fac-category">{facility.category}</span>

                <h3>{facility.title}</h3>

                <p className="fac-card-description">
                  {facility.description}
                </p>

                <ul className="fac-feature-list">
                  {facility.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/appointment"
                  className="fac-card-link"
                  aria-label={`Enquire about ${facility.title}`}
                >
                  Enquire About Care <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CARE PRINCIPLES ================= */}
      <section className="fac-principles-section">
        <div className="hp-container">
          <div className="fac-section-heading">
            <span className="fac-eyebrow">OUR APPROACH</span>

            <h2>
              More Than Facilities.
              <br />
              <span>A Commitment to Care.</span>
            </h2>

            <p>
              The patient experience is shaped by thoughtful communication,
              responsible medical practice, and compassionate support.
            </p>
          </div>

          <div className="fac-principles-grid">
            {carePrinciples.map((item) => (
              <article className="fac-principle-card" key={item.number}>
                <div className="fac-principle-top">
                  <span className="fac-principle-icon">{item.icon}</span>
                  <span className="fac-principle-number">{item.number}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="fac-principle-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT CTA ================= */}
      <section className="fac-cta-section">
        <div className="hp-container">
          <div className="fac-cta-box">
            <div className="fac-cta-content">
              <span className="fac-eyebrow fac-eyebrow-light">
                YOUR HEALTH MATTERS
              </span>

              <h2>
                Your Health.
                <br />
                Our Commitment.
              </h2>

              <p>
                Have questions about our facilities or need to arrange
                a consultation? Contact Sri Sakthi Hospital for assistance.
              </p>

              <div className="fac-cta-actions">
                <Link to="/appointment" className="fac-btn fac-btn-gold">
                  Request an Appointment <span>↗</span>
                </Link>

                <a href="tel:9494456007" className="fac-btn fac-btn-light">
                  Call 9494456007
                </a>
              </div>
            </div>

            <div className="fac-cta-emblem" aria-hidden="true">
              <span>✚</span>
              <small>LISTENING</small>
              <small>CARING</small>
              <small>HEALING</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Facilities;