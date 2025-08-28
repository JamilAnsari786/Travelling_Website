import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    rating: 5,
    text: "Our trip to Manali was unforgettable! The mountains, rivers, and adventure activities were perfectly organized. Highly recommend!",
    author: "Amit & Priya",
  },
  {
    rating: 5,
    text: "Goa exceeded our expectations! Beautiful beaches, fun nightlife, and seamless planning made our vacation perfect.",
    author: "Rohan Sharma",
  },
  {
    rating: 5,
    text: "Kashmir is truly heaven on earth. The shikara ride on Dal Lake and snow-capped mountains were breathtaking. Excellent arrangements!",
    author: "Neha Kapoor",
  },
  {
    rating: 4,
    text: "Jaipur’s palaces and bazaars were amazing. We loved exploring the culture and history, and the tour guides were very helpful.",
    author: "Sanjay & Anjali",
  },
  {
    rating: 5,
    text: "Our Kerala backwaters experience was so peaceful and relaxing. The houseboat stay and scenic views were magical!",
    author: "Vikram Singh",
  },
  {
    rating: 4,
    text: "Bali was a perfect mix of adventure and relaxation. Loved the beaches, temples, and local culture. Highly recommend this trip!",
    author: "Meera & Raj",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonial">
      <div className="container">
        <div className="section-header">
          <h2>What Our Travelers Say</h2>
          <p>
            Real experiences from our happy travelers exploring India and beyond
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="author">— {item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
