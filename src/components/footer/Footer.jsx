import React from "react";
import "./Footer.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../../assets/logo-modified.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand + About */}
        <div className="footer-section brand">
          <img
            src={logo}
            alt="TravelX Logo"
            className="footer-logo"
            height={100}
            width={100}
          />
          <p>
            MoonYatri brings you unforgettable trips, curated experiences, and
            hassle-free journeys. Discover the world with style and comfort!
          </p>
          <div className="socials">
            <a
              href="https://www.instagram.com/moonyatri.co/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@explorewithkevin"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul className="footer-menu">
            <li onClick={() => handleNavigate("/")}>HOME</li>
            <li onClick={() => handleNavigate("/aboutus/moonyatri")}>
              ABOUT US
            </li>
            <li onClick={() => handleNavigate("/#trips")}>PACKAGES</li>
            <li onClick={() => handleNavigate("/#blog")}>BLOG</li>
            <li onClick={() => handleNavigate("/#testimonials")}>
              TESTIMONIAL
            </li>
            <li onClick={() => handleNavigate("/#contact")}>CONTACT</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <MdEmail className="contact-icon" /> moonyatrii@gmail.com
          </p>
          <p>
            <MdPhone className="contact-icon" /> +91 9643296976
          </p>
          <p>
            <MdLocationOn className="contact-icon2" /> 03, New Mustafabad, Rajiv
            Gandhi Nagar, New Delhi, Delhi-110094
          </p>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for latest offers & travel tips!</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-policies">
          <div className="footer-links">
            <button
              className="footer-link"
              onClick={() => handleNavigate("/privacy-policy")}
            >
              Privacy Policy
            </button>
            <span className="divider">|</span>
            <button
              className="footer-link"
              onClick={() => handleNavigate("/terms-and-conditions")}
            >
              Terms & Conditions
            </button>
            <span className="divider">|</span>
            <button
              className="footer-link"
              onClick={() => handleNavigate("/pricing-policy")}
            >
              Pricing Policy
            </button>
          </div>
          <hr  />

          <p>© {new Date().getFullYear()} MoonYatri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
