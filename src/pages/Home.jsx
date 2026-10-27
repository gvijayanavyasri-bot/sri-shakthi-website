import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Clock3,
  Activity,
  Microscope,
  BedDouble,
  Pill,
  Ambulance,
  PhoneCall,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  ClipboardPlus,
  MapPin,
  Languages,
  Award,
  ChevronRight,
} from "lucide-react";

import "./Home.css";

const DOCTOR_IMAGE =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const services = [
  {
    icon: <Stethoscope />,
    title: "General Medicine",
    description:
      "Medical consultation and treatment for common illnesses and general health concerns.",
  },
  {
    icon: <HeartPulse />,
    title: "Family & Internal Medicine",
    description:
      "Patient-focused care for adults and families, with attention to overall well-being.",
  },
  {
    icon: <Activity />,
    title: "Clinical Diabetology",
    description:
      "Support for diabetes assessment, monitoring, and ongoing management.",
  },
  {
    icon: <Microscope />,
    title: "Diagnostic Services",
    description:
      "Diagnostic support to help doctors assess health conditions and plan treatment.",
  },
  {
    icon: <BedDouble />,
    title: "Inpatient Care",
    description:
      "Hospital care and monitoring for patients who require admission.",
  },
  {
    icon: <Ambulance />,
    title: "Emergency Assistance",
    description:
      "Prompt medical assessment and assistance for urgent health concerns.",
  },
];

const facilities = [
  "Consultation Rooms",
  "Inpatient Care",
  "Diagnostic Laboratory",
  "Day Care Services",
  "IV Therapy & Nebulization",
  "Emergency Assistance",
];

export default function Home() {
  return (
    <main className="sri-home">
      {/* ================= HERO SECTION ================= */}

      <section className="sri-hero">
        <div className="sri-hero-background"></div>
        <div className="sri-hero-overlay"></div>

        <div className="sri-hero-decoration sri-hero-decoration-one"></div>
        <div className="sri-hero-decoration sri-hero-decoration-two"></div>

        <div className="sri-container sri-hero-content">
          <div className="sri-hero-text">
            <span className="sri-eyebrow sri-hero-eyebrow">
              <HeartPulse size={17} />
              COMPASSIONATE CARE
            </span>

            <h1>
              WELCOME TO
              <span>SRI SAKTHI HOSPITAL</span>
            </h1>

            <h2>Your Health. Our Commitment.</h2>

            <p>
              Your health deserves attention, understanding, and care. At Sri
              Sakthi Hospital, we are committed to providing patient-focused
              medical care with compassion and respect.
            </p>

            <div className="sri-hero-buttons">
              <Link to="/appointment" className="sri-btn sri-btn-primary">
                <CalendarCheck size={19} />
                Book an Appointment
                <ArrowRight size={18} />
              </Link>

              <Link to="/services" className="sri-btn sri-btn-outline">
                Explore Services
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="sri-hero-trust">
              <div className="sri-trust-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <strong>Healthcare with a Human Touch</strong>
                <span>Care, compassion and commitment</span>
              </div>
            </div>
          </div>

          <div className="sri-hero-visual">
            <div className="sri-hero-circle">
              <div className="sri-hero-medical-icon">
                <HeartPulse size={105} strokeWidth={1.3} />
              </div>

              <div className="sri-hero-floating-card sri-floating-card-top">
                <span className="sri-floating-icon">
                  <ShieldCheck size={22} />
                </span>
                <div>
                  <strong>Patient First</strong>
                  <small>Care you can trust</small>
                </div>
              </div>

              <div className="sri-hero-floating-card sri-floating-card-bottom">
                <span className="sri-floating-icon">
                  <Stethoscope size={22} />
                </span>
                <div>
                  <strong>Medical Care</strong>
                  <small>Personal attention</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sri-hero-bottom">
          <span></span>
          <p>YOUR WELL-BEING MATTERS TO US</p>
          <span></span>
        </div>
      </section>

      {/* ================= QUICK HIGHLIGHTS ================= */}

      <section className="sri-highlights">
        <div className="sri-container sri-highlights-grid">
          <div className="sri-highlight-item">
            <div className="sri-highlight-icon">
              <HeartHandshake />
            </div>
            <div>
              <h3>Patient-Focused</h3>
              <p>Care with compassion</p>
            </div>
          </div>

          <div className="sri-highlight-item">
            <div className="sri-highlight-icon">
              <Stethoscope />
            </div>
            <div>
              <h3>Medical Consultation</h3>
              <p>Professional attention</p>
            </div>
          </div>

          <div className="sri-highlight-item">
            <div className="sri-highlight-icon">
              <Clock3 />
            </div>
            <div>
              <h3>OPD Services</h3>
              <p>Monday to Saturday</p>
            </div>
          </div>

          <div className="sri-highlight-item">
            <div className="sri-highlight-icon">
              <ShieldCheck />
            </div>
            <div>
              <h3>Trusted Care</h3>
              <p>Your health matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className="sri-section sri-about-section">
        <div className="sri-container sri-about-grid">
          <div className="sri-about-visual">
            <div className="sri-about-image-frame">
              <div className="sri-about-image-background">
                <HeartPulse size={82} strokeWidth={1.2} />
                <span>Compassionate Healthcare</span>
              </div>

              <img
                src={DOCTOR_IMAGE}
                alt="Doctor at Sri Sakthi Hospital"
                className="sri-about-doctor-image"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="sri-about-image-label">
                <HeartHandshake size={22} />
                <div>
                  <strong>Care with Compassion</strong>
                  <span>Your health comes first</span>
                </div>
              </div>
            </div>

            <div className="sri-about-decoration"></div>
          </div>

          <div className="sri-about-content">
            <span className="sri-eyebrow">
              <span className="sri-eyebrow-line"></span>
              ABOUT OUR HOSPITAL
            </span>

            <h2 className="sri-section-title">
              Your Health.
              <span> Our Commitment.</span>
            </h2>

            <p className="sri-section-description">
              At Sri Sakthi Hospital, we believe that quality healthcare begins
              with listening to patients and understanding their needs. Our
              approach focuses on medical attention, clear communication, and
              compassionate service.
            </p>

            <p className="sri-section-description">
              We aim to support patients through consultations, health
              assessments, treatment guidance, and continuing medical care.
            </p>

            <div className="sri-about-points">
              <div>
                <CheckCircle2 />
                <span>Patient-centred medical care</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Personal attention and guidance</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Focus on health and well-being</span>
              </div>
            </div>

            <Link to="/hospital" className="sri-text-link">
              Learn More About Our Hospital
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}

      <section className="sri-section sri-services-section">
        <div className="sri-container">
          <div className="sri-section-heading">
            <span className="sri-eyebrow">
              <span className="sri-eyebrow-line"></span>
              OUR MEDICAL SERVICES
            </span>

            <h2 className="sri-section-title">
              Care Designed Around
              <span> Your Health</span>
            </h2>

            <p className="sri-section-description">
              Explore our medical services designed to support your health
              needs with attention, guidance, and care.
            </p>
          </div>

          <div className="sri-services-grid">
            {services.map((service, index) => (
              <article
                className="sri-service-card"
                key={service.title}
                style={{ "--card-index": index }}
              >
                <div className="sri-service-icon">{service.icon}</div>

                <span className="sri-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to="/services"
                  className="sri-service-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>

          <div className="sri-services-footer">
            <p>Looking for more information about our medical services?</p>

            <Link to="/services" className="sri-btn sri-btn-dark">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DOCTOR SECTION ================= */}

      <section className="sri-section sri-doctor-section">
        <div className="sri-doctor-decoration sri-doctor-decoration-one"></div>
        <div className="sri-doctor-decoration sri-doctor-decoration-two"></div>

        <div className="sri-container sri-doctor-grid">
          <div className="sri-doctor-visual">
            <div className="sri-doctor-photo-frame">
              <div className="sri-doctor-photo-decoration"></div>

              <div className="sri-doctor-image-wrap">
                <img
                  src={DOCTOR_IMAGE}
                  alt="Dr. Sakthi Narasimha Garikapati"
                  className="sri-doctor-profile-image"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="sri-doctor-photo-badge">
                <span className="sri-doctor-status-dot"></span>
                <div>
                  <strong>Patient-Focused Care</strong>
                  <span>Professional medical guidance</span>
                </div>
              </div>
            </div>

            <div className="sri-doctor-experience-note">
              <HeartPulse size={25} />
              <span>Committed to Your Well-being</span>
            </div>
          </div>

          <div className="sri-doctor-content">
            <span className="sri-eyebrow">
              <span className="sri-eyebrow-line"></span>
              MEET YOUR DOCTOR
            </span>

            <h2 className="sri-section-title">
              Dr. Sakthi Narasimha
              <span> Garikapati</span>
            </h2>

            <p className="sri-doctor-speciality">
              Family & Internal Medicine
            </p>

            <p className="sri-section-description">
              Dedicated to providing thoughtful medical consultation,
              understanding patient concerns, and supporting individual health
              needs through professional medical care.
            </p>

            <div className="sri-doctor-qualifications">
              <div className="sri-qualification-icon">
                <Award size={24} />
              </div>

              <div>
                <strong>Professional Qualifications</strong>
                <p>MBBS, DNB Family Medicine, FCD, FIIM, PGPID</p>
              </div>
            </div>

            <div className="sri-doctor-details">
              <div>
                <Languages size={20} />
                <p>
                  <strong>Languages</strong>
                  <span>Telugu, English, Hindi</span>
                </p>
              </div>

              <div>
                <ClipboardPlus size={20} />
                <p>
                  <strong>Registration Number</strong>
                  <span>66982</span>
                </p>
              </div>
            </div>

            <div className="sri-doctor-buttons">
              <Link to="/about-doctor" className="sri-btn sri-btn-primary">
                About the Doctor
                <ArrowRight size={18} />
              </Link>

              <a href="tel:9494456007" className="sri-btn sri-btn-light">
                <PhoneCall size={18} />
                Call Hospital
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FACILITIES SECTION ================= */}

      <section className="sri-section sri-facilities-section">
        <div className="sri-container sri-facilities-grid">
          <div className="sri-facilities-content">
            <span className="sri-eyebrow">
              <span className="sri-eyebrow-line"></span>
              OUR FACILITIES
            </span>

            <h2 className="sri-section-title">
              Supporting Your
              <span> Healthcare Needs</span>
            </h2>

            <p className="sri-section-description">
              We aim to provide a supportive environment for consultations,
              medical assessments, and ongoing care.
            </p>

            <div className="sri-facility-list">
              {facilities.map((facility, index) => (
                <div className="sri-facility-item" key={facility}>
                  <span className="sri-facility-check">
                    <CheckCircle2 size={19} />
                  </span>

                  <span>{facility}</span>

                  <ChevronRight className="sri-facility-arrow" size={18} />
                </div>
              ))}
            </div>

            <Link to="/hospital" className="sri-text-link">
              Explore Hospital Facilities
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="sri-facilities-visual">
            <div className="sri-facilities-main-card">
              <div className="sri-facilities-symbol">
                <HeartPulse size={84} strokeWidth={1.4} />
              </div>

              <span className="sri-facilities-small-label">
                SRI SAKTHI HOSPITAL
              </span>

              <h3>Healthcare with a Human Touch</h3>

              <p>
                Professional attention, compassionate service, and a commitment
                to your well-being.
              </p>

              <div className="sri-facilities-bottom-line"></div>
            </div>

            <div className="sri-facilities-floating-icon">
              <ShieldCheck size={30} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= OPD SECTION ================= */}

      <section className="sri-opd-section">
        <div className="sri-container sri-opd-grid">
          <div className="sri-opd-heading">
            <div className="sri-opd-icon">
              <Clock3 size={31} />
            </div>

            <div>
              <span>PLAN YOUR VISIT</span>
              <h2>OPD Timings</h2>
            </div>
          </div>

          <div className="sri-opd-time">
            <span>Monday – Saturday</span>
            <strong>9:00 AM – 12:30 PM</strong>
          </div>

          <div className="sri-opd-time">
            <span>Evening Session</span>
            <strong>5:30 PM – 9:00 PM</strong>
          </div>

          <Link to="/appointment" className="sri-opd-button">
            Book Appointment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= APPOINTMENT CTA ================= */}

      <section className="sri-appointment-section">
        <div className="sri-appointment-decoration"></div>

        <div className="sri-container sri-appointment-content">
          <div className="sri-appointment-icon">
            <CalendarCheck size={36} />
          </div>

          <span>WE ARE HERE TO HELP</span>

          <h2>
            Take the First Step
            <br />
            Towards Better Health
          </h2>

          <p>
            Have a health concern or need a medical consultation? Contact Sri
            Sakthi Hospital to plan your visit.
          </p>

          <div className="sri-appointment-buttons">
            <Link
              to="/appointment"
              className="sri-btn sri-btn-gold"
            >
              <CalendarCheck size={19} />
              Book an Appointment
              <ArrowRight size={18} />
            </Link>

            <a href="tel:9494456007" className="sri-btn sri-btn-white">
              <PhoneCall size={18} />
              9494456007
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="sri-section sri-contact-section">
        <div className="sri-container">
          <div className="sri-contact-card">
            <div className="sri-contact-content">
              <span className="sri-eyebrow">
                <span className="sri-eyebrow-line"></span>
                GET IN TOUCH
              </span>

              <h2 className="sri-section-title">
                We Are Here
                <span> for You</span>
              </h2>

              <p className="sri-section-description">
                For appointment enquiries and hospital information, please
                contact Sri Sakthi Hospital.
              </p>

              <div className="sri-contact-detail">
                <div className="sri-contact-detail-icon">
                  <PhoneCall size={21} />
                </div>

                <div>
                  <span>Call Us</span>
                  <a href="tel:9494456007">9494456007</a>
                </div>
              </div>

              <div className="sri-contact-detail">
                <div className="sri-contact-detail-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <span>OPD Hours</span>
                  <strong>Mon – Sat</strong>
                  <p>9:00 AM–12:30 PM & 5:30 PM–9:00 PM</p>
                </div>
              </div>

              <Link to="/contact" className="sri-btn sri-btn-primary">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="sri-contact-location">
              <div className="sri-contact-location-icon">
                <MapPin size={37} />
              </div>

              <span>VISIT OUR HOSPITAL</span>

              <h3>Sri Sakthi Hospital</h3>

              <p>
                79-16-6, Tilak Road,
                <br />
                Opposite lane to Sai Baba Temple,
                <br />
                Rajahmundry, Andhra Pradesh – 533101.
              </p>

              <div className="sri-location-note">
                <ShieldCheck size={20} />
                <span>Your health and well-being matter to us.</span>
              </div>

              <Link to="/contact" className="sri-location-link">
                Contact & Location Details
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL BANNER ================= */}

      <section className="sri-final-banner">
        <div className="sri-container sri-final-banner-content">
          <div>
            <HeartPulse size={31} />
            <p>Your Health. Our Commitment.</p>
          </div>

          <Link to="/appointment">
            Plan Your Visit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}