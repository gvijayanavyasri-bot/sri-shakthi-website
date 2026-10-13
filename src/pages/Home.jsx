import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const doctorImage =
  "https://www.srisakthihospital.com/assets/doctor-photo-EMUL-gY8.jpg";

const hospitalImages = {
  reception:
    "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=1000&q=90",
  room:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=90",
  corridor:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=90",
  laboratory:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=90",
  consultation:
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=90",
  care:
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=90",
};

const services = [
  { icon: "✚", title: "General Consultation", text: "Personalised medical consultations, health assessments and treatment guidance for your individual needs." },
  { icon: "▤", title: "Inpatient Care", text: "Patient-focused hospital care with professional supervision and a supportive care environment." },
  { icon: "◷", title: "Day Care Services", text: "Clinically guided observation and appropriate treatments that may not require an overnight stay." },
  { icon: "⌕", title: "Diagnostic Support", text: "Diagnostic support to help your healthcare team assess concerns and plan suitable treatment." },
  { icon: "♡", title: "Emergency Care", text: "Prompt assessment and medical assistance for urgent healthcare needs. Call the hospital for guidance." },
  { icon: "＋", title: "IV Therapy & Nebulization", text: "Treatments provided under qualified medical supervision when clinically indicated." },
];

const facilities = [
  { image: hospitalImages.consultation, title: "Consultation Rooms", text: "A welcoming space for medical discussions and assessments." },
  { image: hospitalImages.room, title: "Patient Rooms", text: "A calm, patient-centred environment for care and recovery." },
  { image: hospitalImages.laboratory, title: "Diagnostic Support", text: "Clinical testing support to assist medical assessment." },
  { image: hospitalImages.care, title: "Patient Care", text: "Attentive care with dignity, respect and clear communication." },
];

function SectionLabel({ children }) {
  return <div className="ss-eyebrow"><span />{children}</div>;
}

export default function Home() {
  return (
    <main className="ss-home">
      <div className="ss-topbar">
        <div className="ss-container ss-topbar-inner">
          <span>📍 Tilak Road, Rajahmundry, Andhra Pradesh</span>
          <div className="ss-topbar-links">
            <a href="tel:9494456007">☎ 94944 56007</a>
            <span className="ss-topbar-divider">|</span>
            <a href="tel:08832422189">0883-2422189</a>
          </div>
          <span className="ss-hours">◷ Mon–Sat: 9:00 AM–12:30 PM&nbsp; | &nbsp;5:30 PM–9:00 PM</span>
        </div>
      </div>

      <section className="ss-hero">
        <div className="ss-hero-photo" role="img" aria-label="Modern hospital building and healthcare environment" />
        <div className="ss-hero-shade" />
        <div className="ss-container ss-hero-content">
          <div className="ss-hero-copy">
            <div className="ss-hero-kicker"><span className="ss-cross">✚</span> LISTENING · CARING · HEALING</div>
            <h1>Compassionate Care.<br /><em>Trusted Medicine.</em></h1>
            <p className="ss-hero-lead">Professional medical guidance with a personal touch. Your health, comfort and peace of mind are at the heart of everything we do.</p>
            <div className="ss-hero-actions">
              <Link to="/appointment" className="ss-button ss-button-gold">Book an Appointment <span>↗</span></Link>
              <Link to="/services" className="ss-button ss-button-outline">Explore Services <span>→</span></Link>
            </div>
            <div className="ss-hero-trust">
              <span className="ss-trust-check">✓</span>
              <div><strong>Care that puts people first</strong><small>Respectful, thoughtful and patient-focused healthcare</small></div>
            </div>
          </div>
          <div className="ss-hero-side-note"><span>✧</span><strong>Your Health<br />Matters</strong><small>Every patient.<br />Every visit.</small></div>
        </div>
        <div className="ss-hero-bottom">
          <div className="ss-container ss-hero-bottom-inner">
            <span>COMPASSION</span><i>✦</i><span>COMMITMENT</span><i>✦</i><span>HEALTHCARE</span>
          </div>
        </div>
      </section>

      <section className="ss-quick-info">
        <div className="ss-container ss-info-grid">
          <article><span className="ss-info-icon">◷</span><div><small>CONSULTATION HOURS</small><strong>9:00 AM–12:30 PM</strong><strong>5:30 PM–9:00 PM</strong><em>Monday to Saturday</em></div></article>
          <article><span className="ss-info-icon">☎</span><div><small>CALL OUR HOSPITAL</small><a href="tel:9494456007"><strong>94944 56007</strong></a><a href="tel:08832422189"><strong>0883-2422189</strong></a><em>We’re here to help</em></div></article>
          <article><span className="ss-info-icon">✚</span><div><small>HEALTHCARE SERVICES</small><strong>OPD · IPD · Day Care</strong><strong>Medical Consultation</strong><em>Ask us about availability</em></div></article>
          <article><span className="ss-info-icon">⌖</span><div><small>VISIT US</small><strong>Tilak Road, Rajahmundry</strong><strong>Andhra Pradesh – 533101</strong><a className="ss-mini-link" href="https://maps.google.com/?q=Sri+Shakthi+Hospital+Rajahmundry" target="_blank" rel="noreferrer">Get directions ↗</a></div></article>
        </div>
      </section>

      <section className="ss-about ss-section">
        <div className="ss-container ss-about-grid">
          <div className="ss-photo-collage">
            <div className="ss-photo-main"><img src={hospitalImages.reception} alt="Hospital reception and welcoming interior" loading="lazy" /></div>
            <div className="ss-photo-stack"><img src={hospitalImages.room} alt="Hospital patient room" loading="lazy" /><img src={hospitalImages.corridor} alt="Bright hospital corridor" loading="lazy" /></div>
            <div className="ss-photo-stamp"><span>✚</span><strong>Care with<br />compassion</strong><small>Every step of the way</small></div>
          </div>
          <div className="ss-about-copy">
            <SectionLabel>WELCOME TO SRI SHAKTHI</SectionLabel>
            <h2>Healthcare built on <em>trust and compassion.</em></h2>
            <p className="ss-intro">At Sri Shakthi Hospital, we believe good healthcare begins with listening, understanding and treating every person with dignity.</p>
            <p>Our approach combines professional medical guidance with clear communication and thoughtful attention to each patient's concerns. We strive to make your healthcare experience reassuring, respectful and focused on your wellbeing.</p>
            <div className="ss-check-list">
              <span>✓ Patient-centred medical attention</span>
              <span>✓ Clear communication and guidance</span>
              <span>✓ Careful assessment and treatment planning</span>
              <span>✓ Respectful care for every patient</span>
            </div>
            <Link to="/about" className="ss-text-link">Discover our hospital <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="ss-services ss-section">
        <div className="ss-container">
          <div className="ss-section-heading">
            <SectionLabel>OUR MEDICAL SERVICES</SectionLabel>
            <h2>Quality care for <em>your health.</em></h2>
            <p>Explore our services and contact our team to confirm availability and the right next step for your needs.</p>
          </div>
          <div className="ss-services-grid">
            {services.map((service, index) => (
              <article className="ss-service-card" key={service.title} style={{ "--delay": `${index * 80}ms` }}>
                <div className="ss-service-card-top"><span className="ss-service-icon">{service.icon}</span><small>0{index + 1}</small></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <Link to="/services" aria-label={`Learn more about ${service.title}`}>Learn more <span>→</span></Link>
                <div className="ss-card-rule" />
              </article>
            ))}
          </div>
          <div className="ss-center-action"><Link to="/services" className="ss-button ss-button-navy">View all services <span>↗</span></Link></div>
        </div>
      </section>

      <section className="ss-doctor ss-section">
        <div className="ss-container ss-doctor-grid">
          <div className="ss-doctor-photo">
            <div className="ss-doctor-photo-bg" />
            <img src={doctorImage} alt="Dr. Sakthi Narasimha Garikapati" loading="lazy" />
            <div className="ss-doctor-photo-tag"><span>✚</span><div><strong>Personalised guidance</strong><small>Medical care with compassion</small></div></div>
          </div>
          <div className="ss-doctor-copy">
            <SectionLabel>MEET YOUR DOCTOR</SectionLabel>
            <h2>Medical expertise with <em>a personal touch.</em></h2>
            <h3>Dr. Sakthi Narasimha Garikapati</h3>
            <p className="ss-credentials">MBBS · DNB Family Medicine · FCD · FIIM · PGPID</p>
            <div className="ss-specialty"><span>✚</span> Family &amp; Internal Medicine</div>
            <p>Focused on understanding each patient's concerns, careful clinical assessment and appropriate treatment guidance. The aim is to help patients make informed decisions about their health.</p>
            <div className="ss-doctor-details">
              <div><span>◷</span><p><strong>OPD Consultation</strong><small>Monday–Saturday</small></p></div>
              <div><span>▣</span><p><strong>Registration No.</strong><small>66982</small></p></div>
            </div>
            <Link to="/doctor" className="ss-button ss-button-gold">View doctor profile <span>→</span></Link>
          </div>
          <aside className="ss-appointment-card">
            <span className="ss-appointment-icon">▣</span>
            <small>HERE FOR YOUR HEALTH</small>
            <h3>Plan your next visit</h3>
            <p>Contact our team for appointment enquiries and consultation timings.</p>
            <Link to="/appointment" className="ss-button ss-button-navy">Book appointment <span>↗</span></Link>
            <a href="tel:9494456007" className="ss-card-phone">☎ 94944 56007</a>
          </aside>
        </div>
      </section>

      <section className="ss-facilities ss-section">
        <div className="ss-container">
          <div className="ss-facilities-heading">
            <div><SectionLabel>INSIDE OUR HOSPITAL</SectionLabel><h2>A welcoming space for <em>better care.</em></h2></div>
            <p>Take a look at healthcare environments that reflect the calm, clean and supportive experience patients deserve. Images are illustrative and may not depict the actual premises.</p>
          </div>
          <div className="ss-facilities-grid">
            {facilities.map((facility, index) => (
              <Link to="/facilities" className="ss-facility-card" key={facility.title}>
                <div className="ss-facility-image"><img src={facility.image} alt={facility.title} loading="lazy" /><span>0{index + 1}</span></div>
                <div className="ss-facility-copy"><h3>{facility.title}</h3><p>{facility.text}</p><span className="ss-facility-arrow">↗</span></div>
              </Link>
            ))}
          </div>
          <div className="ss-center-action"><Link to="/facilities" className="ss-text-link">Explore hospital facilities <span>→</span></Link></div>
        </div>
      </section>

      <section className="ss-commitment">
        <div className="ss-container ss-commitment-inner">
          <div className="ss-commitment-mark">✚</div>
          <div><small>YOUR HEALTH IS OUR COMMITMENT</small><h2>One caring step can make a difference.</h2><p>Reach out to enquire about appointments, services and visiting hours.</p></div>
          <div className="ss-commitment-actions"><Link to="/appointment" className="ss-button ss-button-gold">Book an appointment <span>↗</span></Link><a href="tel:9494456007" className="ss-call-button">☎ <span><small>CALL OUR TEAM</small><strong>94944 56007</strong></span></a></div>
        </div>
      </section>

      <section className="ss-contact-strip">
        <div className="ss-container ss-contact-inner">
          <div><span>✉</span><p><small>EMAIL US</small><a href="mailto:srisakthihospitalrjy@gmail.com">srisakthihospitalrjy@gmail.com</a></p></div>
          <div><span>⌖</span><p><small>OUR ADDRESS</small><strong>79-16-6, Tilak Road, Rajahmundry, Andhra Pradesh – 533101</strong></p></div>
          <Link to="/contact" className="ss-contact-link">Contact us <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
