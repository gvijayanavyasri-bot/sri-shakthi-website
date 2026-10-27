
import { Link } from "react-router-dom";
import "./Gallery.css";

const photos = [
  { title: "Hospital Exterior", image: "/images/hospital-exterior.jpg" },
  { title: "Hospital Interior", image: "/images/hospital-interior.jpg" },
  { title: "Reception Area", image: "/images/reception.jpg" },
  { title: "Consultation Room", image: "/images/consultation-room.jpg" },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      <section className="gallery-banner">
        <div className="container">
          <span className="eyebrow">OUR PHOTO GALLERY</span>
          <h1 className="page-title">A View Inside Our Hospital</h1>
          <p>
            Discover the hospital environment through photographs
            supplied from the official hospital website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {photos.map((photo, index) => (
            <figure className={`gallery-item gallery-item-${index + 1}`} key={photo.title}>
              <img src={photo.image} alt={photo.title} loading="lazy" />
              <figcaption>
                <span>0{index + 1}</span>
                <strong>{photo.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="container gallery-contact">
          <p>Would you like more information before visiting?</p>
          <Link to="/contact" className="btn">Contact Our Hospital →</Link>
        </div>
      </section>
    </div>
  );
}
