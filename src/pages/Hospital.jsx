import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Activity,
  Users,
  Building2,
  Clock,
  Target,
  Eye,
  CheckCircle2,
  CalendarCheck,
  Phone,
  Sparkles,
} from "lucide-react";

import "./Hospital.css";

const galleryImages = [
  {
    image:
      "https://www.srisakthihospital.com/assets/patient-checkup-CrqMkL7N.png",
    title: "Patient Consultation",
    category: "Patient Care",
  },
  {
    image:
      "https://www.srisakthihospital.com/assets/health-camp-1-mlldPQ3e.png",
    title: "Health Camp",
    category: "Community Care",
  },
  {
    image:
      "https://www.srisakthihospital.com/assets/medical-equipment-DRN-Mx4T.png",
    title: "Medical Equipment",
    category: "Hospital Facilities",
  },
  {
    image:
      "https://www.srisakthihospital.com/assets/health-camp-2-BgEvkZ-y.png",
    title: "Health Awareness",
    category: "Health Services",
  },
  {
    image:
      "https://www.srisakthihospital.com/assets/team-photo-By9lxQN_.png",
    title: "Our Hospital Team",
    category: "Our Team",
  },
];

const facilities = [
  {
    icon: Stethoscope,
    title: "Consultation Rooms",
    description:
      "Comfortable consultation spaces designed for personal attention and medical guidance.",
  },
  {
    icon: Building2,
    title: "Inpatient Care",
    description:
      "Patient-focused inpatient services with attention to comfort and care.",
  },
  {
    icon: Activity,
    title: "Diagnostic Laboratory",
    description:
      "Diagnostic support to help doctors understand and manage patient health.",
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    description:
      "Medical assistance for patients who require urgent attention.",
  },
];

const clinicalStrengths = [
  "Family Medicine",
  "Internal Medicine",
  "Clinical Diabetology",
  "Infectious Diseases",
];

function Hospital() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hospital-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("hospital-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hospital-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="hospital-page">

      {/* ================= HERO SECTION ================= */}

      <section className="hospital-hero">
        <div className="hospital-hero-background"></div>
        <div className="hospital-hero-overlay"></div>

        <div className="hospital-container hospital-hero-content">
          <div className="hospital-hero-text">
            <span className="hospital-eyebrow">
              <HeartPulse size={17} />
              WELCOME TO SRI SAKTHI HOSPITAL
            </span>

            <h1>
              Quality Healthcare.
              <span> Compassionate Care.</span>
            </h1>

            <p className="hospital-hero-description">
              Your health is our priority. We are committed to providing
              patient-focused healthcare with compassion, dedication,
              and professional medical attention.
            </p>

            <div className="hospital-hero-buttons">
              <Link to="/appointment" className="hospital-btn hospital-btn-primary">
                <CalendarCheck size={18} />
                Book Appointment
                <ArrowRight size={17} />
              </Link>

              <Link to="/services" className="hospital-btn hospital-btn-outline">
                Explore Services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hospital-hero-trust">
              <div>
                <ShieldCheck size={20} />
                <span>Patient First</span>
              </div>

              <div>
                <HeartPulse size={20} />
                <span>Compassionate Care</span>
              </div>
            </div>
          </div>

          <div className="hospital-hero-image">
            <img
              src="https://www.srisakthihospital.com/assets/patient-checkup-CrqMkL7N.png"
              alt="Patient receiving medical consultation"
            />

            <div className="hospital-image-badge">
              <span className="hospital-badge-icon">
                <HeartPulse size={25} />
              </span>

              <div>
                <strong>Care With Commitment</strong>
                <small>Your health matters to us</small>
              </div>
            </div>
          </div>
        </div>

        <div className="hospital-hero-bottom"></div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="hospital-intro hospital-section">
        <div className="hospital-container hospital-intro-grid">

          <div className="hospital-intro-visual hospital-reveal">
            <div className="hospital-intro-image">
              <img
                src="https://www.srisakthihospital.com/assets/medical-equipment-DRN-Mx4T.png"
                alt="Hospital medical equipment"
              />
            </div>

            <div className="hospital-experience-card">
              <HeartPulse size={27} />
              <div>
                <strong>Patient Focused</strong>
                <span>Care with compassion</span>
              </div>
            </div>
          </div>

          <div className="hospital-intro-copy hospital-reveal">
            <span className="hospital-section-label">
              ABOUT OUR HOSPITAL
            </span>

            <h2>
              Healthcare With a
              <span> Human Touch</span>
            </h2>

            <p>
              Sri Sakthi Hospital is committed to delivering quality
              healthcare with a focus on patient comfort, medical care,
              and individual attention.
            </p>

            <p>
              We believe that good healthcare is built on trust,
              understanding, and a compassionate approach towards
              every patient.
            </p>

            <div className="hospital-intro-points">
              <div>
                <CheckCircle2 size={19} />
                Patient-centred approach
              </div>

              <div>
                <CheckCircle2 size={19} />
                Professional medical guidance
              </div>

              <div>
                <CheckCircle2 size={19} />
                Comfortable healthcare environment
              </div>
            </div>

            <Link to="/about" className="hospital-text-link">
              Discover More About Us
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= VISION AND MISSION ================= */}

      <section className="hospital-purpose hospital-section">
        <div className="hospital-container">

          <div className="hospital-section-heading hospital-reveal">
            <span className="hospital-section-label">
              OUR PURPOSE
            </span>

            <h2>
              Guided By Care,
              <span> Driven By Commitment</span>
            </h2>

            <p>
              Our approach is centred on providing meaningful,
              responsible, and compassionate healthcare.
            </p>
          </div>

          <div className="hospital-purpose-grid">

            <article className="hospital-purpose-card hospital-reveal">
              <div className="hospital-purpose-icon">
                <Eye size={30} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To be a trusted healthcare provider focused on
                patient well-being, quality medical attention,
                and compassionate service.
              </p>
            </article>

            <article className="hospital-purpose-card hospital-purpose-highlight hospital-reveal">
              <div className="hospital-purpose-icon">
                <Target size={30} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To deliver accessible and patient-focused healthcare
                through professional medical guidance, dedication,
                and a commitment to every patient's needs.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section className="hospital-gallery hospital-section">
        <div className="hospital-container">

          <div className="hospital-section-heading hospital-reveal">
            <span className="hospital-section-label">
              OUR GALLERY
            </span>

            <h2>
              A Look Inside
              <span> Sri Sakthi Hospital</span>
            </h2>

            <p>
              Explore moments of patient care, hospital activities,
              and our healthcare environment.
            </p>
          </div>

          <div className="hospital-gallery-grid">
            {galleryImages.map((item, index) => (
              <article
                className={`hospital-gallery-card hospital-gallery-card-${index + 1} hospital-reveal`}
                key={item.title}
                style={{ "--card-delay": `${index * 100}ms` }}
              >
                <div className="hospital-gallery-image">
                  <img src={item.image} alt={item.title} />

                  <div className="hospital-gallery-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="hospital-gallery-action hospital-reveal">
            <Link to="/gallery" className="hospital-btn hospital-btn-dark">
              View Complete Gallery
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FACILITIES ================= */}

      <section className="hospital-facilities hospital-section">
        <div className="hospital-container">

          <div className="hospital-section-heading hospital-reveal">
            <span className="hospital-section-label">
              OUR FACILITIES
            </span>

            <h2>
              Supporting Your
              <span> Healthcare Needs</span>
            </h2>

            <p>
              Our healthcare facilities are designed to support
              patient care and medical services.
            </p>
          </div>

          <div className="hospital-facility-grid">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <article
                  className="hospital-facility-card hospital-reveal"
                  key={facility.title}
                  style={{ "--card-delay": `${index * 100}ms` }}
                >
                  <div className="hospital-facility-icon">
                    <Icon size={29} />
                  </div>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>

                  <Link to="/services" className="hospital-card-link">
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= CLINICAL STRENGTHS ================= */}

      <section className="hospital-clinical hospital-section">
        <div className="hospital-container hospital-clinical-grid">

          <div className="hospital-clinical-intro hospital-reveal">
            <span className="hospital-section-label">
              MEDICAL EXPERTISE
            </span>

            <h2>
              Focused On
              <span> Better Health</span>
            </h2>

            <p>
              Medical expertise and individual attention play an
              important role in understanding and managing health
              concerns.
            </p>

            <Link to="/doctor" className="hospital-btn hospital-btn-primary">
              Meet Our Doctor
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hospital-clinical-list">
            {clinicalStrengths.map((strength, index) => (
              <div
                className="hospital-clinical-card hospital-reveal"
                key={strength}
                style={{ "--card-delay": `${index * 100}ms` }}
              >
                <span className="hospital-clinical-number">
                  0{index + 1}
                </span>

                <div className="hospital-clinical-icon">
                  <Stethoscope size={23} />
                </div>

                <h3>{strength}</h3>

                <ArrowRight className="hospital-clinical-arrow" size={20} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PATIENT CARE PROMISE ================= */}

      <section className="hospital-promise">
        <div className="hospital-promise-background"></div>

        <div className="hospital-container hospital-promise-inner hospital-reveal">
          <div className="hospital-promise-icon">
            <Sparkles size={35} />
          </div>

          <span className="hospital-section-label">
            OUR COMMITMENT
          </span>

          <h2>
            Your Health.
            <span> Our Commitment.</span>
          </h2>

          <p>
            Every patient deserves care, respect, and attention.
            At Sri Sakthi Hospital, we are committed to making
            your healthcare experience supportive and comfortable.
          </p>

          <Link to="/appointment" className="hospital-btn hospital-btn-light">
            Schedule an Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= OPD TIMINGS ================= */}

      <section className="hospital-timings hospital-section">
        <div className="hospital-container hospital-timings-inner hospital-reveal">

          <div className="hospital-timing-icon">
            <Clock size={35} />
          </div>

          <div className="hospital-timing-content">
            <span className="hospital-section-label">
              VISIT OUR HOSPITAL
            </span>

            <h2>OPD Consultation Timings</h2>

            <p>
              Monday to Saturday
            </p>

            <div className="hospital-timing-slots">
              <span>9:00 AM – 12:30 PM</span>
              <span>5:30 PM – 9:00 PM</span>
            </div>
          </div>

          <div className="hospital-timing-action">
            <a href="tel:9494456007" className="hospital-btn hospital-btn-primary">
              <Phone size={18} />
              Call 9494456007
            </a>

            <Link to="/contact" className="hospital-text-link">
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Hospital;