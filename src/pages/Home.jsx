import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const services = [
  {
    number: "01",
    icon: "🩺",
    title: "General Consultation",
    description:
      "Personalised consultations, health assessments and treatment guidance focused on your wellbeing.",
  },
  {
    number: "02",
    icon: "❤️",
    title: "Family Medicine",
    description:
      "Comprehensive healthcare for individuals and families at every stage of life.",
  },
  {
    number: "03",
    icon: "🏥",
    title: "Inpatient Care",
    description:
      "Comfortable hospital care with professional medical attention and patient support.",
  },
  {
    number: "04",
    icon: "🔬",
    title: "Diagnostic Services",
    description:
      "Diagnostic support to help doctors assess health conditions and guide treatment.",
  },
  {
    number: "05",
    icon: "💊",
    title: "Preventive Healthcare",
    description:
      "Health check-ups and medical guidance to help you maintain a healthier lifestyle.",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Patient Support",
    description:
      "Friendly assistance and clear communication throughout your healthcare journey.",
  },
];

const facilities = [
  {
    number: "01",
    title: "Modern Medical Environment",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=85",
    description: "A professional clinical environment.",
  },
  {
    number: "02",
    title: "Quality Medical Care",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
    description: "Focused on quality and patient safety.",
  },
  {
    number: "03",
    title: "Patient Care Facilities",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    description: "Designed around patient comfort.",
  },
];

const values = [
  "Personalised attention for every patient",
  "Experienced and dedicated medical care",
  "Clear communication and guidance",
  "A welcoming and supportive environment",
];

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function Home() {
  return (
    <main className="hospital-home">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-background-circle hero-circle-one" />
        <div className="hero-background-circle hero-circle-two" />

        <div className="home-container hero-grid">
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="kicker-line" />
              COMPASSIONATE HEALTHCARE
            </div>

            <h1>
              Your Health.
              <br />
              Our <span>Priority.</span>
            </h1>

            <p className="hero-description">
              Exceptional medical care begins with understanding. We are
              committed to providing compassionate attention, trusted medical
              guidance and a better healthcare experience for every patient.
            </p>

            <div className="hero-buttons">
              <Link to="/appointment" className="btn btn-primary">
                Book an Appointment
                <span className="button-arrow">↗</span>
              </Link>

              <Link to="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>

            <div className="hero-assurance">
              <span className="assurance-icon">✓</span>
              Patient-focused care
              <span className="assurance-divider" />
              Trusted medical guidance
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
                className="hero-doctor-image"
                fetchPriority="high"
              />

              <div className="hero-image-overlay" />

              <div className="doctor-image-caption">
                <span className="caption-line" />
                <div>
                  <p>Dedicated to Your Health</p>
                  <span>Care with compassion</span>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">✚</span>
              <div>
                <strong>Patient First</strong>
                <small>Care that matters</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-check">✓</span>
              <div>
                <strong>Personalised Care</strong>
                <small>Focused on your wellbeing</small>
              </div>
            </div>

            <div className="hero-orbit" />
          </div>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* TRUST STRIP */}
      <section className="trust-section">
        <div className="home-container trust-grid">
          <div className="trust-item">
            <span className="trust-icon">♡</span>
            <div>
              <h3>Compassion First</h3>
              <p>Every patient matters</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">✚</span>
            <div>
              <h3>Medical Expertise</h3>
              <p>Professional healthcare</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">◈</span>
            <div>
              <h3>Patient Comfort</h3>
              <p>A welcoming environment</p>
            </div>
          </div>

          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <div>
              <h3>Trusted Guidance</h3>
              <p>Care with clarity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section section-padding">
        <div className="home-container about-grid">
          <div className="about-visual">
            <div className="about-image-main">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85"
                alt="Healthcare professional providing medical care"
                loading="lazy"
              />
            </div>

            <div className="about-image-decoration" />

            <div className="about-note">
              <span className="about-note-icon">✦</span>
              <div>
                <strong>Care With Purpose</strong>
                <p>People at the heart of healthcare</p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <SectionLabel>WELCOME TO SRI SHAKTHI HOSPITAL</SectionLabel>

            <h2 className="section-title">
              Healthcare built on
              <br />
              <span>trust and compassion.</span>
            </h2>

            <p className="section-description">
              At Sri Shakthi Hospital, we believe healthcare should be
              professional, accessible and personal. Our approach places
              patients at the centre of every consultation and healthcare
              decision.
            </p>

            <p className="section-description">
              We aim to help patients understand their health, make informed
              decisions and receive attentive medical care in a supportive
              environment.
            </p>

            <div className="values-list">
              {values.map((value, index) => (
                <div className="value-item" key={value}>
                  <span className="value-check">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{value}</span>
                  <span className="value-arrow">↗</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="text-link">
              Discover Our Hospital <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section section-padding" id="services">
        <div className="home-container">
          <div className="section-heading-center">
            <SectionLabel>OUR MEDICAL SERVICES</SectionLabel>

            <h2 className="section-title">
              Thoughtful care for
              <br />
              <span>your health journey.</span>
            </h2>

            <p className="section-description">
              Explore our healthcare services, delivered with attention,
              professionalism and a commitment to patient wellbeing.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to="/services"
                  className="service-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <span>↗</span>
                </Link>

                <div className="service-card-bottom-line" />
              </article>
            ))}
          </div>

          <div className="services-bottom">
            <p>Looking for the right medical service?</p>
            <Link to="/contact" className="text-link">
              Talk to Our Team <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section className="doctor-section section-padding">
        <div className="home-container doctor-grid">
          <div className="doctor-content">
            <SectionLabel>MEET YOUR DOCTOR</SectionLabel>

            <h2 className="section-title">
              Experience guided by
              <br />
              <span>care and understanding.</span>
            </h2>

            <p className="section-description">
              Meet our medical professional, dedicated to providing
              personalised consultations and thoughtful medical guidance.
            </p>

            <div className="doctor-profile">
              <div className="doctor-profile-line" />
              <div>
                <h3>Dr. Sakthi Narasimha Garikapati</h3>
                <p className="doctor-qualification">
                  MBBS, DNB Family Medicine, FCD, FIIM, PGPID
                </p>
                <span className="doctor-speciality">
                  Family &amp; Internal Medicine
                </span>
              </div>
            </div>

            <div className="doctor-details">
              <div className="doctor-detail">
                <span>01</span>
                <div>
                  <strong>Consultation</strong>
                  <p>Personalised medical guidance</p>
                </div>
              </div>

              <div className="doctor-detail">
                <span>02</span>
                <div>
                  <strong>Communication</strong>
                  <p>Telugu, English and Hindi</p>
                </div>
              </div>
            </div>

            <Link to="/doctor" className="btn btn-primary">
              Meet Our Doctor <span className="button-arrow">↗</span>
            </Link>
          </div>

          <div className="doctor-visual">
            <div className="doctor-image-border" />

            <div className="doctor-image-wrap">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati, Family and Internal Medicine"
                loading="lazy"
              />
            </div>

            <div className="doctor-stamp">
              <span className="stamp-symbol">✚</span>
              <span>CARE</span>
              <span>WITH</span>
              <span>COMPASSION</span>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="facilities-section section-padding">
        <div className="home-container">
          <div className="facilities-heading">
            <div>
              <SectionLabel>OUR FACILITIES</SectionLabel>
              <h2 className="section-title">
                A welcoming environment
                <br />
                <span>for better care.</span>
              </h2>
            </div>

            <Link to="/facilities" className="btn btn-outline">
              Explore Facilities <span className="button-arrow">↗</span>
            </Link>
          </div>

          <div className="facilities-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility.number}>
                <div className="facility-image">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    loading="lazy"
                  />

                  <span className="facility-index">{facility.number}</span>
                  <div className="facility-image-overlay" />
                </div>

                <div className="facility-info">
                  <div>
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>

                  <Link
                    to="/facilities"
                    className="facility-arrow"
                    aria-label={`Explore ${facility.title}`}
                  >
                    ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="appointment-section">
        <div className="appointment-decoration appointment-decoration-one" />
        <div className="appointment-decoration appointment-decoration-two" />

        <div className="home-container appointment-content">
          <div className="appointment-icon">✚</div>

          <SectionLabel>YOUR WELLBEING MATTERS</SectionLabel>

          <h2>
            Your health deserves
            <br />
            <span>thoughtful attention.</span>
          </h2>

          <p>
            Take the next step towards better health. Contact our hospital
            team to enquire about appointments and available medical services.
          </p>

          <div className="appointment-buttons">
            <Link to="/appointment" className="btn btn-light">
              Request an Appointment <span>↗</span>
            </Link>

            <Link to="/contact" className="btn btn-transparent">
              Contact Our Hospital
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;