import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "✚",
    title: "Outpatient Consultation",
    category: "CONSULTATION",
    description:
      "Personalized medical consultations with careful evaluation, accurate diagnosis, and treatment guidance for individuals and families.",
    features: [
      "General medical consultations",
      "Clinical assessment",
      "Personalized treatment guidance",
    ],
  },
  {
    number: "02",
    icon: "♧",
    title: "Inpatient Care",
    category: "PATIENT CARE",
    description:
      "Supportive inpatient care for patients requiring hospital admission, medical observation, and continuous attention.",
    features: [
      "Patient observation",
      "Medical treatment support",
      "Individualized care planning",
    ],
  },
  {
    number: "03",
    icon: "◷",
    title: "Day Care Services",
    category: "TREATMENT",
    description:
      "Convenient short-duration medical care and procedures when an overnight hospital stay is not required.",
    features: [
      "Short-duration treatments",
      "Clinical supervision",
      "Patient comfort and guidance",
    ],
  },
  {
    number: "04",
    icon: "⌕",
    title: "Diagnostic Laboratory",
    category: "DIAGNOSTICS",
    description:
      "Laboratory testing supports medical evaluation and helps healthcare professionals make informed treatment decisions.",
    features: [
      "Diagnostic testing",
      "Clinical evaluation support",
      "Timely reporting processes",
    ],
  },
  {
    number: "05",
    icon: "✧",
    title: "Pharmacy Services",
    category: "MEDICINES",
    description:
      "Convenient access to medicines within the hospital, supporting prescribed treatment and medication guidance.",
    features: [
      "Prescribed medicines",
      "Medication guidance",
      "Convenient in-hospital access",
    ],
  },
  {
    number: "06",
    icon: "◎",
    title: "IV Therapy & Nebulization",
    category: "TREATMENT",
    description:
      "Clinically guided IV therapy and nebulization services when indicated as part of a patient's treatment plan.",
    features: [
      "Medically supervised care",
      "Respiratory treatment support",
      "Patient monitoring as required",
    ],
  },
  {
    number: "07",
    icon: "♥",
    title: "Emergency Care",
    category: "URGENT CARE",
    description:
      "Medical assessment and assistance for urgent health concerns, with guidance on obtaining appropriate emergency treatment.",
    features: [
      "Urgent medical assessment",
      "Initial treatment support",
      "Appropriate referral when needed",
    ],
  },
  {
    number: "08",
    icon: "✚",
    title: "Chronic Disease Management",
    category: "LONG-TERM CARE",
    description:
      "Ongoing medical care for conditions such as diabetes, hypertension, thyroid disorders, and other chronic illnesses.",
    features: [
      "Diabetes management",
      "Blood pressure monitoring",
      "Follow-up and preventive guidance",
    ],
  },
];

const conditions = [
  {
    title: "Acute Illnesses",
    icon: "01",
    description:
      "Medical evaluation and treatment guidance for common acute illnesses.",
    tags: [
      "Fever",
      "Viral infections",
      "Dengue",
      "Malaria",
      "Typhoid",
      "Cough",
      "Vomiting",
      "Diarrhea",
    ],
  },
  {
    title: "Chronic Conditions",
    icon: "02",
    description:
      "Long-term medical management and follow-up for ongoing health conditions.",
    tags: [
      "Diabetes",
      "Hypertension",
      "Thyroid disorders",
      "High cholesterol",
      "Joint pain",
      "Elderly care",
    ],
  },
  {
    title: "Preventive Healthcare",
    icon: "03",
    description:
      "Health guidance focused on prevention, early assessment, and long-term wellness.",
    tags: [
      "Routine check-ups",
      "Lifestyle guidance",
      "Health monitoring",
      "Preventive advice",
    ],
  },
];

export default function Services() {
  return (
    <main className="hp-page hp-services">
      {/* HERO SECTION */}
      <section className="hp-hero hp-services-hero">
        <div className="hp-container hp-hero-grid">
          <div className="hp-hero-content">
            <span className="hp-eyebrow">
              <span className="hp-eyebrow-line"></span>
              COMPASSIONATE HEALTHCARE
            </span>

            <h1>
              Medical Care
              <br />
              <span>You Can Trust.</span>
            </h1>

            <p>
              Thoughtful medical care, personalized attention, and a
              patient-first approach at every step of your healthcare journey.
            </p>

            <div className="hp-button-group">
              <Link to="/appointment" className="hp-btn hp-btn-primary">
                Request an Appointment <span>↗</span>
              </Link>

              <Link to="/contact" className="hp-btn hp-btn-outline">
                Contact Our Hospital
              </Link>
            </div>

            <div className="hp-hero-note">
              <span className="hp-note-icon">✚</span>
              <span>
                <strong>Care with Compassion</strong>
                <small>Listening · Caring · Healing</small>
              </span>
            </div>
          </div>

          <div className="hp-hero-art">
            <div className="hp-art-circle hp-art-circle-one"></div>
            <div className="hp-art-circle hp-art-circle-two"></div>

            <div className="hp-medical-art">
              <div className="hp-art-top">
                <span>SS</span>
                <div>
                  <strong>SRI SAKTHI</strong>
                  <small>HOSPITAL</small>
                </div>
              </div>

              <div className="hp-art-cross">✚</div>

              <div className="hp-art-bottom">
                <span>CARE</span>
                <span>TRUST</span>
                <span>HEALING</span>
              </div>
            </div>

            <div className="hp-floating-card hp-floating-top">
              <span className="hp-floating-icon">♥</span>
              <div>
                <strong>Patient First</strong>
                <small>Care that understands</small>
              </div>
            </div>

            <div className="hp-floating-card hp-floating-bottom">
              <span className="hp-floating-icon">✚</span>
              <div>
                <strong>Medical Support</strong>
                <small>Care for every stage</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hp-hero-bottom-line"></div>
      </section>

      {/* INTRODUCTION */}
      <section className="hp-section hp-intro-section">
        <div className="hp-container hp-intro-grid">
          <div>
            <span className="hp-eyebrow">OUR MEDICAL SERVICES</span>

            <h2 className="hp-section-title">
              Complete Care.
              <br />
              <span>Personal Attention.</span>
            </h2>
          </div>

          <div className="hp-intro-copy">
            <p>
              At Sri Sakthi Hospital, we believe quality healthcare begins
              with understanding the patient. Our services support medical
              consultations, diagnostic evaluation, treatment, and ongoing
              health management.
            </p>

            <p>
              Every patient's needs are different. Our approach focuses on
              clear communication, appropriate medical guidance, and
              compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="hp-section hp-service-section">
        <div className="hp-container">
          <div className="hp-section-heading hp-centered-heading">
            <span className="hp-eyebrow">HOW WE CARE FOR YOU</span>

            <h2 className="hp-section-title">
              Our Healthcare <span>Services</span>
            </h2>

            <p>
              Explore our core services, designed around medical needs,
              patient comfort, and responsible healthcare.
            </p>
          </div>

          <div className="hp-service-grid">
            {services.map((service, index) => (
              <article
                className="hp-service-card"
                key={service.number}
                style={{ "--card-index": index }}
              >
                <div className="hp-service-card-top">
                  <span className="hp-service-number">
                    {service.number}
                  </span>

                  <span className="hp-service-icon">{service.icon}</span>
                </div>

                <span className="hp-card-category">{service.category}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul className="hp-feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/appointment"
                  className="hp-card-link"
                  aria-label={`Request an appointment for ${service.title}`}
                >
                  Enquire About Care <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="hp-section hp-condition-section">
        <div className="hp-container">
          <div className="hp-section-heading">
            <span className="hp-eyebrow">HEALTH & WELLNESS</span>

            <h2 className="hp-section-title">
              Care for Your
              <br />
              <span>Health Concerns.</span>
            </h2>

            <p>
              Medical evaluation and treatment guidance for a range of
              common illnesses and ongoing health conditions.
            </p>
          </div>

          <div className="hp-condition-grid">
            {conditions.map((condition) => (
              <article className="hp-condition-card" key={condition.title}>
                <span className="hp-condition-number">
                  {condition.icon}
                </span>

                <h3>{condition.title}</h3>

                <p>{condition.description}</p>

                <div className="hp-tag-list">
                  {condition.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="hp-medical-note">
            All treatment decisions depend on an individual clinical
            assessment. The services and conditions listed do not guarantee
            that every treatment is appropriate for every patient.
          </p>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="hp-section hp-cta-section">
        <div className="hp-container">
          <div className="hp-cta-box">
            <div className="hp-cta-content">
              <span className="hp-eyebrow hp-eyebrow-light">
                YOUR HEALTH MATTERS
              </span>

              <h2>
                Your Health.
                <br />
                Our Commitment.
              </h2>

              <p>
                Take the next step toward better health with compassionate
                medical guidance at Sri Sakthi Hospital.
              </p>

              <div className="hp-button-group">
                <Link
                  to="/appointment"
                  className="hp-btn hp-btn-gold"
                >
                  Request an Appointment <span>↗</span>
                </Link>

                <a href="tel:9494456007" className="hp-btn hp-btn-light">
                  Call 9494456007
                </a>
              </div>
            </div>

            <div className="hp-cta-symbol" aria-hidden="true">
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