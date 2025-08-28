import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ⏳ Load saved data when component mounts
  useEffect(() => {
    const savedForm = localStorage.getItem("contactForm");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  const handleChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);

    // 💾 Save instantly to localStorage
    localStorage.setItem("contactForm", JSON.stringify(updatedForm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919643296976"; // ✅ use country code
    const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Message: ${form.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, "_blank"); // open WhatsApp

    // ❌ don't clear state here, otherwise it resets
    // If you want to clear AFTER sending, do it explicitly:
    setForm({ name: "", email: "", message: "" });
    localStorage.removeItem("contactForm");
  };

  return (
    <section className="whatsapp-contact" id="contact">
      <div className="container">
        <h2>Contact Us on WhatsApp</h2>
        <p>Fill the form and get in touch instantly via WhatsApp!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Name</label>
          </div>

          <div className="form-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Email</label>
          </div>

          <div className="form-group">
            <FaCommentDots className="icon" />
            <textarea
              name="message"
              rows="1"
              value={form.message}
              onChange={handleChange}
              required
            />
            <label className="floating-label">Your Message</label>
          </div>

          <button type="submit" className="whatsapp-btn">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
