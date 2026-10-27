import React from "react";
import { Link } from "react-router-dom";
import {
ArrowRight,
HeartPulse,
ShieldCheck,
Stethoscope,
Activity,
Building2,
Microscope,
Pill,
BedDouble,
Clock,
Users,
HeartHandshake,
ClipboardCheck,
Siren,
CheckCircle2,
Target,
Eye,
PhoneCall,
Sparkles,
HandHeart,
CalendarCheck,
MapPin,
ChevronRight,
} from "lucide-react";
import "./Hospital.css";

const galleryImages = [
{
image:
"https://www.srisakthihospital.com/assets/patient-checkup-CrqMkL7N.png",
title: "Patient Care & Consultation",
description:
"Personal attention, careful assessment and respectful communication throughout the patient journey.",
category: "PATIENT CARE",
},
{
image:
"https://www.srisakthihospital.com/assets/health-camp-1-mlldPQ3e.png",
title: "Community Health Camp",
description:
"Promoting health awareness and encouraging people to take an active role in their wellbeing.",
category: "COMMUNITY HEALTH",
},
{
image:
"https://www.srisakthihospital.com/assets/medical-equipment-DRN-Mx4T.png",
title: "Medical Equipment",
description:
"Medical equipment and diagnostic support for appropriate clinical assessment.",
category: "MEDICAL SUPPORT",
},
{
image:
"https://www.srisakthihospital.com/assets/health-camp-2-BgEvkZ-y.png",
title: "Health Awareness",
description:
"Community initiatives that encourage preventive healthcare and healthier everyday habits.",
category: "HEALTH AWARENESS",
},
{
image:
"https://www.srisakthihospital.com/assets/team-photo-By9lxQN_.png",
title: "Our Hospital Team",
description:
"A shared commitment to respectful communication and responsible healthcare.",
category: "OUR TEAM",
},
];

const facilities = [
{
icon: Stethoscope,
number: "01",
title: "Consultation Rooms",
description:
"Dedicated spaces for medical consultation, symptom assessment and treatment planning.",
},
{
icon: BedDouble,
number: "02",
title: "Inpatient Care",
description:
"Hospital accommodation and medical observation for patients who require admission.",
},
{
icon: Microscope,
number: "03",
title: "Diagnostic Laboratory",
description:
"Diagnostic testing that supports clinical evaluation and informed healthcare decisions.",
},
{
icon: Pill,
number: "04",
title: "In-house Pharmacy",
description:
"Convenient access to prescribed medicines within the hospital premises.",
},
{
icon: Siren,
number: "05",
title: "Emergency Care",
description:
"Assessment of urgent medical concerns and appropriate care based on clinical needs.",
},
{
icon: HeartPulse,
number: "06",
title: "Day Care Services",
description:
"Suitable treatments and medical procedures that may not require overnight admission.",
},
];

const clinicalStrengths = [
{
icon: Activity,
title: "Emergency & Acute Care",
description:
"Assessment of urgent medical problems with attention to timely evaluation and appropriate treatment.",
},
{
icon: HeartPulse,
title: "Cardiac & Respiratory Concerns",
description:
"Clinical assessment of heart-related symptoms and breathing difficulties, with appropriate care or referral.",
},
{
icon: ClipboardCheck,
title: "Chronic Disease Management",
description:
"Continuing care for conditions such as diabetes and hypertension, including monitoring and follow-up.",
},
{
icon: ShieldCheck,
title: "Preventive Healthcare",
description:
"Health guidance and appropriate screening to support early identification of health concerns.",
},
{
icon: Users,
title: "Community Health Programs",
description:
"Health awareness activities that encourage preventive care and community wellbeing.",
},
{
icon: HandHeart,
title: "Patient-centred Medicine",
description:
"Respectful communication and treatment guidance focused on individual patient needs.",
},
];

function Hospital() {
return ( <main className="hospital-page">
{/* ================= HERO ================= */} <section className="hospital-hero"> <div className="hospital-hero-bg" /> <div className="hospital-hero-shade" />


    <div className="hospital-hero-pattern" />

    <div className="hospital-container hospital-hero-layout">
      <div className="hospital-hero-content">
        <span className="hospital-eyebrow">
          <HeartPulse size={18} />
          COMPASSIONATE CARE. RESPONSIBLE MEDICINE.
        </span>

        <h1>
          Your Health.
          <br />
          <span>Our Commitment.</span>
        </h1>

        <div className="hospital-hero-rule">
          <span />
          <span />
          <span />
        </div>

        <h2>Welcome to Sri Sakthi Hospital</h2>

        <p>
          Caring beyond treatment through respectful communication,
          thoughtful medical assessment and patient-focused healthcare.
          We are committed to treating every individual with dignity
          and compassion.
        </p>

        <div className="hospital-hero-actions">
          <Link
            to="/appointment"
            className="hospital-btn hospital-btn-gold"
          >
            <CalendarCheck size={19} />
            Book an Appointment
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="hospital-btn hospital-btn-glass"
          >
            Contact Our Hospital
          </Link>
        </div>

        <div className="hospital-hero-points">
          <span>
            <CheckCircle2 size={17} />
            Patient-focused care
          </span>

          <span>
            <CheckCircle2 size={17} />
            Clear communication
          </span>
        </div>
      </div>

      <div className="hospital-hero-side">
        <div className="hospital-hero-image-card">
          <img
            src="https://www.srisakthihospital.com/assets/patient-checkup-CrqMkL7N.png"
            alt="Patient consultation at Sri Sakthi Hospital"
          />

          <div className="hospital-image-card-caption">
            <div className="hospital-caption-icon">
              <HeartHandshake size={25} />
            </div>

            <div>
              <strong>Care with Compassion</strong>
              <span>Your wellbeing matters to us.</span>
            </div>
          </div>
        </div>

        <div className="hospital-hero-floating-icon">
          <ShieldCheck size={30} />
        </div>
      </div>
    </div>

    <div className="hospital-hero-bottom">
      <div className="hospital-container hospital-hero-bottom-inner">
        <span>COMPASSION</span>
        <i />
        <span>CLINICAL CARE</span>
        <i />
        <span>COMMUNITY WELLNESS</span>
      </div>
    </div>
  </section>

  {/* ================= INTRODUCTION ================= */}
  <section className="hospital-intro hospital-section-space">
    <div className="hospital-container hospital-intro-grid">
      <div className="hospital-intro-visual">
        <div className="hospital-intro-image-main">
          <img
            src="https://www.srisakthihospital.com/assets/health-camp-1-mlldPQ3e.png"
            alt="Community health awareness activity"
            loading="lazy"
          />
        </div>

        <div className="hospital-intro-image-small">
          <img
            src="https://www.srisakthihospital.com/assets/medical-equipment-DRN-Mx4T.png"
            alt="Medical equipment"
            loading="lazy"
          />
        </div>

        <div className="hospital-intro-stamp">
          <HeartPulse size={24} />
          <span>CARE FIRST</span>
        </div>
      </div>

      <div className="hospital-intro-copy">
        <span className="hospital-section-label">
          <Sparkles size={16} />
          GET TO KNOW US
        </span>

        <h2>
          Healthcare with a <span>Human Touch</span>
        </h2>

        <div className="hospital-title-line" />

        <p>
          At Sri Sakthi Hospital, we believe that good healthcare begins
          with listening, understanding and treating every patient with
          dignity. Our approach combines careful medical assessment,
          appropriate treatment and clear communication.
        </p>

        <p>
          From outpatient consultations and diagnostic support to
          inpatient care and preventive health guidance, we aim to make
          each step of the healthcare journey clear and supportive.
        </p>

        <div className="hospital-intro-benefits">
          <div>
            <CheckCircle2 size={19} />
            <span>Respectful patient communication</span>
          </div>

          <div>
            <CheckCircle2 size={19} />
            <span>Thoughtful medical assessment</span>
          </div>

          <div>
            <CheckCircle2 size={19} />
            <span>Care focused on individual needs</span>
          </div>
        </div>

        <Link to="/about-doctor" className="hospital-text-link">
          Meet Our Doctor
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>

  {/* ================= VISION AND MISSION ================= */}
  <section className="hospital-purpose">
    <div className="hospital-container">
      <div className="hospital-section-heading">
        <span className="hospital-section-label">
          <HeartHandshake size={16} />
          WHAT GUIDES US
        </span>

        <h2>
          Our Purpose & <span>Commitment</span>
        </h2>

        <p>
          The principles that guide our approach to patient care and
          community wellbeing.
        </p>
      </div>

      <div className="hospital-purpose-grid">
        <article className="hospital-purpose-card">
          <div className="hospital-purpose-icon">
            <Eye size={29} />
          </div>

          <span className="hospital-purpose-label">OUR VISION</span>

          <h3>Better Health, Stronger Communities</h3>

          <p>
            To be a trusted healthcare provider recognised for
            compassionate service, responsible medical practice and
            patient-centred care.
          </p>

          <div className="hospital-purpose-watermark">
            <Eye size={95} />
          </div>
        </article>

        <article className="hospital-purpose-card hospital-purpose-featured">
          <div className="hospital-purpose-icon">
            <Target size={29} />
          </div>

          <span className="hospital-purpose-label">OUR MISSION</span>

          <h3>Care Built on Trust</h3>

          <p>
            To serve our community with respectful healthcare, thoughtful
            clinical assessment, appropriate treatment and a commitment
            to patient safety.
          </p>

          <div className="hospital-purpose-watermark">
            <Target size={95} />
          </div>
        </article>
      </div>
    </div>
  </section>

  {/* ================= GALLERY ================= */}
  <section className="hospital-gallery hospital-section-space" id="hospital-gallery">
    <div className="hospital-container">
      <div className="hospital-section-heading hospital-gallery-heading">
        <span className="hospital-section-label">
          <Sparkles size={16} />
          A CLOSER LOOK
        </span>

        <h2>
          Moments of <span>Care & Connection</span>
        </h2>

        <p>
          Explore images from patient care, medical support and community
          health activities.
        </p>
      </div>

      <div className="hospital-gallery-grid">
        {galleryImages.map((item, index) => (
          <article
            className={`hospital-gallery-card hospital-gallery-card-${index + 1}`}
            key={item.title}
            style={{ "--gallery-index": index }}
          >
            <div className="hospital-gallery-image">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <span className="hospital-gallery-category">
                {item.category}
              </span>

              <div className="hospital-gallery-image-shade" />

              <span className="hospital-gallery-count">
                0{index + 1}
              </span>
            </div>

            <div className="hospital-gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="hospital-gallery-footer">
                <span>
                  <HeartPulse size={15} />
                  Sri Sakthi Hospital
                </span>

                <ArrowRight size={18} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="hospital-gallery-bottom">
        <HeartHandshake size={25} />

        <p>
          <strong>Care that goes beyond the consultation.</strong>
          <span>
            We value respectful communication, responsible care and
            community health awareness.
          </span>
        </p>
      </div>
    </div>
  </section>

  {/* ================= FACILITIES ================= */}
  <section className="hospital-facilities">
    <div className="hospital-facilities-background" />

    <div className="hospital-container hospital-facilities-content">
      <div className="hospital-section-heading hospital-heading-light">
        <span className="hospital-section-label">
          <Building2 size={17} />
          CARE UNDER ONE ROOF
        </span>

        <h2>
          Facilities for Your <span>Healthcare Journey</span>
        </h2>

        <p>
          Essential healthcare facilities and services that support
          assessment, treatment and follow-up care.
        </p>
      </div>

      <div className="hospital-facilities-grid">
        {facilities.map((facility) => {
          const Icon = facility.icon;

          return (
            <article
              className="hospital-facility-card"
              key={facility.title}
            >
              <div className="hospital-facility-top">
                <div className="hospital-facility-icon">
                  <Icon size={27} strokeWidth={1.9} />
                </div>

                <span>{facility.number}</span>
              </div>

              <h3>{facility.title}</h3>

              <p>{facility.description}</p>

              <div className="hospital-facility-divider" />

              <div className="hospital-facility-footer">
                <CheckCircle2 size={16} />
                <span>Patient-focused support</span>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hospital-facilities-callout">
        <div className="hospital-facilities-callout-icon">
          <ShieldCheck size={29} />
        </div>

        <div className="hospital-facilities-callout-copy">
          <h3>Care with Comfort and Respect</h3>

          <p>
            Our goal is to make healthcare information clear and the
            patient experience as supportive as possible.
          </p>
        </div>

        <Link to="/contact" className="hospital-btn hospital-btn-light">
          Contact Hospital
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>

  {/* ================= CLINICAL STRENGTHS ================= */}
  <section className="hospital-clinical hospital-section-space">
    <div className="hospital-container hospital-clinical-layout">
      <div className="hospital-clinical-intro">
        <span className="hospital-section-label">
          <Stethoscope size={17} />
          OUR CLINICAL APPROACH
        </span>

        <h2>
          Focused on <span>Better Health</span>
        </h2>

        <div className="hospital-title-line" />

        <p>
          Our clinical approach focuses on careful assessment,
          evidence-informed decisions, appropriate treatment and
          continuity of care.
        </p>

        <div className="hospital-clinical-highlight">
          <div className="hospital-clinical-highlight-icon">
            <HeartPulse size={26} />
          </div>

          <div>
            <strong>Every Patient Matters</strong>
            <span>Individual needs guide the care journey.</span>
          </div>
        </div>

        <Link to="/about-doctor" className="hospital-btn hospital-btn-navy">
          About Our Doctor
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="hospital-clinical-grid">
        {clinicalStrengths.map((strength, index) => {
          const Icon = strength.icon;

          return (
            <article
              className="hospital-clinical-card"
              key={strength.title}
              style={{ "--clinical-index": index }}
            >
              <div className="hospital-clinical-icon">
                <Icon size={25} strokeWidth={1.9} />
              </div>

              <div className="hospital-clinical-card-copy">
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>

              <span className="hospital-clinical-number">
                0{index + 1}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  </section>

  {/* ================= PATIENT CARE PROMISE ================= */}
  <section className="hospital-promise">
    <div className="hospital-promise-bg" />

    <div className="hospital-container hospital-promise-inner">
      <div className="hospital-promise-emblem">
        <HeartHandshake size={35} />
      </div>

      <div className="hospital-promise-copy">
        <span>OUR COMMITMENT TO YOU</span>

        <h2>Compassion in Every Consultation</h2>

        <p>
          Clear communication, respectful treatment and thoughtful
          healthcare guidance are at the heart of our approach.
        </p>
      </div>

      <div className="hospital-promise-actions">
        <a
          href="tel:+919494456007"
          className="hospital-btn hospital-btn-gold"
        >
          <PhoneCall size={18} />
          Call Hospital
        </a>

        <Link to="/appointment" className="hospital-btn hospital-btn-outline">
          Book a Visit
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>

  {/* ================= OPD TIMINGS ================= */}
  <section className="hospital-timings">
    <div className="hospital-container hospital-timings-inner">
      <div className="hospital-timings-icon">
        <Clock size={28} />
      </div>

      <div className="hospital-timings-copy">
        <span>OUTPATIENT CONSULTATION</span>
        <h3>Plan Your Hospital Visit</h3>

        <p>
          Monday – Saturday
          <span>9:00 AM – 12:30 PM</span>
          <span>5:30 PM – 9:00 PM</span>
        </p>
      </div>

      <Link to="/contact" className="hospital-timings-link">
        <MapPin size={17} />
        Get Contact Details
        <ChevronRight size={18} />
      </Link>
    </div>
  </section>
</main>

);
}

export default Hospital;
