import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  HeartPulse,
  Stethoscope,
  Activity,
  Microscope,
  BedDouble,
  Clock,
  ShieldCheck,
  HeartHandshake,
  ClipboardCheck,
  Syringe,
  Ambulance,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    id: 1,
    icon: HeartPulse,
    title: "General Medicine",
    description:
      "Complete medical consultation, diagnosis and treatment for common health conditions and everyday medical concerns.",
    features: [
      "General health checkups",
      "Fever and infections",
      "Blood pressure management",
    ],
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "Family & Internal Medicine",
    description:
      "Personalized healthcare for individuals and families with a focus on preventive care and long-term wellness.",
    features: [
      "Family healthcare",
      "Medical consultations",
      "Preventive healthcare",
    ],
  },
  {
    id: 3,
    icon: Activity,
    title: "Clinical Diabetology",
    description:
      "Diabetes evaluation, monitoring and guidance to support better blood sugar management and healthy living.",
    features: [
      "Diabetes assessment",
      "Blood sugar monitoring",
      "Lifestyle guidance",
    ],
  },
  {
    id: 4,
    icon: Microscope,
    title: "Diagnostic Services",
    description:
      "Diagnostic support to help identify health conditions and assist doctors in planning appropriate treatment.",
    features: [
      "Diagnostic investigations",
      "Medical evaluation",
      "Health monitoring",
    ],
  },
  {
    id: 5,
    icon: BedDouble,
    title: "Inpatient Care",
    description:
      "Comfortable inpatient care with medical supervision and attention to patient needs during treatment.",
    features: [
      "Patient admission",
      "Medical supervision",
      "Patient support",
    ],
  },
  {
    id: 6,
    icon: Ambulance,
    title: "Emergency Assistance",
    description:
      "Medical assistance for urgent health concerns with prompt attention and appropriate clinical guidance.",
    features: [
      "Urgent medical assessment",
      "Initial medical care",
      "Emergency guidance",
    ],
  },
  {
    id: 7,
    icon: Syringe,
    title: "Day Care Services",
    description:
      "Medical procedures and treatments that may be completed during a hospital visit without overnight admission.",
    features: [
      "Day care treatment",
      "Patient observation",
      "Medical assistance",
    ],
  },
  {
    id: 8,
    icon: ClipboardCheck,
    title: "IV Therapy & Nebulization",
    description:
      "Clinically supervised IV therapy and nebulization services when prescribed by the treating doctor.",
    features: [
      "IV fluid administration",
      "Nebulization support",
      "Patient monitoring",
    ],
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted Medical Care",
    description:
      "Patient-focused medical attention with an emphasis on safety and quality.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description:
      "We value every patient and understand that every health concern is different.",
  },
  {
    icon: ClipboardCheck,
    title: "Accurate Evaluation",
    description:
      "Careful clinical assessment to support appropriate diagnosis and treatment.",
  },
  {
    icon: Clock,
    title: "Convenient Consultation",
    description:
      "Organized consultation hours to help patients access medical care.",
  },
];

function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(".service-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="sri-services">
      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <span className="services-label">
            <Sparkles size={17} />
            OUR MEDICAL SERVICES
          </span>

          <h1>
            Complete Care.
            <br />
            <span>Better Health.</span>
          </h1>

          <p>
            Comprehensive healthcare services with compassion, medical
            expertise and a commitment to your well-being.
          </p>

          <div className="services-hero-buttons">
            <Link to="/contact" className="services-primary-btn">
              Contact Us <ArrowRight size={18} />
            </Link>

            <Link to="/about-doctor" className="services-outline-btn">
              Meet Our Doctor
            </Link>
          </div>
        </div>

        <div className="services-hero-bottom">
          <span>Professional Care</span>
          <span className="services-dot"></span>
          <span>Patient First</span>
          <span className="services-dot"></span>
          <span>Healthy Living</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-intro service-reveal">
        <div className="services-section-tag">
          <span></span> WHAT WE OFFER
        </div>

        <h2>
          Healthcare Services Designed
          <br />
          <span>Around You</span>
        </h2>

        <p>
          At Sri Sakthi Hospital, we aim to provide accessible and
          patient-focused medical care. Our services cover general medical
          consultation, diabetes care, diagnostic support and other healthcare
          needs.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services-list-section">
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card service-reveal"
                key={service.id}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <span className="service-number">
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-divider"></div>

                <ul>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <CheckCircle2 size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-card-link">
                  Enquire Now <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="services-why-section">
        <div className="services-why-container">
          <div className="services-why-image service-reveal">
            <img
              src="https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg"
              alt="Doctor at Sri Sakthi Hospital"
            />

            <div className="services-image-caption">
              <span>YOUR HEALTH MATTERS</span>
              <h3>Care with Compassion</h3>
            </div>
          </div>

          <div className="services-why-content service-reveal">
            <div className="services-section-tag">
              <span></span> WHY CHOOSE US
            </div>

            <h2>
              Your Health Is Our
              <span> Priority</span>
            </h2>

            <p>
              We believe healthcare should be built on trust, understanding
              and personal attention. Our approach focuses on listening to
              patients and providing appropriate medical guidance.
            </p>

            <div className="services-benefits">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div className="services-benefit" key={index}>
                    <div className="benefit-icon">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OPD SECTION */}
      <section className="services-opd service-reveal">
        <div className="services-opd-icon">
          <Clock size={32} />
        </div>

        <div className="services-opd-text">
          <span>CONSULTATION HOURS</span>
          <h2>We Are Here to Care for You</h2>

          <p>
            Monday – Saturday: 9:00 AM – 12:30 PM
            <br />
            Evening: 5:30 PM – 9:00 PM
          </p>
        </div>

        <Link to="/contact" className="services-opd-btn">
          Contact Hospital <ArrowRight size={18} />
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="services-cta service-reveal">
        <div className="services-cta-content">
          <span>WE ARE READY TO HELP</span>

          <h2>
            Your Health. Our Commitment.
          </h2>

          <p>
            Take the next step towards better health. Contact Sri Sakthi
            Hospital for consultation and medical assistance.
          </p>

          <Link to="/contact" className="services-cta-btn">
            <Phone size={18} />
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;