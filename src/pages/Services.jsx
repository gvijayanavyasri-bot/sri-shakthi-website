export default function Services() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".svc-intro-grid, .svc-section-heading, .svc-card, .svc-care-card, .svc-consultation-grid, .svc-final-cta-content"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      element.classList.add("svc-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="services-page">

      {/* HERO SECTION */}

      <section className="svc-hero">
        <div className="svc-hero-background" aria-hidden="true" />
        <div className="svc-hero-overlay" aria-hidden="true" />
        <div className="svc-hero-pattern" aria-hidden="true" />

        <div className="svc-container svc-hero-content">

          <div className="svc-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Services</span>
          </div>

          <span className="svc-eyebrow svc-hero-eyebrow">
            <HeartPulse size={17} />
            OUR MEDICAL SERVICES
          </span>

          <h1>
            Complete care.
            <br />
            <span>A healthier tomorrow.</span>
          </h1>

          <p>
            Discover our medical services, designed around careful
            assessment, responsible treatment, and a compassionate
            approach to healthcare.
          </p>

          <div className="svc-hero-buttons">
            <Link to="/contact" className="svc-button svc-button-primary">
              Enquire About Services
              <ArrowRight size={19} />
            </Link>

            <a href="tel:9494456007" className="svc-button svc-button-outline">
              <PhoneCall size={18} />
              Call Hospital
            </a>
          </div>

          <div className="svc-hero-note">
            <ShieldCheck size={19} />
            <span>Patient-first care. Clear medical guidance.</span>
          </div>

        </div>

        <div className="svc-hero-bottom-line" />
      </section>

      {/* INTRODUCTION */}

      <section className="svc-intro-section">
        <div className="svc-container svc-intro-grid">

          <div className="svc-intro-heading">
            <span className="svc-section-label">
              <span />
              HOW WE CAN HELP
            </span>

            <h2>
              Healthcare focused on
              <span> your needs.</span>
            </h2>
          </div>

          <div className="svc-intro-content">
            <p>
              Every health concern deserves attention. Sri Sakthi Hospital
              offers a range of medical services to support consultation,
              assessment, treatment, and ongoing healthcare needs.
            </p>

            <Link to="/about-doctor" className="svc-text-link">
              Meet Our Doctor
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="svc-list-section">
        <div className="svc-container">

          <div className="svc-section-heading">
            <span className="svc-section-label">
              <span />
              MEDICAL CARE &amp; SUPPORT
            </span>

            <h2>
              Our healthcare
              <span> services.</span>
            </h2>

            <p>
              Explore our services and contact the hospital for further
              information about availability and suitability.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  className="svc-card"
                  key={service.number}
                  style={{ "--svc-index": index }}
                >
                  <div className="svc-card-top">
                    <div className="svc-card-icon">
                      <ServiceIcon size={29} strokeWidth={1.9} />
                    </div>

                    <span className="svc-card-number">
                      {service.number}
                    </span>
                  </div>

                  <span className="svc-card-category">
                    {service.category}
                  </span>

                  <h3>{service.title}</h3>

                  <p className="svc-card-description">
                    {service.description}
                  </p>

                  <div className="svc-card-features">
                    {service.features.map((feature) => (
                      <div className="svc-card-feature" key={feature}>
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="svc-card-footer">
                    <Link
                      to="/contact"
                      className="svc-card-link"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Enquire Now
                      <ArrowRight size={17} />
                    </Link>
                  </div>

                  <div className="svc-card-bottom-line" />
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CARE HIGHLIGHTS */}

      <section className="svc-care-section">
        <div className="svc-container">

          <div className="svc-section-heading svc-care-heading">
            <span className="svc-section-label svc-label-light">
              <span />
              THE WAY WE CARE
            </span>

            <h2>
              More than treatment.
              <br />
              <span>A thoughtful approach.</span>
            </h2>

            <p>
              Clear communication and responsible medical guidance are
              important parts of a positive healthcare experience.
            </p>
          </div>

          <div className="svc-care-grid">
            {careHighlights.map((item, index) => {
              const CareIcon = item.icon;

              return (
                <article
                  className="svc-care-card"
                  key={item.title}
                  style={{ "--svc-index": index }}
                >
                  <div className="svc-care-icon">
                    <CareIcon size={28} />
                  </div>

                  <span className="svc-care-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONSULTATION INFORMATION */}

      <section className="svc-consultation-section">
        <div className="svc-container svc-consultation-grid">

          <div className="svc-consultation-icon">
            <Clock3 size={30} />
          </div>

          <div className="svc-consultation-content">
            <span>CONSULTATION INFORMATION</span>

            <h2>Planning a visit to the hospital?</h2>

            <p>
              OPD timings listed by the hospital are Monday to Saturday,
              9:00 AM–12:30 PM and 5:30 PM–9:00 PM. Please contact the
              hospital to confirm availability before visiting.
            </p>
          </div>

          <Link to="/contact" className="svc-button svc-button-dark">
            Plan Your Visit
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="svc-final-cta">
        <div className="svc-container svc-final-cta-content">

          <div className="svc-final-decoration" aria-hidden="true">
            <Sparkles size={48} />
          </div>

          <div className="svc-final-icon">
            <HeartPulse size={31} />
          </div>

          <div className="svc-final-text">
            <span>YOUR HEALTH. OUR COMMITMENT.</span>

            <h2>Let us help you find the right care.</h2>

            <p>
              Contact our hospital team for service information and
              consultation enquiries.
            </p>
          </div>

          <div className="svc-final-buttons">
            <Link to="/contact" className="svc-button svc-button-gold">
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <a href="tel:9494456007" className="svc-final-phone">
              <PhoneCall size={17} />
              +91 94944 56007
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}