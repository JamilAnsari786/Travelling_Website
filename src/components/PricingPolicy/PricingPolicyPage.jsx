import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./PricingPolicy.css"; // create CSS for styling

const PricingPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="pricing-container">
        <h1>Pricing Policy</h1>
        <p>
          At <strong>Moonyatri</strong>, we strive to offer transparent, fair, and
          competitive pricing for all our travel services. Please read our
          Pricing Policy carefully to understand how prices are determined and
          applied.
        </p>

        <h2>1. Transparent Pricing</h2>
        <p>
          All prices displayed on our website include applicable taxes, fees, and
          service charges unless otherwise mentioned.
        </p>

        <h2>2. Dynamic Pricing</h2>
        <p>
          Our pricing may vary based on demand, season, and availability. Prices
          are subject to change until the booking is confirmed.
        </p>

        <h2>3. Discounts & Offers</h2>
        <p>
          - Special discounts and promotional offers may be applied at checkout. <br />
          - Coupons or promo codes cannot be combined unless specified. <br />
          - Moonyatri reserves the right to withdraw or modify offers at any time.
        </p>

        <h2>4. Refund & Cancellations</h2>
        <p>
          - Refund amounts depend on the cancellation timeline and service provider’s policy. <br />
          - Non-refundable bookings will be clearly marked before checkout.
        </p>

        <h2>5. Payment Methods</h2>
        <p>
          We accept multiple payment options including credit/debit cards, net
          banking, and UPI. All payments are processed securely.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          For any questions regarding our Pricing Policy, please contact us at{" "}
          <strong>moonyatrii@gmail.com</strong>.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PricingPolicy;
