
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    title: "A welcoming care environment",
    category: "Hospital",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=90",
    alt: "Bright hospital clinical environment",
    shape: "gallery-tall",
  },
  {
    id: 2,
    title: "A moment of consultation",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=90",
    alt: "Doctor speaking with a patient",
    shape: "",
  },
  {
    id: 3,
    title: "Diagnostic care",
    category: "Medical Care",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=90",
    alt: "Healthcare professional working in a laboratory",
    shape: "",
  },
  {
    id: 4,
    title: "Spaces made for recovery",
    category: "Hospital",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=90",
    alt: "Hospital patient room",
    shape: "gallery-wide",
  },
  {
    id: 5,
    title: "Healthcare professionals at work",
    category: "Medical Care",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=90",
    alt: "Medical team working together",
    shape: "",
  },
  {
    id: 6,
    title: "Supporting every patient",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90",
    alt: "Medical professional providing patient care",
    shape: "",
  },
  {
    id: 7,
    title: "Modern clinical equipment",
    category: "Medical Care",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=90",
    alt: "Medical treatment equipment",
    shape: "",
  },
  {
    id: 8,
    title: "Care with compassion",
    category: "Patient Care",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=90",
    alt: "Doctor in a clinical environment",
    shape: "gallery-wide",
  },
];

const categories = ["All Moments", "Hospital", "Patient Care", "Medical Care"];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Moments");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All Moments"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  const closeLightbox = () => setSelectedImage(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();

      if (event.key === "ArrowRight") {
        const index = filteredImages.findIndex(
          (item) => item.id === selectedImage.id
        );
        setSelectedImage(filteredImages[(index + 1) % filteredImages.length]);
      }

      if (event.key === "ArrowLeft") {
        const index = filteredImages.findIndex(
          (item) => item.id === selectedImage.id
        );
        setSelectedImage(
          filteredImages[
            (index - 1 + filteredImages.length) % filteredImages.length
          ]
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, filteredImages]);

  const showNextImage = (direction) => {
    const index = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );
    const nextIndex =
      (index + direction + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="hospital-gallery">
      <section className="gallery-hero">
        <div className="gallery-container gallery-hero-layout">
          <div className="gallery-hero-copy gallery-reveal">
            <span className="gallery-eyebrow">
              <span />
              A CLOSER LOOK AT OUR WORLD
            </span>
            <h1>
              Care has a
              <br />
              <em>human side.</em>
            </h1>
            <p>
              Explore moments that reflect the spaces, people and medical
              care behind a more thoughtful healthcare experience.
            </p>
            <a href="#gallery-collection" className="gallery-hero-link">
              Explore the gallery <span>↓</span>
            </a>
          </div>

          <div className="gallery-hero-art gallery-reveal gallery-delay">
            <div className="gallery-hero-outline" />
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=90"
              alt="Doctor and patient during a consultation"
            />
            <div className="gallery-hero-caption">
              <span className="gallery-caption-symbol">✳</span>
              <div>
                <small>OUR GUIDING THOUGHT</small>
                <strong>Listening. Caring. Healing.</strong>
              </div>
            </div>
            <span className="gallery-hero-index">S / S HOSPITAL</span>
          </div>
        </div>
        <div className="gallery-hero-footer">
          <span>PEOPLE</span>
          <span>·</span>
          <span>PLACES</span>
          <span>·</span>
          <span>CARE</span>
        </div>
      </section>

      <section className="gallery-collection" id="gallery-collection">
        <div className="gallery-container">
          <div className="gallery-section-heading gallery-reveal">
            <div>
              <span className="gallery-eyebrow">
                <span />
                THE VISUAL COLLECTION
              </span>
              <h2>
                Moments of <em>care.</em>
              </h2>
            </div>
            <p>
              A selection of healthcare environments and care-related imagery.
              Choose a category to explore.
            </p>
          </div>

          <div className="gallery-toolbar">
            <div className="gallery-filters" aria-label="Filter gallery images">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`gallery-filter ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
            <span className="gallery-total">
              {String(filteredImages.length).padStart(2, "0")} IMAGES
            </span>
          </div>

          <div className="gallery-photo-grid">
            {filteredImages.map((item, index) => (
              <button
                type="button"
                className={`gallery-photo ${item.shape}`}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                style={{ "--photo-index": index }}
                aria-label={`Open image: ${item.title}`}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="gallery-photo-shade" />
                <span className="gallery-photo-top">
                  <span>{item.category}</span>
                  <span className="gallery-photo-number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </span>
                <span className="gallery-photo-bottom">
                  <span className="gallery-photo-title">{item.title}</span>
                  <span className="gallery-photo-open" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </button>
            ))}
          </div>

          <p className="gallery-note">
            Image note: These are illustrative healthcare images, not verified
            photographs of Sri Sakthi Hospital. Replace them with your own
            hospital photographs for an authentic hospital gallery.
          </p>
        </div>
      </section>

      <section className="gallery-quote-section">
        <div className="gallery-container gallery-quote-layout">
          <div className="gallery-quote-symbol" aria-hidden="true">“</div>
          <div className="gallery-quote-copy">
            <span className="gallery-eyebrow gallery-eyebrow-light">
              THE HEART OF OUR WORK
            </span>
            <h2>
              Every patient deserves to be heard, understood and cared for.
            </h2>
            <p>Compassionate care. Trusted medicine. Advanced healing.</p>
          </div>
          <div className="gallery-quote-mark">
            <span>✳</span>
            <small>LISTENING</small>
            <small>CARING</small>
            <small>HEALING</small>
          </div>
        </div>
      </section>

      <section className="gallery-contact">
        <div className="gallery-container gallery-contact-layout">
          <div>
            <span className="gallery-eyebrow">
              <span />
              WE ARE HERE TO HELP
            </span>
            <h2>Let’s talk about your healthcare needs.</h2>
          </div>
          <Link to="/appointment" className="gallery-contact-btn">
            Book an Appointment <span>↗</span>
          </Link>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeLightbox}
        >
          <button
            className="gallery-lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            ×
          </button>

          <button
            className="gallery-lightbox-arrow gallery-lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage(-1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.alt} />
            <div className="gallery-lightbox-caption">
              <div>
                <span>{selectedImage.category}</span>
                <h3>{selectedImage.title}</h3>
              </div>
              <span>
                {String(
                  filteredImages.findIndex(
                    (item) => item.id === selectedImage.id
                  ) + 1
                ).padStart(2, "0")}{" "}
                / {String(filteredImages.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            className="gallery-lightbox-arrow gallery-lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage(1);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
