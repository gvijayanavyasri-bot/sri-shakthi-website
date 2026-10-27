import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import "./Appointment.css";

function Appointment() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="appointment-page">
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">Sri Sakthi Hospital / Appointment</div>

          <h1>Request an Appointment</h1>

          <p>
            Complete the form below to prepare your appointment request.
            Please contact the hospital to confirm your booking.
          </p>
        </div>
      </section>

      <section className="section-padding appointment-section">
        <div className="container appointment-layout">
          <div className="appointment-information">
            <span className="appointment-eyebrow">YOUR HEALTH COMES FIRST</span>

            <h2>We are here to help you take the next step.</h2>

            <p>
              Share your contact details and preferred consultation time.
              Hospital staff can confirm availability and provide further
              information.
            </p>

            <div className="appointment-info-card">
              <div className="appointment-info-icon">
                <CalendarDays size={24} />
              </div>

              <div>
                <h3>Appointment Requests</h3>
                <p>Provide your preferred date and consultation time.</p>
              </div>
            </div>

            <div className="appointment-info-card">
              <div className="appointment-info-icon">
                <Clock size={24} />
              </div>

              <div>
                <h3>Consultation Hours</h3>
                <p>Monday – Saturday</p>
                <p>9:00 AM – 12:30 PM</p>
                <p>5:30 PM – 9:00 PM</p>
              </div>
            </div>

            <div className="appointment-info-card">
              <div className="appointment-info-icon">
                <Phone size={24} />
              </div>

              <div>
                <h3>Need Assistance?</h3>
                <a href="tel:9494456007">9494456007</a>
              </div>
            </div>

            <div className="appointment-note">
              Appointment requests submitted through this demo are not
              transmitted to the hospital. Call the hospital to confirm your
              appointment.
            </div>
          </div>

          <div className="appointment-form-card">
            <div className="appointment-form-heading">
              <span>BOOK A VISIT</span>
              <h2>Appointment Details</h2>
              <p>Fields marked with * are required.</p>
            </div>

            {submitted && (
              <div className="appointment-success" role="status">
                <CheckCircle2 size={23} />

                <div>
                  <strong>Request form completed</strong>
                  <p>
                    This is a front-end demo. Please call the hospital to
                    confirm your appointment.
                  </p>
                </div>
              </div>
            )}

            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="appointment-field-row">
                <div className="form-field">
                  <label htmlFor="appointment-name">Full Name *</label>
                  <input
                    id="appointment-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="appointment-phone">Phone Number *</label>
                  <input
                    id="appointment-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="appointment-email">Email Address</label>
                <input
                  id="appointment-email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="form-field">
                <label htmlFor="appointment-service">Service Required *</label>
                <select
                  id="appointment-service"
                  name="service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="general-medicine">General Medicine</option>
                  <option value="family-medicine">Family Medicine</option>
                  <option value="health-checkup">Health Check-up</option>
                  <option value="follow-up">Follow-up Consultation</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="appointment-field-row">
                <div className="form-field">
                  <label htmlFor="appointment-date">Preferred Date *</label>
                  <input
                    id="appointment-date"
                    name="date"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="appointment-time">Preferred Time *</label>
                  <select
                    id="appointment-time"
                    name="time"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a time
                    </option>
                    <option value="morning">Morning: 9 AM – 12:30 PM</option>
                    <option value="evening">Evening: 5:30 PM – 9 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="appointment-message">
                  Additional Information
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  rows="4"
                  placeholder="Briefly describe your appointment needs"
                />
              </div>

              <button
                type="submit"
                className="primary-btn appointment-submit"
              >
                Submit Request <ArrowRight size={18} />
              </button>

              <p className="appointment-disclaimer">
                Submitting this form does not confirm an appointment. Please
                contact the hospital directly to verify availability.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="appointment-bottom">
        <div className="container appointment-bottom-inner">
          <div>
            <h2>Have more questions?</h2>
            <p>Contact the hospital for further assistance.</p>
          </div>

          <Link to="/contact" className="appointment-contact-btn">
            Contact Us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Appointment;