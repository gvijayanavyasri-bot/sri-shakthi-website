
import { Link } from "react-router-dom";
import "./About.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const hospitalImages = [
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    title: "Comfortable Patient Care",
    description: "A welcoming environment for patients and families.",
    alt: "Hospital patient room",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    title: "Medical Consultation",
    description: "Professional consultation and medical guidance.",
    alt: "Doctor working in a clinical setting",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    title: "Diagnostic Support",
    description: "Diagnostic testing to support clinical decisions.",
    alt: "Medical laboratory equipment",
  },
];

const values = [
  {
    number: "01",
    icon: "♡",
    title: "Compassion",
    description:
      "Listening carefully, treating people with dignity, and understanding each patient's concerns.",
  },
  {
    number: "02",
    icon: "✚",
    title: "Clinical Excellence",
    description:
      "Supporting medical decisions with careful assessment and appropriate evidence-based care.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Trust & Transparency",
    description:
      "Clear communication that helps patients understand their care and make informed decisions.",
  },
];

const services = [
  {
    icon: "✚",
    title: "Outpatient Consultation",
    description:
      "Personalised consultation for general health concerns and medical conditions.",
  },
  {
    icon: "▣",
    title: "Inpatient Care",
    description:
      "Hospital admission and monitoring for patients requiring continued care.",
  },
  {
    icon: "◷",
    title: "Day Care Services",
    description:
      "Appropriate short-term medical care that may not require an overnight stay.",
  },
  {
    icon: "⌕",
    title: "Diagnostic Laboratory",
    description:
      "Diagnostic testing support for medical assessment and treatment decisions.",
  },
  {
    icon: "＋",
    title: "Pharmacy",
    description:
      "Convenient access to medicines within the hospital premises.",
  },
  {
    icon: "♡",
    title: "IV Therapy & Nebulization",
    description:
      "Supportive treatments when clinically appropriate and prescribed.",
  },
  {
    icon: "✧",
    title: "Emergency Care",
    description:
      "Emergency medical services listed by the hospital. Contact the hospital to confirm current arrangements.",
  },
  {
    icon: "◎",
    title: "Chronic Care",
    description:
      "Medical review and continuing care for long-term health conditions.",
  },
];

const expertise = [
  "Family Medicine",
  "Internal Medicine",
  "Clinical Diabetology",
  "Infectious Diseases",
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-pattern" aria-hidden="true" />

        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <span className="about-eyebrow about-eyebrow-light">
              LISTENING · CARING · HEALING
            </span>

            <h1>
              Compassionate Care.
              <br />
              <span>Trusted Medicine.</span>
            </h1>

            <p className="about-hero-lead">
              At Sri Sakthi Hospital, we believe healthcare begins
              with listening, understanding, and treating every
              patient with compassion, precision, and respect.
            </p>

            <div className="about-hero-actions">
              <Link to="/doctor" className="about-btn about-btn-gold">
                Meet Our Doctor <span>→</span>
              </Link>

              <Link to="/services" className="about-btn about-btn-outline">
                Explore Services <span>↗</span>
              </Link>
            </div>

            <div className="about-hero-trust">
              <span className="about-trust-icon">✚</span>
              <div>
                <strong>Patient-focused healthcare</strong>
                <span>Care with compassion and trust</span>
              </div>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-frame">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
                fetchPriority="high"
              />
              <div className="about-hero-image-shade" />

              <div className="about-hero-image-caption">
                <span className="about-caption-mark">✚</span>
                <div>
                  <strong>Care With Compassion</strong>
                  <span>Your health matters to us</span>
                </div>
              </div>
            </div>

            <div className="about-experience-badge">
              <span className="about-badge-star">✦</span>
              <strong>15+</strong>
              <span>Years of Clinical<br />Experience</span>
            </div>

            <div className="about-hero-floating-card">
              <span>♡</span>
              <div>
                <strong>Listening. Caring. Healing.</strong>
                <small>A patient-first approach</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="about-facts">
        <div className="about-container about-facts-grid">
          <div className="about-fact">
            <span className="about-fact-icon">✚</span>
            <div>
              <strong>OPD & IPD</strong>
              <span>Consultation and inpatient care</span>
            </div>
          </div>

          <div className="about-fact">
            <span className="about-fact-icon">◎</span>
            <div>
              <strong>Day Care</strong>
              <span>Short-term care services</span>
            </div>
          </div>

          <div className="about-fact">
            <span className="about-fact-icon">♡</span>
            <div>
              <strong>Patient First</strong>
              <span>Care with dignity and respect</span>
            </div>
          </div>

          <div className="about-fact">
            <span className="about-fact-icon">✦</span>
            <div>
              <strong>Since 2009</strong>
              <span>Serving the community</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE HOSPITAL */}
      <section className="about-intro">
        <div className="about-container about-intro-grid">
          <div className="about-intro-visual">
            <div className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1100&q=85"
                alt="Modern hospital interior"
                loading="lazy"
              />
            </div>

            <div className="about-intro-stamp">
              <span>CARE</span>
              <strong>WITH</strong>
              <span>COMPASSION</span>
              <i>✦</i>
            </div>
          </div>

          <div className="about-intro-content">
            <span className="about-eyebrow">ABOUT OUR HOSPITAL</span>

            <h2 className="about-title">
              Healthcare With
              <span> A Human Touch.</span>
            </h2>

            <p>
              Sri Sakthi Hospital is a healthcare centre in Rajahmundry,
              Andhra Pradesh, committed to compassionate medical care,
              ethical practice, and patient-focused service.
            </p>

            <p>
              From outpatient consultations and inpatient care to
              diagnostic support and ongoing medical guidance, our
              aim is to help patients understand their health needs
              and navigate their care with confidence.
            </p>

            <div className="about-check-list">
              <div>
                <span>✓</span>
                <strong>Personalised medical attention</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Clear communication and guidance</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Support for ongoing health needs</strong>
              </div>
              <div>
                <span>✓</span>
                <strong>Respectful care for individuals and families</strong>
              </div>
            </div>

            <Link to="/hospital" className="about-text-link">
              Discover Our Hospital <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT GUIDES US</span>
            <h2 className="about-title">
              Our Values.
              <span> Our Commitment.</span>
            </h2>
            <p>
              The principles that guide how we communicate with
              patients and approach their healthcare needs.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <article className="about-value-card" key={value.number}>
                <div className="about-value-top">
                  <span>{value.number}</span>
                  <i>{value.icon}</i>
                </div>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="about-value-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <section className="about-doctor">
        <div className="about-container about-doctor-grid">
          <div className="about-doctor-photo-column">
            <div className="about-doctor-photo-frame">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati, Sri Sakthi Hospital"
                loading="lazy"
              />
            </div>

            <div className="about-doctor-photo-caption">
              <span className="about-doctor-caption-icon">✚</span>
              <div>
                <strong>Dr. Sakthi Narasimha Garikapati</strong>
                <span>MBBS · DNB Family Medicine</span>
              </div>
            </div>
          </div>

          <div className="about-doctor-content">
            <span className="about-eyebrow">MEET YOUR DOCTOR</span>

            <h2 className="about-title">
              Medical Knowledge.
              <span> Compassionate Care.</span>
            </h2>

            <h3 className="about-doctor-name">
              Dr. Sakthi Narasimha Garikapati
            </h3>

            <p>
              Dr. Sakthi Narasimha Garikapati is the physician featured
              on the hospital's official website. His listed areas of
              expertise include family medicine, internal medicine,
              clinical diabetology, and infectious diseases.
            </p>

            <p>
              His professional approach emphasises careful assessment,
              evidence-based treatment, clear explanations, and
              long-term patient wellness.
            </p>

            <div className="about-qualification-heading">
              Professional Qualifications
            </div>

            <div className="about-qualifications">
              <div>
                <span>01</span>
                <strong>MBBS</strong>
                <small>Medicine and Surgery</small>
              </div>
              <div>
                <span>02</span>
                <strong>DNB Family Medicine</strong>
                <small>Family Medicine</small>
              </div>
              <div>
                <span>03</span>
                <strong>FCD</strong>
                <small>Clinical Diabetology</small>
              </div>
              <div>
                <span>04</span>
                <strong>FIIM</strong>
                <small>Internal Medicine</small>
              </div>
              <div>
                <span>05</span>
                <strong>PGPID</strong>
                <small>Infectious Diseases</small>
              </div>
            </div>

            <div className="about-expertise">
              <strong>Areas of Expertise</strong>
              <div className="about-expertise-tags">
                {expertise.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <Link to="/doctor" className="about-btn about-btn-navy">
              View Full Doctor Profile <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">OUR HEALTHCARE SERVICES</span>
            <h2 className="about-title">
              Support for Your
              <span> Health Journey.</span>
            </h2>
            <p>
              Explore the services listed by Sri Sakthi Hospital.
              Please contact the hospital to confirm availability
              and suitability for your needs.
            </p>
          </div>

          <div className="about-services-grid">
            {services.map((service, index) => (
              <article className="about-service-card" key={service.title}>
                <div className="about-service-card-top">
                  <span className="about-service-icon">{service.icon}</span>
                  <span className="about-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link to="/services" className="about-service-link">
                  Learn More <span>→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="about-services-footer">
            <Link to="/services" className="about-btn about-btn-navy">
              Explore All Services <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FACILITIES GALLERY */}
      <section className="about-gallery">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">OUR CARE ENVIRONMENT</span>
            <h2 className="about-title">
              A Closer Look at
              <span> Healthcare.</span>
            </h2>
            <p>
              Explore illustrative healthcare imagery. For actual
              hospital facilities, use verified photographs of
              Sri Sakthi Hospital.
            </p>
          </div>

          <div className="about-gallery-grid">
            {hospitalImages.map((item, index) => (
              <article className="about-gallery-card" key={item.title}>
                <div className="about-gallery-image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="about-gallery-index">
                    0{index + 1}
                  </span>
                </div>

                <div className="about-gallery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-gallery-footer">
            <Link to="/hospital" className="about-text-link">
              Explore Hospital Details <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-mission">
        <div className="about-container about-mission-grid">
          <article className="about-mission-card">
            <span className="about-mission-icon">◎</span>
            <span className="about-eyebrow about-eyebrow-light">
              OUR MISSION
            </span>
            <h2>Care With Purpose.</h2>
            <p>
              To provide compassionate, quality healthcare through
              ethical practice, appropriate medical care, and respect
              for every patient's dignity.
            </p>
          </article>

          <article className="about-mission-card about-mission-card-featured">
            <span className="about-mission-icon">✦</span>
            <span className="about-eyebrow about-eyebrow-light">
              OUR VISION
            </span>
            <h2>A Healthier Community.</h2>
            <p>
              To build lasting relationships with patients and support
              a healthier community through patient-centred service
              and continuous improvement.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="about-contact">
        <div className="about-container about-contact-grid">
          <div className="about-contact-content">
            <span className="about-eyebrow">GET IN TOUCH</span>
            <h2 className="about-title">
              Your Health Matters.
              <span> We're Here to Help.</span>
            </h2>

            <p>
              Contact Sri Sakthi Hospital for consultation enquiries,
              appointment information, and details about available
              medical services.
            </p>

            <div className="about-contact-list">
              <div className="about-contact-item">
                <span className="about-contact-icon">☎</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:9494456007">9494456007</a>
                  <a href="tel:08832422189">0883-2422189</a>
                </div>
              </div>

              <div className="about-contact-item">
                <span className="about-contact-icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:srisakthihospitalrjy@gmail.com">
                    srisakthihospitalrjy@gmail.com
                  </a>
                </div>
              </div>

              <div className="about-contact-item">
                <span className="about-contact-icon">⌖</span>
                <div>
                  <strong>Hospital Address</strong>
                  <span>
                    79-16-6, Tilak Road, opposite lane to Sai Baba Temple,
                    Rajahmundry, Andhra Pradesh 533101
                  </span>
                </div>
              </div>

              <div className="about-contact-item">
                <span className="about-contact-icon">◷</span>
                <div>
                  <strong>Consultation Hours</strong>
                  <span>9:00 AM – 12:30 PM</span>
                  <span>5:30 PM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="about-contact-card">
            <div className="about-contact-card-symbol">✚</div>
            <span className="about-eyebrow about-eyebrow-light">
              SRI SAKTHI HOSPITAL
            </span>

            <h3>Take the Next Step.</h3>

            <p>
              Reach out to enquire about consultation times and
              appointment availability.
            </p>

            <Link to="/appointment" className="about-btn about-btn-gold">
              Request an Appointment <span>→</span>
            </Link>

            <a
              className="about-official-link"
              href="https://www.srisakthihospital.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Official Website ↗
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
