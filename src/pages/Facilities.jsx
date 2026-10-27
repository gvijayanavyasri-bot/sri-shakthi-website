
import { Link } from "react-router-dom";
import "./Facilities.css";

const facilities = [
  {
    number: "01",
    title: "Hospital Exterior",
    category: "HOSPITAL ENVIRONMENT",
    text: "Find the hospital location and plan your visit.",
    image: "/images/hospital-exterior.jpg",
  },
  {
    number: "02",
    title: "Reception & Waiting Area",
    category: "PATIENT WELCOME",
    text: "A welcoming space for patients and accompanying family members.",
    image: "/images/reception.jpg",
  },
  {
    number: "03",
    title: "Hospital Interior",
    category: "CARE ENVIRONMENT",
    text: "Explore the hospital environment and available facilities.",
    image: "/images/hospital-interior.jpg",
  },
  {
    number: "04",
    title: "Consultation Room",
    category: "CONSULTATION",
    text: "Contact the hospital to learn about consultation arrangements.",
    image: "/images/consultation-room.jpg",
  },
];

export default function Facilities() {
  return (
    <div className="facilities-page">
      <section className="facilities-banner">
        <div className="container">
          <span className="eyebrow">OUR HOSPITAL</span>
          <h1 className="page-title">A Closer Look at Our Facilities</h1>
          <p>
            Explore the hospital environment and contact our team
            to confirm the facilities currently available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container facilities-grid">
          {facilities.map((facility, index) => (
            <article
              className="facility-card"
              key={facility.number}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="facility-image">
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                />
                <span>{facility.number}</span>
              </div>
              <div className="facility-copy">
                <span className="facility-category">{facility.category}</span>
                <h2>{facility.title}</h2>
                <p>{facility.text}</p>
                <Link to="/contact">Enquire Now ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
