
import { Link } from "react-router-dom";
import "./Doctor.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const expertise = [
  {
    number: "01",
    title: "Family Medicine",
    text: "Personalized healthcare for individuals and families, with attention to prevention and long-term wellness.",
    icon: "✚",
  },
  {
    number: "02",
    title: "Internal Medicine",
    text: "Assessment and management of a wide range of adult medical conditions.",
    icon: "⚕",
  },
  {
    number: "03",
    title: "Clinical Diabetology",
    text: "Individualized diabetes care, monitoring, and ongoing health management.",
    icon: "♡",
  },
  {
    number: "04",
    title: "Infectious Diseases",
    text: "Clinical assessment and treatment planning for a range of infectious illnesses.",
    icon: "✳",
  },
];

const qualifications = [
  ["MBBS", "Bachelor of Medicine and Bachelor of Surgery"],
  ["DNB", "Family Medicine"],
  ["FCD", "Fellowship in Clinical Diabetology"],
  ["FIIM", "Fellowship in Internal Medicine"],
  ["PGPID", "Postgraduate Program in Infectious Diseases"],
];

function Doctors() {
  return (
    <main className="hp-page hp-doctors">
      <section className="hp-hero">
        <div className="hp-container hp-hero-grid">
          <div className="hp-hero-copy hp-reveal">
            <span className="hp-eyebrow">
              <span /> MEET YOUR DOCTOR
            </span>

            <h1>
              Experience in Medicine.
              <em> Compassion in Care.</em>
            </h1>

            <p>
              Meet the doctor behind Sri Sakthi Hospital's commitment to
              thoughtful diagnosis, ethical treatment, and patient-focused
              healthcare.
            </p>

            <div className="hp-actions">
              <Link to="/appointment" className="hp-btn hp-btn-primary">
                Book an Appointment <span>↗</span>
              </Link>
              <a href="tel:9494456007" className="hp-btn hp-btn-outline">
                Call the Hospital
              </a>
            </div>

            <div className="hp-mini-trust">
              <span className="hp-trust-icon">✦</span>
              <div>
                <strong>Listening • Caring • Healing</strong>
                <small>Healthcare with a personal touch</small>
              </div>
            </div>
          </div>

          <div className="hp-doctor-visual hp-reveal hp-delay-1">
            <div className="hp-doctor-image-frame">
              <img
                src={doctorImage}
                alt="Dr. Sakthi Narasimha Garikapati"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="hp-image-fallback">
                <span>⚕</span>
                <strong>Sri Sakthi Hospital</strong>
                <small>Listening • Caring • Healing</small>
              </div>
            </div>

            <div className="hp-doctor-name-card">
              <span className="hp-card-kicker">YOUR HEALTHCARE PARTNER</span>
              <h2>Dr. Sakthi Narasimha Garikapati</h2>
              <p>MBBS · DNB Family Medicine · FCD · FIIM · PGPID</p>
            </div>

            <span className="hp-orbit hp-orbit-one" />
            <span className="hp-orbit hp-orbit-two" />
          </div>
        </div>
      </section>

      <section className="hp-section hp-doctor-intro">
        <div className="hp-container hp-two-col">
          <div className="hp-section-copy hp-reveal">
            <span className="hp-eyebrow">YOUR DOCTOR</span>
            <h2>
              Medical knowledge,
              <em> a human approach.</em>
            </h2>
            <p>
              Dr. Sakthi Narasimha Garikapati focuses on accurate diagnosis,
              evidence-based treatment, and long-term patient wellness.
              His clinical interests include family medicine, internal
              medicine, diabetes care, and infectious diseases.
            </p>
            <p>
              The goal is to help patients understand their health concerns
              and make informed decisions about their care.
            </p>
            <Link to="/about" className="hp-text-link">
              About Sri Sakthi Hospital <span>→</span>
            </Link>
          </div>

          <div className="hp-qualification-panel hp-reveal hp-delay-1">
            <span className="hp-eyebrow">EDUCATION & QUALIFICATIONS</span>
            <h3>Professional qualifications</h3>
            {qualifications.map(([name, detail]) => (
              <div className="hp-qualification" key={name}>
                <span className="hp-qualification-mark">✓</span>
                <div>
                  <strong>{name}</strong>
                  <p>{detail}</p>
                </div>
              </div>
            ))}
            <p className="hp-note">
              Medical registration number listed on the official website:
              <strong> 66982</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="hp-section hp-section-soft">
        <div className="hp-container">
          <div className="hp-section-heading hp-reveal">
            <span className="hp-eyebrow">AREAS OF EXPERTISE</span>
            <h2>
              Care across important
              <em> medical needs.</em>
            </h2>
            <p>
              A patient-first approach to diagnosis, treatment, and continuing
              care.
            </p>
          </div>

          <div className="hp-card-grid hp-four-grid">
            {expertise.map((item) => (
              <article className="hp-feature-card" key={item.number}>
                <div className="hp-feature-top">
                  <span className="hp-feature-icon">{item.icon}</span>
                  <span className="hp-feature-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="hp-card-bottom-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-cta-section">
        <div className="hp-container hp-cta-content">
          <div>
            <span className="hp-eyebrow hp-eyebrow-light">
              WE ARE HERE TO HELP
            </span>
            <h2>Take the next step towards better health.</h2>
            <p>
              Contact Sri Sakthi Hospital to enquire about a consultation.
            </p>
          </div>
          <div className="hp-actions">
            <Link to="/appointment" className="hp-btn hp-btn-gold">
              Request an Appointment <span>↗</span>
            </Link>
            <a href="tel:9494456007" className="hp-phone-link">
              ☎ 9494456007
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Doctors;
