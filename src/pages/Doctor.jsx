
import { Link } from "react-router-dom";
import "./Doctor.css";

export default function Doctor() {
  return (
    <div className="doctor-page">
      <section className="doctor-hero">
        <div className="container doctor-grid">
          <div className="doctor-photo">
            <img
              src="/images/doctor.jpg"
              alt="Hospital doctor"
            />
            <div className="doctor-photo-caption">
              Professional medical care
            </div>
          </div>

          <div className="doctor-content">
            <span className="eyebrow">MEET OUR DOCTOR</span>
            <h1 className="page-title">
              Dedicated to Your Health
            </h1>
            <p>
              Experience medical care centred on understanding,
              professional guidance and patient wellbeing.
            </p>
            <div className="doctor-points">
              <div><span>✓</span> Patient-focused consultation</div>
              <div><span>✓</span> Clear medical guidance</div>
              <div><span>✓</span> Compassionate communication</div>
            </div>
            <p className="doctor-note">
              Please contact the hospital to confirm the doctor's name,
              qualifications, specialisation and availability.
            </p>
            <Link to="/contact" className="btn">
              Enquire About an Appointment →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container section-heading">
          <span className="eyebrow">PATIENT CARE</span>
          <h2>Care Begins With Listening</h2>
          <p>
            Every consultation should provide an opportunity to discuss
            concerns, understand medical guidance and plan appropriate
            next steps with a qualified professional.
          </p>
          <Link to="/contact" className="btn">Contact the Hospital</Link>
        </div>
      </section>
    </div>
  );
}
