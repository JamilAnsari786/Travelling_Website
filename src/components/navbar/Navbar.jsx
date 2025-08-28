import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-modified.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDestOpen, setIsDestOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDest = () => setIsDestOpen(!isDestOpen);

  const scrollOrNavigate = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar-container">
        {/* Left: Destinations Dropdown */}
        <div className="navbar-left">
          <div className={`dropdown ${isDestOpen ? "active" : ""}`}>
            <button
              className="nav-link has-icon dropdown-toggle"
              onClick={toggleDest}
            >
              {/* Compass icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide-compass-rose"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v2" />
                <path d="M12 22v-2" />
                <path d="M2 12h2" />
                <path d="M22 12h-2" />
                <path d="m15 15-3-3 3-3" />
                <path d="m9 9 3 3-3 3" />
                <path d="m15 9-3 3 3 3" />
                <path d="m9 15 3-3-3-3" />
              </svg>
              <span className="nav-text">DESTINATIONS ▾</span>
            </button>

            <ul className="dropdown-menu">
              <li>
                <a href="#delhi">Delhi</a>
              </li>
              <li>
                <a href="#mumbai">Mumbai</a>
              </li>
              <li>
                <a href="#manali">Manali</a>
              </li>
              <li>
                <a href="#goa">Goa</a>
              </li>
              <li>
                <a href="#jaipur">Jaipur</a>
              </li>
              <li>
                <a href="#hyderabad">Hyderabad</a>
              </li>
              <li>
                <a href="#kashmir">Kashmir</a>
              </li>
              <li>
                <a href="#kerala">Kerala</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Center: Logo + Nav Links */}
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={() => scrollOrNavigate("home")}
                className="nav-link"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                onClick={() => scrollOrNavigate("about")}
                className="nav-link"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="#packages"
                onClick={() => scrollOrNavigate("packages")}
                className="nav-link"
              >
                PACKAGES
              </a>
            </li>
          </ul>

          <div className="navbar-logo">
            <a
              href="#home"
              onClick={() => scrollOrNavigate("home")}
              className="logo"
            >
              <img src={logo} alt="Logo" height={80} />
            </a>
          </div>

          <ul className="nav-links">
            <li>
              <a
                href="#blog"
                onClick={() => scrollOrNavigate("blog")}
                className="nav-link"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                onClick={() => scrollOrNavigate("testimonials")}
                className="nav-link"
              >
                TESTIMONIAL
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => scrollOrNavigate("contact")}
                className="nav-link"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Social + Hamburger */}
        {/* Right: Social icons + Hamburger */}{" "}
        <div className="navbar-right">
          {" "}
          <ul className="social-links">
            {" "}
            <li>
              {" "}
              <a
                href="https://www.instagram.com/moonyatri.co/?igsh=cmN1Mzk2czNwdXBz#"
                aria-label="Instagram"
                target="_blank"
              >
                {" "}
                {/* Instagram icon */}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-instagram"
                >
                  {" "}
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />{" "}
                </svg>{" "}
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a
                href="https://www.youtube.com/@explorewithkevin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                {" "}
                {/* YouTube icon */}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-youtube"
                >
                  {" "}
                  <path d="M22.54 6.42A2.78 2.78 0 0 0 20.64 4.5C18.88 4 12 4 12 4s-6.88 0-8.64.5a2.78 2.78 0 0 0-1.9 1.92C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.9 1.92C5.12 20 12 20 12 20s6.88 0 8.64-.5a2.78 2.78 0 0 0 1.9-1.92C23 15.82 23 12 23 12s0-3.82-.46-5.58z" />{" "}
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98" />{" "}
                </svg>{" "}
              </a>{" "}
            </li>{" "}
          </ul>{" "}
          <button
            className="hamburger-menu"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {" "}
            <span className="bar"></span> <span className="bar"></span>{" "}
            <span className="bar"></span>{" "}
          </button>{" "}
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <h3 className="mobile-title">Menu</h3>
          <button className="close-btn" onClick={toggleMenu}>
            ✖
          </button>
        </div>
        <ul className="mobile-links">
          <li>
            <a href="#home" onClick={() => scrollOrNavigate("home")}>
              HOME
            </a>
          </li>
          <li>
            <a href="#aboutus" onClick={() => scrollOrNavigate("about")}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#packages" onClick={() => scrollOrNavigate("packages")}>
              PACKAGES
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => scrollOrNavigate("blog")}>
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={() => scrollOrNavigate("testimonials")}
            >
              TESTIMONIALS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollOrNavigate("contact")}>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
