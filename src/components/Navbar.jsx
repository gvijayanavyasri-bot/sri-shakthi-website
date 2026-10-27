// // import { useState } from "react";
// // import { NavLink, Link } from "react-router-dom";

// // import "./Navbar.css";

// // const links = [
// //   ["Home", "/"],
// //   ["About", "/about"],
// //   ["Services", "/services"],
// //   ["Doctor", "/doctor"],
// //   ["Facilities", "/facilities"],
// //   ["Gallery", "/gallery"],
// //   ["Contact", "/contact"]
// // ];

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   const closeMenu = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <>
// //       <div className="top-strip">
// //         <div className="container top-strip-inner">
// //           <span>
// //             <span className="status-dot"></span>
// //             Patient-first care in Rajahmundry
// //           </span>

// //           <div className="top-strip-right">
// //             <span>
// //               OPD: 9:00 AM–12:30 PM · 5:30 PM–9:00 PM
// //             </span>

// //             <a href="tel:9494456007">
// //               Call: 94944 56007
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       <header className="navbar">
// //         <div className="container nav-inner">
// //           <Link
// //             to="/"
// //             className="brand"
// //             onClick={closeMenu}
// //             aria-label="Sri Sakthi Hospital home"
// //           >
// //             <span className="brand-mark">
// //               S<span>+</span>
// //             </span>

// //             <span className="brand-copy">
// //               <strong>SRI SAKTHI</strong>
// //               <small>HOSPITAL & HEALTHCARE</small>
// //             </span>
// //           </Link>

// //           <button
// //             className={`menu-toggle ${open ? "is-open" : ""}`}
// //             onClick={() => setOpen(!open)}
// //             aria-label="Toggle navigation"
// //             aria-expanded={open}
// //           >
// //             <span></span>
// //             <span></span>
// //             <span></span>
// //           </button>

// //           <nav
// //             className={`nav-links ${open ? "nav-open" : ""}`}
// //             aria-label="Main navigation"
// //           >
// //             {links.map(([label, path]) => (
// //               <NavLink
// //                 key={path}
// //                 to={path}
// //                 end={path === "/"}
// //                 onClick={closeMenu}
// //                 className={({ isActive }) =>
// //                   isActive ? "nav-link active" : "nav-link"
// //                 }
// //               >
// //                 {label}
// //               </NavLink>
// //             ))}

// //             <Link
// //               className="nav-appointment"
// //               to="/appointment"
// //               onClick={closeMenu}
// //             >
// //               Book a Visit <span>↗</span>
// //             </Link>
// //           </nav>
// //         </div>
// //       </header>
// //     </>
// //   );
// // }

// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// import "./Navbar.css";

// const links = [
//   ["Home", "/"],
//   ["About", "/about"],
//   ["Services", "/services"],
//   ["Doctor", "/doctor"],
//   ["Facilities", "/facilities"],
//   ["Gallery", "/gallery"],
//   ["Contact", "/contact"],
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const closeMenu = () => {
//     setOpen(false);
//   };

//   const toggleMenu = () => {
//     setOpen((previousOpen) => !previousOpen);
//   };

//   return (
//     <>
//       {/* Top Information Bar */}
//       <div className="top-strip">
//         <div className="container top-strip-inner">
//           <span className="top-strip-message">
//             <span className="status-dot" aria-hidden="true"></span>
//             Patient-first care in Rajahmundry
//           </span>

//           <div className="top-strip-right">
//             <span className="opd-hours">
//               OPD: 9:00 AM–12:30 PM · 5:30 PM–9:00 PM
//             </span>

//             <a href="tel:9494456007" className="top-strip-phone">
//               Call: 94944 56007
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <header className="navbar">
//         <div className="container nav-inner">
//           {/* Hospital Logo and Name */}
//           <Link
//             to="/"
//             className="brand"
//             onClick={closeMenu}
//             aria-label="Sri Sakthi Hospital home"
//           >
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="hospital-logo"
//               onError={(event) => {
//                 console.error(
//                   "Hospital logo could not be loaded:",
//                   event.currentTarget.src
//                 );
//               }}
//             />

//             <span className="brand-copy">
//               <strong>SRI SAKTHI</strong>
//               <small>HOSPITAL & HEALTHCARE</small>
//             </span>
//           </Link>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             className={`menu-toggle ${open ? "is-open" : ""}`}
//             onClick={toggleMenu}
//             aria-label={open ? "Close navigation menu" : "Open navigation menu"}
//             aria-expanded={open}
//             aria-controls="main-navigation"
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>

//           {/* Navigation Links */}
//           <nav
//             id="main-navigation"
//             className={`nav-links ${open ? "nav-open" : ""}`}
//             aria-label="Main navigation"
//           >
//             {links.map(([label, path]) => (
//               <NavLink
//                 key={path}
//                 to={path}
//                 end={path === "/"}
//                 onClick={closeMenu}
//                 className={({ isActive }) =>
//                   isActive ? "nav-link active" : "nav-link"
//                 }
//               >
//                 {label}
//               </NavLink>
//             ))}

//             {/* Appointment Button */}
//             <Link
//               className="nav-appointment"
//               to="/appointment"
//               onClick={closeMenu}
//             >
//               Book a Visit <span aria-hidden="true">↗</span>
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const links = [
["Home", "/"],
["About", "/about"],
["Services", "/services"],
["Doctor", "/doctor"],
["Facilities", "/facilities"],
["Gallery", "/gallery"],
["Contact", "/contact"],
];

export default function Navbar() {
const [open, setOpen] = useState(false);

const closeMenu = () => {
setOpen(false);
};

const toggleMenu = () => {
setOpen((previousOpen) => !previousOpen);
};

return (
<>
{/* Top Information Bar */} <div className="top-strip"> <div className="container top-strip-inner"> <span className="top-strip-message"> <span className="status-dot" aria-hidden="true"></span>
Patient-first care in Rajahmundry </span>


      <div className="top-strip-right">
        <span className="opd-hours">
          OPD: 9:00 AM–12:30 PM · 5:30 PM–9:00 PM
        </span>

        <a href="tel:9494456007" className="top-strip-phone">
          Call: 94944 56007
        </a>
      </div>
    </div>
  </div>

  {/* Main Navigation */}
  <header className="navbar">
    <div className="container nav-inner">
      {/* Hospital Logo and Name */}
      <Link
        to="/"
        className="brand"
        onClick={closeMenu}
        aria-label="Sri Sakthi Hospital home"
      >
        <img
          src="/images/logo.png"
          alt="Sri Sakthi Hospital Logo"
          className="hospital-logo"
          width="58"
          height="58"
        />

        <span className="brand-copy">
          <strong>SRI SAKTHI</strong>
          <small>HOSPITAL & HEALTHCARE</small>
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`menu-toggle ${open ? "is-open" : ""}`}
        onClick={toggleMenu}
        aria-label={
          open ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={open}
        aria-controls="main-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <nav
        id="main-navigation"
        className={`nav-links ${open ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Appointment Button */}
        <Link
          className="nav-appointment"
          to="/appointment"
          onClick={closeMenu}
        >
          Book a Visit <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </div>
  </header>
</>


);
}
