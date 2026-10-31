import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  Clock,
  CalendarDays,
  Award,
  UserCheck,
  Activity,
  CheckCircle2,
  ArrowRight,
  Phone,
  Languages,
  BriefcaseMedical,
} from "lucide-react";

import "./AboutDoctor.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

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
    icon: Stethoscope,
    title: "FCD",
    description: "Additional clinical qualification",
  },
  {
    icon: ShieldCheck,
    title: "FIIM",
    description: "Professional medical qualification",
  },
  {
    icon: BriefcaseMedical,
    title: "PGPID",
    description: "Additional professional qualification",
  },
];

const specialties = [
  "Family Medicine",
  "Internal Medicine",
  "Clinical Diabetology",
  "Infectious Diseases",
  "General Medicine",
  "Preventive Healthcare",
];

const values = [
  {
    icon: HeartPulse,
    title: "Compassionate Care",
    description:
      "We believe every patient deserves care, respect, kindness, and personal attention.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description:
      "We focus on providing responsible medical care with patient safety as a priority.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    description:
      "Every patient receives individual attention and care based on their health needs.",
  },
  {
    icon: Activity,
    title: "Better Healthcare",
    description:
      "Our goal is to support healthier lives through consultation and continuous care.",
  },
];

export default function AboutDoctor() {
  useEffect(() => {
    const elements = document.querySelectorAll(".ad-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ad-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-doctor-page">

      {/* ================= HERO SECTION ================= */}

      <section className="ad-hero">
        <div className="ad-hero-overlay"></div>

        <div className="ad-container ad-hero-content">
          <span className="ad-eyebrow">
            <Stethoscope size={17} />
            MEET OUR DOCTOR
          </span>

          <h1>
            Dedicated to Your <span>Health & Wellness</span>
          </h1>

          <p>
            Experienced medical care with compassion, commitment, and
            personal attention at Sri Sakthi Hospital.
          </p>

          <div className="ad-hero-highlights">
            <div>
              <HeartPulse size={20} />
              <span>Patient-First Care</span>
            </div>

            <div>
              <ShieldCheck size={20} />
              <span>Trusted Healthcare</span>
            </div>

            <div>
              <Stethoscope size={20} />
              <span>Medical Expertise</span>
            </div>
          </div>

          <div className="ad-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Doctor</span>
          </div>
        </div>

        <div className="ad-hero-circle ad-circle-one"></div>
        <div className="ad-hero-circle ad-circle-two"></div>
      </section>

      {/* ================= DOCTOR PROFILE ================= */}

      <section className="ad-profile-section ad-section">
        <div className="ad-container">

          <div className="ad-section-heading ad-reveal">
            <span className="ad-section-label">OUR MEDICAL EXPERT</span>

            <h2>
              Meet Our <span>Doctor</span>
            </h2>

            <p>
              Professional medical guidance and compassionate care for
              every patient.
            </p>
          </div>

          <div className="ad-profile-grid">

            {/* Doctor Image */}

            <div className="ad-image-column ad-reveal">
              <div className="ad-image-frame">
                <div className="ad-image-top-label">
                  <HeartPulse size={17} />
                  Dedicated Healthcare
                </div>

                <img
                  src={doctorImage}
                  alt="Dr. Sakthi Narasimha Garikapati"
                  className="ad-doctor-image"
                  loading="lazy"
                />

                <div className="ad-image-caption">
                  <span className="ad-caption-icon">
                    <Stethoscope size={22} />
                  </span>

                  <div>
                    <strong>Patient-Centred Care</strong>
                    <small>Committed to your wellbeing</small>
                  </div>
                </div>
              </div>

              <div className="ad-registration-card">
                <ShieldCheck size={25} />

                <div>
                  <small>Medical Registration Number</small>
                  <strong>66982</strong>
                </div>
              </div>
            </div>

            {/* Doctor Details */}

            <div className="ad-profile-content ad-reveal">
              <span className="ad-profile-label">
                FAMILY & INTERNAL MEDICINE
              </span>

              <h2>
                Dr. Sakthi Narasimha <span>Garikapati</span>
              </h2>

              <p className="ad-doctor-role">
                MBBS, DNB Family Medicine, FCD, FIIM, PGPID
              </p>

              <p className="ad-profile-description">
                Dr. Sakthi Narasimha Garikapati is dedicated to providing
                patient-focused healthcare through medical consultation,
                guidance, and continuous attention to individual health
                needs.
              </p>

              <div className="ad-doctor-details">

                <div className="ad-detail-item">
                  <span className="ad-detail-icon">
                    <Stethoscope size={21} />
                  </span>

                  <div>
                    <small>Specialization</small>
                    <strong>Family & Internal Medicine</strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <span className="ad-detail-icon">
                    <Languages size={21} />
                  </span>

                  <div>
                    <small>Languages</small>
                    <strong>Telugu, English & Hindi</strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <span className="ad-detail-icon">
                    <Award size={21} />
                  </span>

                  <div>
                    <small>Qualifications</small>
                    <strong>MBBS, DNB Family Medicine, FCD, FIIM, PGPID</strong>
                  </div>
                </div>

                <div className="ad-detail-item">
                  <span className="ad-detail-icon">
                    <ShieldCheck size={21} />
                  </span>

                  <div>
                    <small>Registration Number</small>
                    <strong>66982</strong>
                  </div>
                </div>

              </div>

              <Link to="/appointment" className="ad-primary-button">
                Book an Appointment
                <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDICAL PHILOSOPHY ================= */}

      <section className="ad-philosophy-section ad-section">
        <div className="ad-container ad-philosophy-grid">

          <div className="ad-philosophy-content ad-reveal">
            <span className="ad-section-label">OUR APPROACH</span>

            <h2>
              Healthcare with a <span>Human Touch</span>
            </h2>

            <p>
              At Sri Sakthi Hospital, we believe good healthcare begins
              with understanding patients. Our approach focuses on
              listening, medical guidance, personal attention, and
              responsible treatment.
            </p>

            <div className="ad-philosophy-points">
              <div>
                <CheckCircle2 size={20} />
                Patient-focused consultation
              </div>

              <div>
                <CheckCircle2 size={20} />
                Individual health guidance
              </div>

              <div>
                <CheckCircle2 size={20} />
                Compassionate medical support
              </div>
            </div>
          </div>

          <div className="ad-philosophy-card ad-reveal">
            <div className="ad-philosophy-icon">
              <HeartPulse size={42} />
            </div>

            <h3>Your Health Matters</h3>

            <p>
              Every patient is important. We are committed to supporting
              your health with care, respect, and dedication.
            </p>

            <div className="ad-philosophy-line"></div>

            <strong>SRI SAKTHI HOSPITAL</strong>
          </div>

        </div>
      </section>

      {/* ================= QUALIFICATIONS ================= */}

      <section className="ad-qualifications-section ad-section">
        <div className="ad-container">

          <div className="ad-section-heading ad-reveal">
            <span className="ad-section-label">MEDICAL BACKGROUND</span>

            <h2>
              Education & <span>Qualifications</span>
            </h2>

            <p>
              Professional medical qualifications supporting
              comprehensive healthcare.
            </p>
          </div>

          <div className="ad-qualification-grid">
            {qualifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="ad-qualification-card ad-reveal"
                  key={item.title}
                  style={{ "--ad-delay": `${index * 100}ms` }}
                >
                  <div className="ad-qualification-icon">
                    <Icon size={29} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="ad-qualification-number">
                    0{index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SPECIALTIES ================= */}

      <section className="ad-specialties-section ad-section">
        <div className="ad-container ad-specialties-grid">

          <div className="ad-specialties-content ad-reveal">
            <span className="ad-section-label">MEDICAL EXPERTISE</span>

            <h2>
              Areas of <span>Medical Focus</span>
            </h2>

            <p>
              Our medical care focuses on general health, family medicine,
              internal medicine, and support for different health
              conditions.
            </p>

            <div className="ad-specialty-list">
              {specialties.map((specialty, index) => (
                <div className="ad-specialty-item" key={specialty}>
                  <CheckCircle2 size={19} />
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ad-specialties-visual ad-reveal">
            <div className="ad-specialties-main-icon">
              <Stethoscope size={65} />
            </div>

            <div className="ad-specialty-floating ad-floating-top">
              <HeartPulse size={25} />
              <span>Family Care</span>
            </div>

            <div className="ad-specialty-floating ad-floating-bottom">
              <Activity size={25} />
              <span>Internal Medicine</span>
            </div>

            <div className="ad-specialties-circle"></div>
          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="ad-values-section ad-section">
        <div className="ad-container">

          <div className="ad-section-heading ad-reveal">
            <span className="ad-section-label">WHAT WE BELIEVE</span>

            <h2>
              Our Commitment to <span>Patients</span>
            </h2>

            <p>
              The values that guide our approach to patient care.
            </p>
          </div>

          <div className="ad-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  className="ad-value-card ad-reveal"
                  key={value.title}
                  style={{ "--ad-delay": `${index * 100}ms` }}
                >
                  <div className="ad-value-icon">
                    <Icon size={30} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>

                  <span className="ad-value-arrow">
                    <ArrowRight size={19} />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OPD TIMINGS ================= */}

      <section className="ad-timings-section ad-section">
        <div className="ad-container">

          <div className="ad-section-heading ad-reveal">
            <span className="ad-section-label">PLAN YOUR VISIT</span>

            <h2>
              Consultation <span>Timings</span>
            </h2>

            <p>
              Visit Sri Sakthi Hospital during the consultation hours.
            </p>
          </div>

          <div className="ad-timings-grid">

            <div className="ad-timing-card ad-reveal">
              <div className="ad-timing-icon">
                <Clock size={31} />
              </div>

              <span className="ad-timing-label">MORNING SESSION</span>

              <h3>Morning OPD</h3>

              <p>Monday – Saturday</p>

              <strong>9:00 AM – 12:30 PM</strong>
            </div>

            <div className="ad-timing-card ad-reveal">
              <div className="ad-timing-icon">
                <CalendarDays size={31} />
              </div>

              <span className="ad-timing-label">EVENING SESSION</span>

              <h3>Evening OPD</h3>

              <p>Monday – Saturday</p>

              <strong>5:30 PM – 9:00 PM</strong>
            </div>

            <div className="ad-visit-card ad-reveal">
              <div className="ad-visit-icon">
                <HeartPulse size={34} />
              </div>

              <h3>Need Medical Assistance?</h3>

              <p>
                Contact Sri Sakthi Hospital for appointment-related
                information and consultation details.
              </p>

              <a href="tel:9494456007" className="ad-call-button">
                <Phone size={18} />
                9494456007
              </a>
            </div>

          </div>

          <p className="ad-timing-note">
            <Clock size={16} />
            Consultation timings may change. Please call the hospital
            before visiting.
          </p>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="ad-final-cta">
        <div className="ad-container ad-cta-content ad-reveal">
          <div>
            <span className="ad-cta-label">
              SRI SAKTHI HOSPITAL
            </span>

            <h2>
              Your Health. <span>Our Commitment.</span>
            </h2>

            <p>
              Take the next step towards better health. We are here to
              support your healthcare journey.
            </p>
          </div>

          <Link to="/appointment" className="ad-cta-button">
            Book Your Appointment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}