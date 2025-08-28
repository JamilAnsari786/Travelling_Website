import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../../assets/logo-modified.png";

const Footer = () => {
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
            <a href="https://www.instagram.com/moonyatri.co/" aria-label="Instagram" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@explorewithkevin" aria-label="YouTube" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul className="footer-menu">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT US</a>
            </li>
            <li>
              <a href="#trips">PACKAGES</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#testimonials">TESTIMONIAL</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
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
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms-and-conditions"> Terms & Conditions</a> |
          <a href="/pricing-policy"> Pricing Policy</a>
          <hr />
          <p>© {new Date().getFullYear()} MoonYatri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
