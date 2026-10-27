import React from "react";
import { Link } from "react-router-dom";
import {
Award,
GraduationCap,
ShieldCheck,
Clock3,
PhoneCall,
HeartPulse,
Stethoscope,
CheckCircle2,
CalendarDays,
ArrowRight,
Activity,
BadgeCheck,
} from "lucide-react";

import "./AboutDoctor.css";

const qualifications = [
{
abbreviation: "MBBS",
title: "Bachelor of Medicine and Bachelor of Surgery",
description: "Medical education and clinical foundation.",
},
{
abbreviation: "DNB",
title: "DNB Family Medicine",
description: "Training in comprehensive family healthcare.",
},
{
abbreviation: "FCD",
title: "Fellowship in Clinical Diabetology",
description: "Focus on diabetes care and management.",
},
{
abbreviation: "FIIM",
title: "Fellowship in Internal Medicine",
description: "Further training in internal medicine.",
},
{
abbreviation: "PGPID",
title: "Postgraduate Program in Infectious Diseases",
description: "Additional learning in infectious diseases.",
},
];

const careAreas = [
"Family and internal medicine",
"Diabetes and chronic disease management",
"Infectious disease care",
"Preventive healthcare",
"Emergency medical assessment",
"Long-term health management",
];

const training = [
"Basic Life Support (BLS)",
"Advanced Cardiac Life Support (ACLS)",
"Emergency Care and Critical Care Management",
"Chronic Disease Follow-up Programs",
];

export default function AboutDoctor() {
return ( <main className="about-doctor-page">
{/* ================= HERO SECTION ================= */} <section className="ad-hero"> <div className="ad-hero-pattern" aria-hidden="true" />

```
    <div className="ad-container ad-hero-content">
      <div className="ad-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>About Doctor</span>
      </div>

      <span className="ad-eyebrow">
        <HeartPulse size={17} />
        MEET YOUR DOCTOR
      </span>

      <h1>
        Medical expertise.
        <br />
        <span>Compassionate care.</span>
      </h1>

      <p>
        Learn more about your doctor, medical qualifications, areas of
        clinical interest, and commitment to patient-centred healthcare.
      </p>

      <div className="ad-hero-actions">
        <Link to="/contact" className="ad-button ad-button-primary">
          Contact the Hospital
          <ArrowRight size={19} />
        </Link>

        <a href="tel:9494456007" className="ad-button ad-button-outline">
          <PhoneCall size={18} />
          Call Hospital
        </a>
      </div>
    </div>

    <div className="ad-hero-bottom-line" />
  </section>

  {/* ================= DOCTOR PROFILE ================= */}
  <section className="ad-section ad-profile-section">
    <div className="ad-container ad-profile-grid">
      <div className="ad-profile-visual">
        <div className="ad-profile-image-frame">
          <img
            className="ad-profile-image"
            src="https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg"
            alt="Dr. Sakthi Narasimha Garikapati"
            loading="eager"
          />

          <div className="ad-image-overlay">
            <span className="ad-image-overlay-icon">
              <ShieldCheck size={23} />
            </span>

            <div>
              <strong>Patient-First Care</strong>
              <span>Compassion in every consultation</span>
            </div>
          </div>
        </div>

        <div className="ad-visual-decoration ad-visual-decoration-one" />
        <div className="ad-visual-decoration ad-visual-decoration-two" />

        <div className="ad-registration-card">
          <div className="ad-registration-icon">
            <BadgeCheck size={25} />
          </div>

          <div>
            <span>Medical Registration</span>
            <strong>No. 66982</strong>
          </div>
        </div>
      </div>

      <div className="ad-profile-content">
        <span className="ad-section-label">
          <span />
          ABOUT THE DOCTOR
        </span>

        <h2>
          Dr. Sakthi Narasimha
          <span> Garikapati</span>
        </h2>

        <h3 className="ad-speciality">
          <Stethoscope size={20} />
          Family &amp; Internal Medicine
        </h3>

        <p className="ad-lead">
          Dedicated to providing thoughtful medical guidance with an
          emphasis on understanding each patient's health concerns.
        </p>

        <p className="ad-body-text">
          Dr. Sakthi Narasimha Garikapati's approach to healthcare
          emphasises careful assessment, clear communication, evidence-based
          treatment, and practical guidance for maintaining long-term
          health.
        </p>

        <p className="ad-body-text">
          His clinical interests include family medicine, internal
          medicine, diabetes care, infectious diseases, preventive
          healthcare, and chronic disease management.
        </p>

        <div className="ad-profile-highlights">
          <div className="ad-highlight-item">
            <span className="ad-highlight-icon">
              <HeartPulse size={21} />
            </span>
            <div>
              <strong>Patient-Centred</strong>
              <span>Care with understanding</span>
            </div>
          </div>

          <div className="ad-highlight-item">
            <span className="ad-highlight-icon">
              <ShieldCheck size={21} />
            </span>
            <div>
              <strong>Evidence-Based</strong>
              <span>Thoughtful medical guidance</span>
            </div>
          </div>
        </div>

        <Link to="/contact" className="ad-text-link">
          Get in touch with our hospital
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>

  {/* ================= PROFESSIONAL PHILOSOPHY ================= */}
  <section className="ad-philosophy-section">
    <div className="ad-container ad-philosophy-grid">
      <div className="ad-philosophy-heading">
        <span className="ad-section-label ad-section-label-light">
          <span />
          OUR APPROACH
        </span>

        <h2>
          Healthcare with
          <br />
          <span>a human touch.</span>
        </h2>
      </div>

      <div className="ad-philosophy-content">
        <div className="ad-philosophy-icon">
          <HeartPulse size={29} />
        </div>

        <p>
          Every patient deserves to be heard, informed, and treated with
          respect. The aim is to make medical consultations more
          comfortable by understanding individual concerns, explaining
          treatment options clearly, and supporting informed healthcare
          decisions.
        </p>

        <div className="ad-philosophy-points">
          <span>
            <CheckCircle2 size={18} />
            Clear communication
          </span>
          <span>
            <CheckCircle2 size={18} />
            Individual attention
          </span>
          <span>
            <CheckCircle2 size={18} />
            Long-term wellness
          </span>
        </div>
      </div>
    </div>
  </section>

  {/* ================= QUALIFICATIONS ================= */}
  <section className="ad-section ad-qualifications-section">
    <div className="ad-container">
      <div className="ad-section-heading">
        <span className="ad-section-label">
          <span />
          EDUCATION &amp; QUALIFICATIONS
        </span>

        <h2>
          A foundation in
          <span> medical knowledge.</span>
        </h2>

        <p>
          Explore the qualifications listed in the hospital's doctor
          profile.
        </p>
      </div>

      <div className="ad-qualification-grid">
        {qualifications.map((qualification, index) => (
          <article
            className="ad-qualification-card"
            key={qualification.abbreviation}
            style={{ "--card-index": index }}
          >
            <div className="ad-qualification-top">
              <div className="ad-qualification-icon">
                <GraduationCap size={27} />
              </div>

              <span className="ad-qualification-number">
                0{index + 1}
              </span>
            </div>

            <h3>{qualification.abbreviation}</h3>
            <h4>{qualification.title}</h4>
            <p>{qualification.description}</p>

            <div className="ad-qualification-line" />
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* ================= CLINICAL INTERESTS ================= */}
  <section className="ad-section ad-care-section">
    <div className="ad-container ad-care-grid">
      <div className="ad-care-content">
        <span className="ad-section-label">
          <span />
          AREAS OF CLINICAL INTEREST
        </span>

        <h2>
          Care that considers
          <span> the whole person.</span>
        </h2>

        <p className="ad-body-text">
          Healthcare involves more than treating symptoms. Understanding
          medical history, lifestyle, ongoing conditions, and preventive
          needs can help support better-informed health decisions.
        </p>

        <div className="ad-care-list">
          {careAreas.map((area) => (
            <div className="ad-care-item" key={area}>
              <CheckCircle2 size={20} />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ad-care-visual">
        <div className="ad-care-main-card">
          <div className="ad-care-symbol">
            <Activity size={43} />
          </div>

          <span className="ad-care-small-label">OUR PRIORITY</span>

          <h3>Your health matters.</h3>

          <p>
            Medical guidance built around understanding, communication,
            and your individual healthcare needs.
          </p>

          <div className="ad-care-card-footer">
            <HeartPulse size={21} />
            <span>Compassion • Care • Trust</span>
          </div>
        </div>

        <div className="ad-care-floating-icon">
          <ShieldCheck size={28} />
        </div>
      </div>
    </div>
  </section>

  {/* ================= TRAINING ================= */}
  <section className="ad-training-section">
    <div className="ad-container ad-training-grid">
      <div>
        <span className="ad-section-label ad-section-label-light">
          <span />
          TRAINING &amp; CERTIFICATIONS
        </span>

        <h2>
          Continuing a commitment
          <span> to medical care.</span>
        </h2>

        <p>
          The hospital's doctor profile also lists the following training
          and certification areas.
        </p>
      </div>

      <div className="ad-training-list">
        {training.map((item, index) => (
          <div className="ad-training-item" key={item}>
            <span className="ad-training-check">
              <CheckCircle2 size={20} />
            </span>
            <span>{item}</span>
            <span className="ad-training-index">0{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* ================= CONSULTATION INFORMATION ================= */}
  <section className="ad-section ad-visit-section">
    <div className="ad-container">
      <div className="ad-section-heading">
        <span className="ad-section-label">
          <span />
          CONSULTATION INFORMATION
        </span>

        <h2>
          Plan your
          <span> hospital visit.</span>
        </h2>

        <p>
          Contact Sri Sakthi Hospital for consultation information and
          appointment enquiries.
        </p>
      </div>

      <div className="ad-visit-grid">
        <article className="ad-visit-card">
          <div className="ad-visit-icon">
            <Clock3 size={28} />
          </div>

          <span className="ad-visit-kicker">CONSULTATION HOURS</span>
          <h3>OPD Timings</h3>
          <p>Monday to Saturday</p>

          <div className="ad-time-row">
            <Clock3 size={17} />
            <strong>9:00 AM – 12:30 PM</strong>
          </div>

          <div className="ad-time-row">
            <Clock3 size={17} />
            <strong>5:30 PM – 9:00 PM</strong>
          </div>

          <p className="ad-visit-note">
            Please contact the hospital to confirm availability.
          </p>
        </article>

        <article className="ad-visit-card">
          <div className="ad-visit-icon">
            <PhoneCall size={28} />
          </div>

          <span className="ad-visit-kicker">WE ARE HERE TO HELP</span>
          <h3>Contact Hospital</h3>

          <p>
            For appointments, consultation enquiries, and general
            information.
          </p>

          <a className="ad-phone-link" href="tel:9494456007">
            <PhoneCall size={19} />
            +91 94944 56007
          </a>

          <Link to="/contact" className="ad-visit-link">
            View Contact Details
            <ArrowRight size={18} />
          </Link>
        </article>

        <article className="ad-visit-card">
          <div className="ad-visit-icon">
            <CalendarDays size={28} />
          </div>

          <span className="ad-visit-kicker">YOUR NEXT STEP</span>
          <h3>Plan a Consultation</h3>

          <p>
            Get in touch with the hospital to discuss your visit and
            available consultation options.
          </p>

          <Link to="/contact" className="ad-visit-link">
            Contact the Hospital
            <ArrowRight size={18} />
          </Link>
        </article>
      </div>
    </div>
  </section>

  {/* ================= FINAL CALL TO ACTION ================= */}
  <section className="ad-final-cta">
    <div className="ad-container ad-final-cta-content">
      <div className="ad-final-cta-icon">
        <HeartPulse size={31} />
      </div>

      <div className="ad-final-cta-text">
        <span>YOUR HEALTH. OUR COMMITMENT.</span>
        <h2>Take the next step towards better health.</h2>
        <p>
          Contact Sri Sakthi Hospital for consultation information and
          general enquiries.
        </p>
      </div>

      <Link to="/contact" className="ad-button ad-button-gold">
        Contact Us
        <ArrowRight size={19} />
      </Link>
    </div>
  </section>
</main>

);
}
