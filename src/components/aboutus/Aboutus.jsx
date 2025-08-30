import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutus.css";

import leftImage from "../../assets/img1.webp";
import rightImage from "../../assets/img2.jpg";

const TravelAppSection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Scroll to top smoothly before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/aboutus/moonyatri");
  };

  return (
    <section className="travel-section" id="aboutus">
      {/* Top Promo */}
      <div className="promo-bar">
        <div className="promo-item">✈️ Plan Your Dream Vacation with Us</div>
        <div className="promo-item">🔥 Exclusive Deals Available This Week</div>
      </div>

      {/* Main Section */}
      <div className="travel-grid">
        {/* Left Image */}
        <div className="image-box">
          <img src={leftImage} alt="Travel experience" />
        </div>

        {/* Center Text */}
        <div className="text-box">
          <h2>🌟 About Me</h2>
          <p>
            Hey, I’m Ahad — a content creator, storyteller, and YouTube vlogger
            with one true love: traveling. For me, every journey is more than
            just moving from one place to another; it’s about living stories,
            capturing moments, and sharing happiness.
          </p>
          <p>
            What started as a passion for making videos and exploring hidden
            gems soon turned into a bigger dream — to take people along with me
            on these adventures. That dream is now called <b>MoonYatri</b>.
          </p>
          <p>
            Through MoonYatri, I help travelers discover India like never before
            — not just famous landmarks, but also the soul of small towns, the
            charm of villages, the magic of mountains, and the spirit of our
            culture. The joy of travel doubles when I see others smiling,
            exploring, and creating memories together.
          </p>

          <button className="see-more-btn" onClick={handleNavigate}>
            ✨ More About MoonYatri Traveling
          </button>
        </div>
        

        {/* Right Image */}
        <div className="image-box">
          <img src={rightImage} alt="Comfortable travel" />
        </div>
      </div>
    </section>
  );
};

export default TravelAppSection;
