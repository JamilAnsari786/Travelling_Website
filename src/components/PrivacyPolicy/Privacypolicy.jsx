import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./Privacypolicy.css"; // external css

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-wrapper">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: August 27, 2025</p>
          <p className="intro">
            Welcome to <strong>Moonyatra</strong>. We are committed to protecting
            the privacy and security of our customers and website visitors. This
            Privacy Policy explains how we collect, use, process, and safeguard
            your personal information when you use our services.
          </p>
        </div>

        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information to provide and improve our services, tailor
            your experience, and for internal analytics. This may include:
          </p>
          <ul>
            <li>
              <strong>Personal Identification:</strong> Name, email, phone,
              address.
            </li>
            <li>
              <strong>Travel Details:</strong> Preferences, destinations,
              dietary requirements.
            </li>
            <li>
              <strong>Payment Data:</strong> Processed securely via payment
              gateways.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser info, device
              type.
            </li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process bookings and provide customer support.</li>
            <li>
              To personalize recommendations and travel experiences for you.
            </li>
            <li>
              With your consent, to send promotional offers and travel updates.
            </li>
            <li>
              To improve our services through research and analytics.
            </li>
            <li>To comply with legal obligations and regulations.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. Sharing and Disclosure</h2>
          <p>
            We <strong>do not sell</strong> your personal information. However,
            we may share it with:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Payment processors, hosting,
              analytics, and customer support tools.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law, to
              protect rights, or prevent fraud.
            </li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>4. Data Security</h2>
          <p>
            We implement strong technical and organizational measures to protect
            your data. However, no system is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="privacy-section">
          <h2>5. International Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries with
            different data protection laws than your home country.
          </p>
        </div>

        <div className="privacy-section">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and request a copy of your personal data.</li>
            <li>Correct or update inaccurate information.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent for marketing communications.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>7. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your experience. You can choose to accept
            or refuse cookies in your browser settings.
          </p>
        </div>

        <div className="privacy-section">
          <h2>8. Changes to Policy</h2>
          <p>
            We may update this policy from time to time. Updates will be posted
            on this page with a new effective date.
          </p>
        </div>

        <div className="privacy-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <p>
            <strong>Email:</strong> moonyatrii@gmail.com<br />
            <strong>Phone:</strong> +91 96432 96976 <br />
            <strong>Address:</strong> 03, New Mustafabad, Rajiv Gandhi Nagar,
            New Delhi, Delhi - 110094
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
