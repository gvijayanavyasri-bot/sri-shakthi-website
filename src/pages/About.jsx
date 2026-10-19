
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="ss-about">
      {/* HERO */}
      <section className="ss-about-hero">
        <div className="ss-hero-background" />

        <div className="ss-hero-overlay" />

        <div className="ss-hero-pulse" aria-hidden="true">
          <svg viewBox="0 0 700 100" preserveAspectRatio="none">
            <path
              className="ss-ecg-line"
              d="M0 50 H180 L205 50 L225 35 L245 72 L270 8 L300 88 L325 50 H390 L410 50 L430 40 L450 58 L470 50 H700"
            />
          </svg>
        </div>

        <div className="ss-hero-content">
          <div className="ss-overline">
            <span className="ss-pulse-dot" />
            WELCOME TO SRI SHAKTHI HOSPITAL
          </div>

          <h1>
            Caring Beyond
            <span>Treatment.</span>
          </h1>

          <p className="ss-hero-subtitle">
            Compassionate Care. Trusted Medicine.
            <br />
            Advanced Healing.
          </p>

          <p className="ss-hero-description">
            We believe every patient deserves thoughtful
            attention, clear medical guidance, and healthcare
            delivered with dignity, compassion, and trust.
          </p>

          <div className="ss-hero-actions">
            <Link to="/services" className="ss-primary-button">
              Explore Our Services <span>↗</span>
            </Link>

            <Link to="/contact" className="ss-outline-button">
              Contact Us
            </Link>
          </div>

          <div className="ss-hero-note">
            <span className="ss-note-line" />
            LISTENING · CARING · HEALING
          </div>
        </div>

        <div className="ss-hero-seal" aria-hidden="true">
          <div className="ss-seal-ring">
            <span className="ss-seal-cross">✚</span>
            <span className="ss-seal-name">SRI SHAKTHI</span>
            <span className="ss-seal-small">HOSPITAL</span>
          </div>
        </div>

        <div className="ss-hero-bottom">
          <span>YOUR HEALTH MATTERS</span>
          <span className="ss-bottom-number">01 / ABOUT US</span>
        </div>
      </section>

      {/* ABOUT INTRODUCTION */}
      <section className="ss-intro ss-section">
        <div className="ss-container ss-intro-grid">
          <div className="ss-intro-heading ss-reveal">
            <span className="ss-section-label">
              WHO WE ARE
            </span>

            <h2>
              Healthcare with
              <span> a Human Touch.</span>
            </h2>

            <div className="ss-gold-rule" />
          </div>

          <div className="ss-intro-copy ss-reveal">
            <p className="ss-lead">
              At Sri Shakthi Hospital, we put people at the
              heart of healthcare.
            </p>

            <p>
              Our approach combines clinical knowledge,
              careful evaluation, and personal attention.
              We strive to make every patient feel heard,
              respected, and confident about their care.
            </p>

            <p>
              From everyday health concerns to the ongoing
              management of medical conditions, our goal is
              to provide dependable guidance and support
              throughout every stage of life.
            </p>

            <Link to="/doctor" className="ss-text-link">
              Learn About Our Doctor <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="ss-values ss-section">
        <div className="ss-container">
          <div className="ss-section-heading ss-reveal">
            <span className="ss-section-label">
              THE FOUNDATION OF OUR CARE
            </span>

            <h2>
              Our Values. <span>Our Promise.</span>
            </h2>

            <p>
              The principles that guide every patient
              interaction and healthcare decision.
            </p>
          </div>

          <div className="ss-values-grid">
            <article className="ss-value-card ss-reveal">
              <div className="ss-value-top">
                <span className="ss-value-number">01</span>
                <span className="ss-value-icon">♡</span>
              </div>

              <h3>Compassion</h3>

              <p>
                We treat every patient with empathy,
                kindness, and genuine consideration
                for their individual needs.
              </p>

              <div className="ss-card-line" />
            </article>

            <article className="ss-value-card ss-reveal">
              <div className="ss-value-top">
                <span className="ss-value-number">02</span>
                <span className="ss-value-icon">✚</span>
              </div>

              <h3>Clinical Excellence</h3>

              <p>
                We value careful assessment, informed
                medical decisions, and a commitment
                to responsible healthcare.
              </p>

              <div className="ss-card-line" />
            </article>

            <article className="ss-value-card ss-reveal">
              <div className="ss-value-top">
                <span className="ss-value-number">03</span>
                <span className="ss-value-icon">◇</span>
              </div>

              <h3>Trust & Transparency</h3>

              <p>
                We believe in clear communication,
                respectful relationships, and helping
                patients understand their care.
              </p>

              <div className="ss-card-line" />
            </article>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="ss-mission ss-section">
        <div className="ss-container ss-mission-grid">
          <article className="ss-mission-card ss-reveal">
            <div className="ss-mission-symbol">◎</div>

            <span className="ss-section-label">
              OUR MISSION
            </span>

            <h2>Care that puts people first.</h2>

            <p>
              To deliver compassionate, quality healthcare
              through ethical practice, personalised
              attention, and a commitment to patient
              dignity and wellbeing.
            </p>
          </article>

          <article className="ss-vision-card ss-reveal">
            <div className="ss-vision-decoration" />

            <div className="ss-mission-symbol">✧</div>

            <span className="ss-section-label">
              OUR VISION
            </span>

            <h2>A healthier community, together.</h2>

            <p>
              To build lasting trust through patient-centred
              healthcare, responsible medical practice,
              and a continuous focus on better wellbeing
              for individuals and families.
            </p>

            <div className="ss-vision-footer">
              COMPASSION <span>•</span> EXCELLENCE
              <span>•</span> TRUST
            </div>
          </article>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="ss-about-cta">
        <div className="ss-container ss-cta-inner">
          <div>
            <span className="ss-cta-label">
              WE ARE HERE TO HELP
            </span>

            <h2>
              Your Health Deserves
              <span> Thoughtful Care.</span>
            </h2>

            <p>
              Connect with Sri Shakthi Hospital for
              appointments and healthcare guidance.
            </p>
          </div>

          <Link to="/contact" className="ss-cta-button">
            Get in Touch <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
