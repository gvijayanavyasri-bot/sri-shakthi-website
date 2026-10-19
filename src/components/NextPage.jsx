
import { Link, useLocation } from "react-router-dom";
import "./NextPage.css";

const pages = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/services", name: "Our Services" },
  { path: "/doctor", name: "Our Doctor" },
  { path: "/facilities", name: "Facilities" },
  { path: "/gallery", name: "Gallery" },
  { path: "/appointment", name: "Appointment" },
  { path: "/contact", name: "Contact Us" },
];

export default function NextPage() {
  const { pathname } = useLocation();

  const currentIndex = pages.findIndex(
    (page) => page.path === pathname
  );

  const nextPage = pages[(currentIndex + 1) % pages.length];

  return (
    <section className="next-page-section">
      <p className="next-page-label">CONTINUE EXPLORING</p>

      <h2>Discover More About Sri Sakthi Hospital</h2>

      <p>
        Explore our healthcare services and discover how we
        care for you and your family.
      </p>

      <Link to={nextPage.path} className="next-page-button">
        Next: {nextPage.name}
        <span aria-hidden="true"> →</span>
      </Link>
    </section>
  );
}
