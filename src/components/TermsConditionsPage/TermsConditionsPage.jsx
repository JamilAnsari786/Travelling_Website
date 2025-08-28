import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./TermsConditions.css"; // create css for styling

const TermsConditionsPage = () => {
  return (
    <>
      <Navbar />
      <div className="terms-container">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to <strong>Moonyatri</strong>. By accessing or using our website
          and services, you agree to be bound by the following Terms &
          Conditions. Please read them carefully before proceeding.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using our services, you acknowledge that you have read,
          understood, and agree to comply with these Terms & Conditions.
        </p>

        <h2>2. Booking & Payments</h2>
        <p>
          - All bookings are subject to availability. <br />
          - Payments must be completed securely through our approved channels.{" "}
          <br />
          - Once confirmed, bookings cannot be transferred without prior
          approval.
        </p>

        <h2>3. Cancellation & Refunds</h2>
        <p>
          - Cancellations must be made within the specified time frame. <br />
          - Refund policies vary depending on the package or service booked.{" "}
          <br />
          - Moonyatri reserves the right to deduct processing fees for refunds.
        </p>

        <h2>4. User Responsibilities</h2>
        <p>
          - You must provide accurate information during registration and
          booking. <br />
          - You are responsible for maintaining the confidentiality of your
          account details. <br />
          - Misuse of our services may result in suspension or termination of
          your account.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Moonyatri will not be held responsible for delays, cancellations, or
          damages caused by third-party providers, natural disasters, or events
          beyond our control.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          Moonyatri reserves the right to update or modify these Terms &
          Conditions at any time. Users will be notified of significant changes
          via email or website updates.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws of India.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          For any queries about these Terms & Conditions, please contact us at{" "}
          <strong>moonyatrii@gmail.com</strong>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
