
import { Link } from "react-router-dom";
import "./Facilities.css";

const facilities = [
  {
    number: "01",
    category: "PATIENT WELCOME",
    title: "Reception & Waiting Lounge",
    description:
      "A welcoming environment designed to help patients and visitors feel comfortable from arrival.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    alt: "Bright and welcoming healthcare interior",
    icon: "✦",
  },
  {
    number: "02",
    category: "PATIENT COMFORT",
    title: "Inpatient Rooms",
    description:
      "Comfortable patient accommodation designed to support rest, privacy, and recovery.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=85",
    alt: "Hospital patient care room",
    icon: "♡",
  },
  {
    number: "03",
    category: "MEDICAL CONSULTATION",
    title: "Consultation Rooms",
    description:
      "Dedicated spaces for patient consultations, health discussions, and medical assessment.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional clinical consultation environment",
    icon: "✚",
  },
  {
    number: "04",
    category: "DIAGNOSTIC SUPPORT",
    title: "Diagnostic Facilities",
    description:
      "Clinical spaces that support medical assessment and diagnostic services.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    alt: "Medical diagnostic and clinical environment",
    icon: "⌕",
  },
  {
    number: "05",
    category: "PATIENT SERVICES",
    title: "Medical Support Areas",
    description:
      "Organized healthcare spaces that help support patient needs and daily hospital activities.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
    alt: "Medical equipment in a healthcare setting",
    icon: "✥",
  },
  {
    number: "06",
    category: "HEALTHCARE ENVIRONMENT",
    title: "Hospital Interior",
    description:
      "A thoughtfully presented healthcare environment focused on cleanliness, comfort, and accessibility.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    alt: "Hospital interior and healthcare facilities",
    icon: "＋",
  },
];

function Facilities() {
  return (
    <main className="facilities-page">
      {/* HERO */}
      <section className="facilities-hero">
        <div className="facilities-container facilities-hero-grid">
          <div className="facilities-hero-copy">
            <span className="facilities-eyebrow">
              <span className="facilities-eyebrow-line" />
              SRI SHAKTHI HOSPITAL & HEALTHCARE
            </span>

            <h1>
              Thoughtfully
              <span>Designed.</span>
              <span>Patient Focused.</span>
            </h1>

            <p className="facilities-hero-description">
              Discover a welcoming healthcare environment with spaces
              designed around patient comfort, professional care, and
              thoughtful attention at every step.
            </p>

            <div className="facilities-hero-actions">
              <a href="#facility-list" className="facilities-button">
                Explore Our Facilities <span>↗</span>
              </a>

              <Link to="/contact" className="facilities-secondary-link">
                Contact Our Team <span>⟶</span>
              </Link>
            </div>

            <div className="facilities-trust-list">
              <span><b>✓</b> Patient comfort</span>
              <span><b>✓</b> Thoughtful care</span>
              <span><b>✓</b> Welcoming spaces</span>
            </div>
          </div>

          <div className="facilities-hero-visual">
            <div className="facilities-hero-outline" />

            <div className="facilities-hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=90"
                alt="Hospital interior and patient care environment"
                className="facilities-hero-image"
              />

              <div className="facilities-hero-image-shade" />

              <div className="facilities-hero-image-label">
                <div className="facilities-label-icon">✚</div>
                <div>
                  <strong>Care Comes First</strong>
                  <span>Comfort · Care · Confidence</span>
                </div>
              </div>
            </div>

            <div className="facilities-floating-note">
              <span className="facilities-note-icon">♡</span>
              <div>
                <strong>Every Patient Matters</strong>
                <p>Compassion in every interaction</p>
              </div>
            </div>

            <span className="facilities-vertical-text">
              SRI SHAKTHI HOSPITAL
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="facilities-intro">
        <div className="facilities-container facilities-intro-grid">
          <div>
            <span className="facilities-eyebrow">
              <span className="facilities-eyebrow-line" />
              OUR ENVIRONMENT
            </span>

            <h2 className="facilities-heading">
              A space for care.
              <span>A place for comfort.</span>
            </h2>
          </div>

          <p className="facilities-intro-text">
            The healthcare environment matters. From the first welcome
            to the spaces where consultations take place, each area
            should help patients feel informed, comfortable, and respected.
            Explore the facilities and care spaces presented below.
          </p>
        </div>
      </section>

      {/* FACILITY IMAGE CARDS */}
      <section
        className="facilities-list-section"
        id="facility-list"
      >
        <div className="facilities-container">
          <div className="facilities-section-header">
            <div>
              <span className="facilities-eyebrow">
                <span className="facilities-eyebrow-line" />
                INSIDE OUR HOSPITAL
              </span>

              <h2 className="facilities-heading">
                Facilities & <span>Care Spaces</span>
              </h2>
            </div>

            <p>
              Explore the spaces that contribute to a welcoming and
              patient-focused healthcare experience.
            </p>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility) => (
              <article
                className="facility-card"
                key={facility.number}
              >
                <div className="facility-card-image-wrap">
                  <img
                    className="facility-card-image"
                    src={facility.image}
                    alt={facility.alt}
                    loading="lazy"
                  />

                  <span className="facility-number">
                    {facility.number}
                  </span>

                  <span className="facility-image-icon">
                    {facility.icon}
                  </span>
                </div>

                <div className="facility-card-content">
                  <span className="facility-category">
                    {facility.category}
                  </span>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <div className="facility-card-footer">
                    <span>Patient-focused environment</span>
                    <span className="facility-card-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE AND TEXT FEATURE */}
      <section className="facilities-feature">
        <div className="facilities-container facilities-feature-grid">
          <div className="facilities-feature-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professionals working in a clinical environment"
              className="facilities-feature-image"
              loading="lazy"
            />

            <div className="facilities-feature-badge">
              <span>✚</span>
              <div>
                <strong>Thoughtful Healthcare</strong>
                <small>Care with compassion</small>
              </div>
            </div>
          </div>

          <div className="facilities-feature-copy">
            <span className="facilities-eyebrow">
              <span className="facilities-eyebrow-line" />
              COMFORT IN EVERY DETAIL
            </span>

            <h2 className="facilities-heading">
              Where thoughtful
              <span> spaces meet</span>
              compassionate care.
            </h2>

            <p>
              A welcoming hospital environment is about more than
              appearance. Clear spaces, comfortable surroundings,
              respectful communication, and attention to patient
              needs all contribute to the overall experience.
            </p>

            <ul className="facilities-feature-points">
              <li>
                <span>✓</span>
                A welcoming experience for patients and visitors
              </li>
              <li>
                <span>✓</span>
                Spaces designed around comfort and privacy
              </li>
              <li>
                <span>✓</span>
                A patient-focused approach to healthcare
              </li>
            </ul>

            <Link to="/services" className="facilities-button">
              Discover Our Services <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="facilities-cta">
        <div className="facilities-cta-decoration" />

        <div className="facilities-container facilities-cta-content">
          <span className="facilities-cta-eyebrow">
            SRI SHAKTHI HOSPITAL & HEALTHCARE
          </span>

          <h2>
            Your care journey
            <span> starts with a conversation.</span>
          </h2>

          <p>
            Contact our team to learn more about our facilities,
            healthcare services, and appointment options.
          </p>

          <div className="facilities-cta-actions">
            <Link to="/contact" className="facilities-cta-button">
              Contact Our Team <span>↗</span>
            </Link>

            <Link to="/doctor" className="facilities-cta-outline">
              Meet Our Doctor <span>⟶</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Facilities;
