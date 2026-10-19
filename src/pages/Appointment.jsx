import { useState } from "react";
import "./Appointment.css";
export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light-eyebrow">WE ARE HERE TO HELP</span>
          <h1>Request an Appointment</h1>
          <p>Share your details to prepare an appointment request.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container appointment-layout">
          <div className="appointment-info">
            <span className="eyebrow">PATIENT INFORMATION</span>
            <h2>Your Health Deserves Attention</h2>

            <p>
              Complete the form with your contact details and preferred
              consultation time.
            </p>

            <div className="appointment-info-card">
              <span>🕒</span>
              <div>
                <strong>Consultation Hours</strong>
                <p>Monday–Saturday</p>
                <p>9:00 AM–12:30 PM</p>
                <p>5:30 PM–9:00 PM</p>
              </div>
            </div>

            <div className="appointment-info-card">
              <span>✚</span>
              <div>
                <strong>Before Your Visit</strong>
                <p>Bring relevant medical records and current medication details.</p>
              </div>
            </div>

            <p className="privacy-note">
              This demonstration form does not transmit or store patient
              information. Connect it to a secure backend before accepting
              real patient details.
            </p>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <h2>Appointment Details</h2>

            {submitted && (
              <div className="success-message" role="status">
                Your demonstration request was submitted successfully.
                No appointment has been booked. Please contact the hospital
                to confirm availability.
              </div>
            )}

            <div className="form-row">
              <label>
                Full Name *
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                />
              </label>

              <label>
                Phone Number *
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9+\-\s()]{7,20}"
                  autoComplete="tel"
                />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
              </label>

              <label>
                Preferred Date *
                <input
                  type="date"
                  name="date"
                  required
                  min={new Date().toLocaleDateString("en-CA")}
                />
              </label>
            </div>

            <label>
              Preferred Session *
              <select name="session" required defaultValue="">
                <option value="" disabled>Select a session</option>
                <option value="morning">Morning — 9:00 AM to 12:30 PM</option>
                <option value="evening">Evening — 5:30 PM to 9:00 PM</option>
              </select>
            </label>

            <label>
              Reason for Visit
              <textarea
                name="reason"
                rows="4"
                placeholder="Briefly describe your appointment requirements"
              />
            </label>

            <button type="submit" className="btn btn-navy form-submit">
              Submit Appointment Request →
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}