import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const services = [
  {
    number: "01",
    icon: "✚",
    title: "General Medicine",
    description:
      "Personalized medical consultations focused on understanding your symptoms and supporting your overall health.",
    link: "/services",
  },
  {
    number: "02",
    icon: "♡",
    title: "Family Healthcare",
    description:
      "Thoughtful healthcare for individuals and families, with attention to every patient's unique needs.",
    link: "/services",
  },
  {
    number: "03",
    icon: "✚",
    title: "Emergency Care",
    description:
      "Prompt medical attention and guidance when unexpected health concerns require immediate assessment.",
    link: "/services",
  },
  {
    number: "04",
    icon: "⌕",
    title: "Diagnostic Services",
    description:
      "Medical evaluation and appropriate diagnostic support to help guide informed healthcare decisions.",
    link: "/services",
  },
];

const highlights = [
  {
    number: "01",
    title: "Patient First",
    description:
      "Every patient deserves respect, understanding, and individual attention.",
  },
  {
    number: "02",
    title: "Trusted Guidance",
    description:
      "Clear communication and thoughtful medical guidance at every step.",
  },
  {
    number: "03",
    title: "Compassionate Care",
    description:
      "A caring approach that recognizes the person behind every health concern.",
  },
];

function Home() {
  return (
    <main className="ss-home">
      {/* ================= HERO SECTION ================= */}

      <section className="ss-hero">
        <div className="ss-hero-pattern"></div>

        <div className="ss-hero-container">
          <div className="ss-hero-content">
            <div className="ss-eyebrow ss-hero-eyebrow">
              <span className="ss-eyebrow-line"></span>
              WELCOME TO SRI SAKTHI HOSPITAL
            </div>

            <h1 className="ss-hero-title">
              Your Health.
              <br />
              Our <span>Commitment.</span>
            </h1>

            <p className="ss-hero-description">
              Quality healthcare begins with trust, understanding, and
              personal attention. At Sri Sakthi Hospital, we believe
              every patient deserves compassionate care, thoughtful
              medical guidance, and respect.
            </p>

            <div className="ss-hero-buttons">
              <Link to="/appointment" className="ss-button ss-button-gold">
                <span>Request an Appointment</span>
                <span className="ss-button-arrow">↗</span>
              </Link>

              <Link to="/services" className="ss-button ss-button-outline">
                <span>Explore Our Services</span>
                <span className="ss-button-arrow">→</span>
              </Link>
            </div>

            <div className="ss-hero-trust">
              <div className="ss-trust-icon">✚</div>

              <div>
                <h3>Healthcare with a Human Touch</h3>
                <p>Listening carefully. Caring thoughtfully.</p>
              </div>
            </div>
          </div>

          {/* Doctor portrait */}

          <div className="ss-hero-visual">
            <div className="ss-visual-decoration ss-decoration-one"></div>
            <div className="ss-visual-decoration ss-decoration-two"></div>

            <div className="ss-doctor-frame">
              <div className="ss-doctor-top-label">
                <span className="ss-label-dot"></span>
                YOUR HEALTHCARE PARTNER
              </div>

              <div className="ss-doctor-image-wrap">
                <img
                  src={doctorImage}
                  alt="Doctor at Sri Sakthi Hospital"
                  className="ss-doctor-image"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="ss-doctor-image-overlay"></div>

                <div className="ss-doctor-monogram" aria-hidden="true">
                  S<span>+</span>
                </div>
              </div>

              <div className="ss-doctor-caption">
                <div className="ss-caption-number">S+</div>

                <div className="ss-caption-content">
                  <span>CARE YOU CAN TRUST</span>
                  <h3>Compassion in Every Consultation</h3>
                  <p>Professional care. Personal attention.</p>
                </div>

                <div className="ss-caption-symbol">↗</div>
              </div>
            </div>

            <div className="ss-floating-card">
              <span className="ss-floating-icon">✚</span>

              <div>
                <strong>Patient-Centred Care</strong>
                <p>Your well-being matters.</p>
              </div>
            </div>

            <div className="ss-visual-side-label">
              QUALITY · TRUST · CARE
            </div>
          </div>
        </div>

        <div className="ss-hero-bottom">
          <span>COMPASSIONATE CARE</span>
          <div className="ss-bottom-line"></div>
          <span>YOUR HEALTH MATTERS</span>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="ss-intro section-padding">
        <div className="ss-container ss-intro-grid">
          <div className="ss-intro-heading">
            <div className="ss-eyebrow">
              <span className="ss-eyebrow-line"></span>
              OUR APPROACH TO HEALTHCARE
            </div>

            <h2 className="ss-section-title">
              Care That Begins
              <br />
              With <span>Understanding.</span>
            </h2>
          </div>

          <div className="ss-intro-content">
            <p>
              Good healthcare is more than treating an illness. It is
              about listening to patients, understanding their concerns,
              and helping them make informed decisions about their health.
            </p>

            <p>
              At Sri Sakthi Hospital, our approach combines medical
              attention with compassion, dignity, and clear communication.
              We aim to make every patient's healthcare journey more
              comfortable and reassuring.
            </p>

            <Link to="/about" className="ss-text-link">
              Discover Our Approach <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="ss-container">
          <div className="ss-highlight-grid">
            {highlights.map((item) => (
              <article className="ss-highlight-card" key={item.number}>
                <span className="ss-highlight-number">{item.number}</span>

                <div className="ss-highlight-rule"></div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="ss-highlight-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}

      <section className="ss-services section-padding">
        <div className="ss-container">
          <div className="ss-section-heading">
            <div>
              <div className="ss-eyebrow ss-eyebrow-light">
                <span className="ss-eyebrow-line"></span>
                OUR MEDICAL SERVICES
              </div>

              <h2 className="ss-section-title ss-title-light">
                Healthcare for
                <br />
                <span>Your Well-Being.</span>
              </h2>
            </div>

            <div className="ss-section-heading-right">
              <p>
                Thoughtful medical care focused on your concerns,
                your comfort, and your individual healthcare needs.
              </p>

              <Link to="/services" className="ss-light-link">
                View All Services <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="ss-service-grid">
            {services.map((service) => (
              <article className="ss-service-card" key={service.number}>
                <div className="ss-service-card-top">
                  <span className="ss-service-number">
                    {service.number}
                  </span>

                  <span className="ss-service-icon">{service.icon}</span>
                </div>

                <div className="ss-service-divider"></div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to={service.link} className="ss-service-link">
                  Learn More <span>↗</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="ss-services-bottom">
            <span className="ss-services-bottom-mark">S+</span>

            <p>
              Every patient deserves attention, understanding, and
              a healthcare experience built around their needs.
            </p>

            <Link to="/appointment" className="ss-services-appointment">
              Plan Your Visit <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DOCTOR SECTION ================= */}

      <section className="ss-doctor-section section-padding">
        <div className="ss-container ss-doctor-grid">
          <div className="ss-doctor-profile-visual">
            <div className="ss-profile-frame">
              <div className="ss-profile-top">
                <span>MEDICAL PROFESSIONAL</span>
                <span>01 / SRI SAKTHI</span>
              </div>

              <div className="ss-profile-photo">
                <img
                  src={doctorImage}
                  alt="Sri Sakthi Hospital doctor"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="ss-profile-photo-fallback">
                  <span>S+</span>
                  <p>YOUR HEALTHCARE PARTNER</p>
                </div>
              </div>

              <div className="ss-profile-bottom">
                <span>MEDICAL CARE</span>
                <span>TRUST & COMPASSION</span>
              </div>
            </div>

            <div className="ss-profile-stamp">
              <span>CARE</span>
              <strong>WITH</strong>
              <span>TRUST</span>
            </div>
          </div>

          <div className="ss-doctor-profile-content">
            <div className="ss-eyebrow">
              <span className="ss-eyebrow-line"></span>
              MEET YOUR DOCTOR
            </div>

            <h2 className="ss-section-title">
              Medical Care
              <br />
              With <span>Compassion.</span>
            </h2>

            <p className="ss-doctor-intro">
              Meet Dr. Sakthi Narasimha Garikapati, whose medical
              qualifications and patient-focused approach support
              thoughtful healthcare and informed medical decisions.
            </p>

            <div className="ss-qualification-box">
              <span className="ss-qualification-icon">✚</span>

              <div>
                <h3>Dr. Sakthi Narasimha Garikapati</h3>

                <p>
                  MBBS, DNB Family Medicine, FCD, FIIM, PGPID
                </p>

                <span>Family & Internal Medicine</span>
              </div>
            </div>

            <div className="ss-doctor-values">
              <div>
                <span className="ss-value-check">✓</span>
                Patient-focused consultations
              </div>

              <div>
                <span className="ss-value-check">✓</span>
                Clear medical communication
              </div>

              <div>
                <span className="ss-value-check">✓</span>
                Compassionate healthcare guidance
              </div>
            </div>

            <Link to="/doctor" className="ss-button ss-button-navy">
              <span>Meet Our Doctor</span>
              <span className="ss-button-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PATIENT EXPERIENCE ================= */}

      <section className="ss-experience">
        <div className="ss-container ss-experience-grid">
          <div className="ss-experience-main">
            <div className="ss-eyebrow ss-eyebrow-light">
              <span className="ss-eyebrow-line"></span>
              THE SRI SAKTHI EXPERIENCE
            </div>

            <h2>
              More Than Treatment.
              <br />
              <span>A Commitment to You.</span>
            </h2>

            <p>
              Your healthcare journey should begin with confidence.
              We are committed to listening carefully, explaining
              thoughtfully, and treating every patient with respect.
            </p>

            <Link to="/about" className="ss-button ss-button-gold">
              <span>Learn About Our Hospital</span>
              <span className="ss-button-arrow">↗</span>
            </Link>
          </div>

          <div className="ss-experience-points">
            <div className="ss-experience-point">
              <span>01</span>
              <div>
                <h3>Listen Carefully</h3>
                <p>We value your concerns and your questions.</p>
              </div>
            </div>

            <div className="ss-experience-point">
              <span>02</span>
              <div>
                <h3>Guide Thoughtfully</h3>
                <p>Understand your options and next steps.</p>
              </div>
            </div>

            <div className="ss-experience-point">
              <span>03</span>
              <div>
                <h3>Care Respectfully</h3>
                <p>Your dignity and comfort matter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPOINTMENT CTA ================= */}

      <section className="ss-appointment-section">
        <div className="ss-container">
          <div className="ss-appointment-box">
            <div className="ss-appointment-decoration"></div>

            <div className="ss-appointment-content">
              <div className="ss-eyebrow">
                <span className="ss-eyebrow-line"></span>
                YOUR NEXT STEP
              </div>

              <h2>
                Take a Step Toward
                <br />
                <span>Better Healthcare.</span>
              </h2>

              <p>
                Have a healthcare question or planning a consultation?
                Contact Sri Sakthi Hospital to discuss your visit.
              </p>
            </div>

            <div className="ss-appointment-actions">
              <Link
                to="/appointment"
                className="ss-button ss-button-navy"
              >
                <span>Request an Appointment</span>
                <span className="ss-button-arrow">↗</span>
              </Link>

              <Link to="/contact" className="ss-contact-link">
                Contact Our Hospital <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;