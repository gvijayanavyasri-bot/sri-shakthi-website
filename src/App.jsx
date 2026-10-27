import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import AboutDoctor from "./pages/AboutDoctor";
import Services from "./pages/Services";
import Hospital from "./pages/Hospital";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Automatically scroll to top when changing pages */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Header />

      {/* Website Pages */}
      <main>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* About Doctor Page */}
          <Route
            path="/about-doctor"
            element={<AboutDoctor />}
          />

          {/* Services Page */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* Hospital Page */}
          <Route
            path="/hospital"
            element={<Hospital />}
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Redirect unknown URLs to Home */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      {/* Footer — displayed on every page */}
      <Footer />
    </>
  );
}

export default App;