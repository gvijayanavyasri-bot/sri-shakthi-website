import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const facilities = [
  {
    number: "01",
    symbol: "✚",
    category: "PATIENT CONSULTATION",
    title: "Consultation Rooms",
    description:
      "A dedicated consultation environment for discussing health concerns, clinical assessment, medical advice, and treatment planning.",
    details: [
      "Patient consultations",
      "Clinical examination",
      "Medical guidance",
    ],
    visual: "consultation",
  },
  {
    number: "02",
    symbol: "♧",
    category: "INPATIENT SERVICES",
    title: "Inpatient Care",
    description:
      "Hospital admission and medical observation for patients who need care beyond an outpatient consultation.",
    details: [
      "Patient observation",
      "Treatment support",
      "Care coordination",
    ],
    visual: "inpatient",
  },
  {
    number: "03",
    symbol: "⌕",
    category: "DIAGNOSTIC SUPPORT",
    title: "Diagnostic Laboratory",
    description:
      "Diagnostic laboratory services that support clinical investigations, medical evaluation, and informed treatment decisions.",
    details: [
      "Laboratory investigations",
      "Diagnostic support",
      "Reporting processes",
    ],
    visual: "laboratory",
  },
  {
    number: "04",
    symbol: "✧",
    category: "MEDICINE ACCESS",
    title: "In-House Pharmacy",
    description:
      "A convenient hospital pharmacy supporting access to prescribed medicines and medication-related guidance.",
    details: [
      "Prescribed medications",
      "Convenient access",
      "Medication guidance",
    ],
    visual: "pharmacy",
  },
  {
    number: "05",
    symbol: "♥",
    category: "URGENT MEDICAL SUPPORT",
    title: "Emergency Care",
    description:
      "Medical assistance for urgent health concerns, with appropriate clinical assessment and guidance on further treatment.",
    details: [
      "Urgent assessment",
      "Initial medical support",
      "Appropriate referral",
    ],
    visual: "emergency",
  },
  {
    number: "06",
    symbol: "◷",
    category: "SHORT-STAY TREATMENT",
    title: "Day Care Facilities",
    description:
      "Facilities supporting selected treatments and procedures that may not require an overnight hospital admission.",
    details: [
      "Short-duration care",
      "Clinical supervision",
      "Patient support",
    ],
    visual: "daycare",
  },
];

const carePrinciples = [
  {
    symbol: "01",
    title: "Patient Safety",
    description:
      "Responsible medical practices and appropriate clinical assessment.",
  },
  {
    symbol: "02",
    title: "Personal Attention",
    description:
      "Care that recognizes each patient's concerns and individual needs.",
  },
  {
    symbol: "03",
    title: "Clear Communication",
    description:
      "Helping patients understand their health concerns and care plans.",
  },
  {
    symbol: "04",
    title: "Continuity of Care",
    description:
      "Supporting follow-up and ongoing medical management when needed.",
  },
];

export default function Facilities() {
  return (
    <main className="hp-page hp-facilities">
      {/* HERO */}
      <section className="hp-hero hp-facilities-hero">
        <div className="hp-container hp-hero-grid">
          <div className="hp-hero-content">
            <span className="hp-eyebrow">
              <span className="hp-eyebrow-line"></span>
              OUR HOSPITAL ENVIRONMENT
            </span>

            <h1>
              Designed Around
              <br />
              <span>Your Wellbeing.</span>
            </h1>

            <p>
              A supportive healthcare environment where medical services,
              patient comfort, and compassionate attention come together.
            </p>

            <div className="hp-button-group">
              <a href="#hospital-facilities" className="hp-btn hp-btn-primary">
                Explore Our Facilities <span>↓</span>
              </a>

              <Link to="/contact" className="hp-btn hp-btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="hp-facility-hero-art">
            <div className="hp-facility-orbit hp-orbit-one"></div>
            <div className="hp-facility-orbit hp-orbit-two"></div>

            <div className="hp-facility-emblem">
              <div className="hp-emblem-cross">✚</div>
              <strong>SRI SAKTHI</strong>
              <span>HOSPITAL</span>
              <div className="hp-emblem-divider"></div>
              <small>COMPASSION · EXCELLENCE · TRUST</small>
            </div>

            <div className="hp-facility-stamp">
              <span>CARE</span>
              <strong>WITH</strong>
              <span>COMMITMENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="hp-section">
        <div className="hp-container hp-facility-intro">
          <div className="hp-facility-intro-label">
            <span className="hp-eyebrow">OUR FACILITIES</span>
            <span className="hp-large-number">01—06</span>
          </div>

          <div>
            <h2 className="hp-section-title">
              The Right Support
              <br />
              <span>Throughout Your Care.</span>
            </h2>

            <p className="hp-intro-description">
              From initial consultations to diagnostic support and
              hospital-based treatment, our facilities are intended to
              support a more organized and reassuring patient experience.
              Each service plays a role in helping patients receive
              appropriate medical attention.
            </p>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section
        className="hp-section hp-facility-section"
        id="hospital-facilities"
      >
        <div className="hp-container">
          <div className="hp-section-heading hp-centered-heading">
            <span className="hp-eyebrow">CARE BEYOND CONSULTATION</span>

            <h2 className="hp-section-title">
              Our Hospital <span>Facilities</span>
            </h2>

            <p>
              Essential healthcare facilities supporting assessment,
              treatment, and patient care.
            </p>
          </div>

          <div className="hp-facility-grid">
            {facilities.map((facility, index) => (
              <article
                className={`hp-facility-card hp-facility-${facility.visual}`}
                key={facility.number}
                style={{ "--card-index": index }}
              >
                <div className="hp-facility-visual">
                  <div className="hp-facility-visual-ring"></div>

                  <span className="hp-facility-visual-number">
                    {facility.number}
                  </span>

                  <div className="hp-facility-visual-symbol">
                    {facility.symbol}
                  </div>

                  <span className="hp-facility-visual-caption">
                    SRI SAKTHI HOSPITAL
                  </span>
                </div>

                <div className="hp-facility-content">
                  <span className="hp-card-category">
                    {facility.category}
                  </span>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <ul className="hp-feature-list">
                    {facility.details.map((detail) => (
                      <li key={detail}>
                        <span>✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="hp-card-link">
                    Enquire About Facilities <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="hp-section hp-principles-section">
        <div className="hp-container">
          <div className="hp-principles-layout">
            <div className="hp-principles-heading">
              <span className="hp-eyebrow">OUR APPROACH TO CARE</span>

              <h2 className="hp-section-title">
                Healthcare
                <br />
                With a <span>Human Touch.</span>
              </h2>

              <p>
                Good healthcare is about more than facilities. It is also
                about understanding people, communicating clearly, and
                providing appropriate support throughout their care.
              </p>

              <Link to="/about" className="hp-text-link">
                Discover Our Hospital <span>↗</span>
              </Link>
            </div>

            <div className="hp-principles-list">
              {carePrinciples.map((principle) => (
                <article className="hp-principle" key={principle.symbol}>
                  <span className="hp-principle-number">
                    {principle.symbol}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>

                  <span className="hp-principle-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="hp-section hp-cta-section">
        <div className="hp-container">
          <div className="hp-cta-box">
            <div className="hp-cta-content">
              <span className="hp-eyebrow hp-eyebrow-light">
                WE ARE HERE TO HELP
              </span>

              <h2>
                Your Care
                <br />
                Starts Here.
              </h2>

              <p>
                Contact Sri Sakthi Hospital for information about our
                facilities, consultation timings, and available services.
              </p>

              <div className="hp-button-group">
                <Link to="/appointment" className="hp-btn hp-btn-gold">
                  Request an Appointment <span>↗</span>
                </Link>

                <a href="tel:9494456007" className="hp-btn hp-btn-light">
                  Call Our Hospital
                </a>
              </div>
            </div>

            <div className="hp-cta-symbol" aria-hidden="true">
              <span>✚</span>
              <small>CARE</small>
              <small>COMFORT</small>
              <small>CONFIDENCE</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}