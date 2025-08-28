import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Header.css';

import slide1 from "../../assets/header1.webp";
import slide2 from "../../assets/header2.jpg";
import slide3 from "../../assets/header3.jpeg";

const Header = () => {
  // Function for smooth scroll
  const scrollToPackages = () => {
    const element = document.getElementById("packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="header-container">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={slide1} alt="Slide 1" />
            <div className="overlay"></div>
            <div className="slide-text">
              <h1>Discover Incredible India 🌏</h1>
              <p>From the Himalayas to Kanyakumari, your adventure starts here.</p>
              <button className="explore-btn" onClick={scrollToPackages}>
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={slide2} alt="Slide 2" />
            <div className="overlay"></div>
            <div className="slide-text">
              <h1>Explore Hidden Treasures ✨</h1>
              <p>Experience the rich culture, heritage, and diversity of India.</p>
              <button className="explore-btn" onClick={scrollToPackages}>
                Plan Your Trip
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={slide3} alt="Slide 3" />
            <div className="overlay"></div>
            <div className="slide-text">
              <h1>Adventure Awaits 🚀</h1>
              <p>Beaches, mountains, deserts, and more — India has it all.</p>
              <button className="explore-btn" onClick={scrollToPackages}>
                Start Journey
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
