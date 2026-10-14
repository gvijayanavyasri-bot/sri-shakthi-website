
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    title: "Outpatient Consultation",
    category: "OPD SERVICES",
    description:
      "Medical consultation for common health concerns, clinical assessment, treatment guidance, and follow-up recommendations.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    alt: "Doctor providing a medical consultation",
  },
  {
    number: "02",
    title: "Inpatient Care",
    category: "IPD SERVICES",
    description:
      "Hospital-based care and medical observation for patients who require admission and continued clinical attention.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85",
    alt: "Clean and comfortable hospital room",
  },
  {
    number: "03",
    title: "Day Care Services",
    category: "DAY CARE",
    description:
      "Assessment and suitable medical care for patients whose treatment may be provided without an overnight hospital stay.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    alt: "Healthcare professional attending to a patient",
  },
  {
    number: "04",
    title: "Diagnostic Laboratory",
    category: "DIAGNOSTICS",
    description:
      "Diagnostic testing support to help clinicians evaluate health concerns and make informed decisions about care.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=85",
    alt: "Laboratory equipment used for medical testing",
  },
  {
    number: "05",
    title: "In-house Pharmacy",
    category: "PHARMACY",
    description:
      "Convenient access to medicines and guidance on following the medication instructions provided by your clinician.",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=85",
    alt: "Pharmacy shelves stocked with medicines",
  },
  {
    number: "06",
    title: "IV Therapy & Nebulization",
    category: "SUPPORTIVE CARE",
    description:
      "Supportive treatments such as intravenous therapy or nebulization when clinically appropriate and prescribed.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    alt: "Medical professional preparing patient care equipment",
  },
  {
    number: "07",
    title: "Emergency Care",
    category: "URGENT ATTENTION",
    description:
      "Contact the hospital to confirm current emergency-care availability and the appropriate steps for urgent medical needs.",
    image:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=900&q=85",
    alt: "Medical team in a hospital care setting",
  },
  {
    number: "08",
    title: "Chronic Care & Follow-up",
    category: "CONTINUING CARE",
    description:
      "Ongoing medical review and care planning for chronic health concerns based on individual needs and clinical advice.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    alt: "Doctor discussing healthcare with a patient",
  },
];

export default function Services() {
  return (
    <main className="hospital-services">
      {/* HERO */}
      <section className="hs-hero">
        <div className="hs-hero-overlay" />

        <div className="hs-container hs-hero-inner">
          <div className="hs-hero-content">
            <span className="hs-eyebrow hs-eyebrow-light">
              SRI SHAKTHI HOSPITAL
            </span>

            <h1>
              Complete Care.
              <br />
              <span>Closer to You.</span>
            </h1>

            <p>
              Discover our range of healthcare services, with a
              patient-focused approach to consultation, treatment,
              and continued care.
            </p>

            <div className="hs-hero-buttons">
              <Link to="/appointment" className="hs-btn hs-btn-gold">
                Request an Appointment <span>→</span>
              </Link>

              <a href="#hospital-services-list" className="hs-btn hs-btn-outline">
                Explore Services <span>↓</span>
              </a>
            </div>

            <div className="hs-hero-promise">
              <span className="hs-promise-icon">✚</span>
              <span>Listening · Caring · Healing</span>
            </div>
          </div>

          <div className="hs-hero-side" aria-hidden="true">
            <div className="hs-hero-orbit hs-orbit-one" />
            <div className="hs-hero-orbit hs-orbit-two" />

            <div className="hs-hero-emblem">
              <span>✚</span>
              <small>YOUR HEALTH<br />OUR PRIORITY</small>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="hs-intro">
        <div className="hs-container hs-intro-inner">
          <div>
            <span className="hs-eyebrow">PATIENT-CENTRED HEALTHCARE</span>
            <h2>
              Healthcare designed
              <br />
              around <span>your needs.</span>
            </h2>
          </div>

          <p>
            From medical consultations to diagnostic support and
            ongoing care, explore the services listed below. Please
            contact the hospital to confirm availability, timings,
            and whether a particular service is suitable for you.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="hs-services-section" id="hospital-services-list">
        <div className="hs-container">
          <div className="hs-section-heading">
            <span className="hs-eyebrow">OUR AREAS OF CARE</span>
            <h2>Hospital <span>Services</span></h2>
            <p>
              Professional medical guidance with a personal approach
              to healthcare.
            </p>
          </div>

          <div className="hs-grid">
            {services.map((service, index) => (
              <article
                className="hs-card"
                key={service.number}
                style={{ "--hs-index": index }}
              >
                <div className="hs-card-image-wrap">
                  <img
                    className="hs-card-image"
                    src={service.image}
                    alt={service.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  <span className="hs-card-number">{service.number}</span>

                  <span className="hs-card-image-label">
                    {service.category}
                  </span>
                </div>

                <div className="hs-card-content">
                  <div className="hs-card-title-row">
                    <span className="hs-card-mark" aria-hidden="true">✚</span>
                    <h3>{service.title}</h3>
                  </div>

                  <p>{service.description}</p>

                  <Link
                    to="/appointment"
                    className="hs-card-link"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire Now <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CARE BANNER */}
      <section className="hs-appointment">
        <div className="hs-container hs-appointment-inner">
          <div className="hs-appointment-symbol" aria-hidden="true">
            ✚
          </div>

          <div className="hs-appointment-copy">
            <span className="hs-eyebrow hs-eyebrow-light">
              WE ARE HERE TO HELP
            </span>

            <h2>Let’s talk about your healthcare needs.</h2>

            <p>
              Get in touch with our team to ask about consultations,
              service availability, and appointment timings.
            </p>
          </div>

          <Link to="/appointment" className="hs-btn hs-btn-gold">
            Contact for Appointment <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTNOTE */}
      <section className="hs-disclaimer">
        <div className="hs-container">
          <p>
            Service availability and operating arrangements may vary.
            Please contact Sri Shakthi Hospital directly to confirm
            current services. For a medical emergency, contact local
            emergency services immediately.
          </p>
        </div>
      </section>
    </main>
  );
}
