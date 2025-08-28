import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919643296976"; // ✅ with country code (91 for India)
  const message = "Hello! I want to know more about your travel packages."; 

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon1" />
    </button>
  );
};

export default WhatsAppButton;
