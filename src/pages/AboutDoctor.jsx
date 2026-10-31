import React from "react";
import { Link } from "react-router-dom";

import {
  Award,
  GraduationCap,
  ShieldCheck,
  Clock,
  Phone,
  HeartPulse,
  Stethoscope,
  Activity,
  Users,
  CheckCircle2,
  ArrowRight,
  CalendarDays,
  BriefcaseMedical,
  Languages,
  BadgeCheck,
} from "lucide-react";

import "./AboutDoctor.css";

/* ================= QUALIFICATIONS ================= */

const qualifications = [
  {
    icon: GraduationCap,
    title: "MBBS",
    description: "Bachelor of Medicine and Bachelor of Surgery",
  },
  {
    icon: Award,
    title: "DNB Family Medicine",
    description: "Specialized training in Family Medicine",
  },
  {
    icon: ShieldCheck,
    title: "FCD",
    description: "Fellowship in Clinical Diabetology",
  },
  {
    icon: BriefcaseMedical,
    title: "FIIM",
    description: "Professional medical fellowship",
  },
  {
    icon: Award,
    title: "PGPID",
    description: "Postgraduate professional qualification",
  },
];

/* ================= SPECIALTIES ================= */

const specialties = [
  "Family Medicine",
  "Internal Medicine",
  "Clinical Diabetology",
  "Infectious Diseases",
  "General Medicine",
  "Preventive Healthcare",
];

/* ================= CARE FEATURES ================= */

const careFeatures = [
  {
    icon: HeartPulse,
    title: "Patient-First Approach",
    description:
      "Every patient receives personal attention, care, respect, and understanding.",
  },
  {
    icon: Stethoscope,
    title: "Complete Medical Care",
    description:
      "Comprehensive consultation and treatment for different health conditions.",
  },
  {
    icon: Activity,
    title: "Preventive Healthcare",
    description:
      "Health guidance focused on prevention and long-term well-being.",
  },
  {
    icon: Users,
    title: "Family-Focused Care",
    description:
      "Supporting individuals and families through every stage of healthcare.",
  },
];

/* ================= MAIN COMPONENT ================= */

export default function AboutDoctor() {
  return (
    <main className="about-doctor-page">

      {/* ================= HERO SECTION ================= */}

      <section className="ad-hero">
        <div className="ad-hero-overlay"></div>

        <div className="ad-container ad-hero-content">

          <span className="ad-eyebrow">
            <HeartPulse size={19} />
            SRI SAKTHI HOSPITAL
          </span>

          <h1>
            About Our <span>Doctor</span>
          </h1>

          <p>
            Meet Dr. Sakthi Narasimha Garikapati, dedicated to providing
            compassionate and patient-focused healthcare. With a focus on
            Family and Internal Medicine, our approach combines medical
            knowledge, careful diagnosis, and personalized treatment to
            support your family's health and well-being.
          </p>

          <div className="ad-hero-highlights">

            <div>
              <ShieldCheck size={19} />
              <span>Patient-First Approach</span>
            </div>

            <div>
              <Stethoscope size={19} />
              <span>Family & Internal Medicine</span>
            </div>

            <div>
              <HeartPulse size={19} />
              <span>Compassionate Healthcare</span>
            </div>

          </div>

          <div className="ad-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Doctor</span>
          </div>

        </div>
      </section>

      {/* ================= DOCTOR PROFILE ================= */}

      <section className="ad-profile-section">

        <div className="ad-container">

          <div className="ad-section-heading">
            <span className="ad-small-heading">
              MEET OUR DOCTOR
            </span>

            <h2>
              Experienced Care With a <span>Human Touch</span>
            </h2>

            <p>
              Medical expertise combined with compassion, responsibility,
              and commitment to patient well-being.
            </p>
          </div>

          <div className="ad-profile-grid">

            {/* DOCTOR IMAGE AND REGISTRATION */}

            <div className="ad-image-column">

              <div className="ad-image-frame">

                <img
                  src="https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg"
                  alt="Dr. Sakthi Narasimha Garikapati"
                  className="ad-doctor-image"
                  loading="lazy"
                />

                <div className="ad-image-caption">

                  <div className="ad-caption-icon">
                    <ShieldCheck size={29} />
                  </div>

                  <div className="ad-caption-text">
                    <h3>Patient-First Care</h3>
                    <p>Compassion in every consultation</p>
                  </div>

                </div>

              </div>

              {/* Registration card is now BELOW the image */}

              <div className="ad-registration-card">

                <div className="ad-registration-icon">
                  <BadgeCheck size={32} />
                </div>

                <div className="ad-registration-content">
                  <span>Medical Registration</span>
                  <h3>No. 66982</h3>
                  <p>Professional Medical Registration Number</p>
                </div>

              </div>

            </div>

            {/* DOCTOR DETAILS */}

            <div className="ad-profile-content">

              <span className="ad-doctor-label">
                <BadgeCheck size={18} />
                YOUR TRUSTED MEDICAL PROFESSIONAL
              </span>

              <h2>
                Dr. Sakthi Narasimha Garikapati
              </h2>

              <h3 className="ad-doctor-specialization">
                Family & Internal Medicine
              </h3>

              <p className="ad-profile-description">
                Dr. Sakthi Narasimha Garikapati is dedicated to providing
                patient-focused medical care with an emphasis on accurate
                diagnosis, appropriate treatment, and preventive healthcare.
              </p>

              <p className="ad-profile-description">
                At Sri Sakthi Hospital, the focus is on understanding each
                patient's health needs and providing care with compassion,
                respect, and professional responsibility.
              </p>

              <div className="ad-doctor-details">

                <div className="ad-detail-item">
                  <div className="ad-detail-icon">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <span>Qualifications</span>
                    <strong>
                      MBBS, DNB Family Medicine, FCD, FIIM, PGPID
                    </strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <div className="ad-detail-icon">
                    <Stethoscope size={22} />
                  </div>

                  <div>
                    <span>Specialization</span>
                    <strong>Family & Internal Medicine</strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <div className="ad-detail-icon">
                    <Languages size={22} />
                  </div>

                  <div>
                    <span>Languages</span>
                    <strong>Telugu, English & Hindi</strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <div className="ad-detail-icon">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <span>Registration Number</span>
                    <strong>66982</strong>
                  </div>
                </div>

              </div>

              <Link
                to="/appointment"
                className="ad-primary-button"
              >
                Book an Appointment
                <ArrowRight size={19} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= MEDICAL PHILOSOPHY ================= */}

      <section className="ad-philosophy-section">

        <div className="ad-container">

          <div className="ad-philosophy-grid">

            <div className="ad-philosophy-content">

              <span className="ad-small-heading">
                OUR MEDICAL PHILOSOPHY
              </span>

              <h2>
                Healthcare With a <span>Human Touch</span>
              </h2>

              <p>
                Good healthcare begins with listening, understanding,
                and treating every patient with care. Our approach focuses
                on building trust and supporting patients throughout
                their healthcare journey.
              </p>

              <div className="ad-philosophy-points">

                <div>
                  <CheckCircle2 size={20} />
                  <span>Listening to every patient</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Clear medical guidance</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Compassionate treatment</span>
                </div>

                <div>
                  <CheckCircle2 size={20} />
                  <span>Focus on preventive health</span>
                </div>

              </div>
            </div>

            <div className="ad-philosophy-card">

              <div className="ad-philosophy-icon">
                <HeartPulse size={43} />
              </div>

              <h3>
                Your Health. Our Commitment.
              </h3>

              <p>
                Every consultation is an opportunity to understand,
                guide, and care for our patients.
              </p>

              <div className="ad-philosophy-line"></div>

              <strong>Sri Sakthi Hospital</strong>

            </div>

          </div>
        </div>
      </section>

      {/* ================= QUALIFICATIONS ================= */}

      <section className="ad-qualifications-section">

        <div className="ad-container">

          <div className="ad-section-heading">

            <span className="ad-small-heading">
              EDUCATION & QUALIFICATIONS
            </span>

            <h2>
              Professional <span>Qualifications</span>
            </h2>

            <p>
              Medical education and professional qualifications
              supporting comprehensive patient care.
            </p>

          </div>

          <div className="ad-qualification-grid">

            {qualifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="ad-qualification-card"
                  key={index}
                >

                  <div className="ad-qualification-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= AREAS OF MEDICAL CARE ================= */}

      <section className="ad-specialties-section">

        <div className="ad-container">

          <div className="ad-specialties-grid">

            <div className="ad-specialties-content">

              <span className="ad-small-heading">
                MEDICAL EXPERTISE
              </span>

              <h2>
                Areas of <span>Medical Care</span>
              </h2>

              <p>
                Focused on providing consultation and medical guidance
                across a range of family and internal medicine needs.
              </p>

              <div className="ad-specialty-list">

                {specialties.map((specialty, index) => (
                  <div
                    className="ad-specialty-item"
                    key={index}
                  >
                    <CheckCircle2 size={19} />
                    <span>{specialty}</span>
                  </div>
                ))}

              </div>
            </div>

            <div className="ad-specialties-visual">

              <div className="ad-specialties-visual-icon">
                <Stethoscope size={70} />
              </div>

              <h3>
                Complete Care for Better Health
              </h3>

              <p>
                Supporting your health through consultation,
                diagnosis, treatment, and preventive guidance.
              </p>

              <Link to="/services">
                Explore Our Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CARE VALUES ================= */}

      <section className="ad-values-section">

        <div className="ad-container">

          <div className="ad-section-heading">

            <span className="ad-small-heading">
              OUR COMMITMENT
            </span>

            <h2>
              What Makes Our Care <span>Meaningful?</span>
            </h2>

            <p>
              Every patient deserves attention, understanding,
              and responsible medical care.
            </p>

          </div>

          <div className="ad-values-grid">

            {careFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="ad-value-card"
                  key={index}
                >

                  <div className="ad-value-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= OPD TIMINGS ================= */}

      <section className="ad-timings-section">

        <div className="ad-container">

          <div className="ad-timings-grid">

            <div className="ad-timings-content">

              <span className="ad-small-heading">
                PLAN YOUR VISIT
              </span>

              <h2>
                OPD <span>Consultation Timings</span>
              </h2>

              <p>
                Visit Sri Sakthi Hospital during the following
                outpatient consultation hours.
              </p>

              <div className="ad-timing-card">

                <div className="ad-timing-icon">
                  <CalendarDays size={27} />
                </div>

                <div>
                  <span>Monday – Saturday</span>

                  <h3>
                    Morning: 9:00 AM – 12:30 PM
                  </h3>

                  <h3>
                    Evening: 5:30 PM – 9:00 PM
                  </h3>
                </div>

              </div>

              <div className="ad-timing-note">
                <Clock size={19} />
                <span>
                  Please contact the hospital to confirm availability.
                </span>
              </div>

            </div>

            <div className="ad-visit-card">

              <div className="ad-visit-icon">
                <Phone size={32} />
              </div>

              <span>NEED MEDICAL ASSISTANCE?</span>

              <h3>
                We Are Here to Help You
              </h3>

              <p>
                Contact Sri Sakthi Hospital for appointment
                information and consultation details.
              </p>

              <a
                href="tel:9494456007"
                className="ad-call-button"
              >
                <Phone size={18} />
                Call 9494456007
              </a>

              <Link
                to="/contact"
                className="ad-contact-link"
              >
                Contact Hospital
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="ad-final-cta">

        <div className="ad-container">

          <div className="ad-cta-content">

            <div className="ad-cta-icon">
              <HeartPulse size={36} />
            </div>

            <div className="ad-cta-text">

              <span>YOUR HEALTH MATTERS</span>

              <h2>
                Take the First Step Towards Better Health
              </h2>

              <p>
                Schedule your consultation at Sri Sakthi Hospital.
              </p>

            </div>

            <Link
              to="/appointment"
              className="ad-cta-button"
            >
              Book Appointment
              <ArrowRight size={19} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}