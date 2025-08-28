import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./MoonYatriPage.css";
import WhatsAppButton from "../../whatsaapbutton/WhatsAppButton";

const HERO_IMAGE = "/public/img2.jpg";

const Counter = ({ end, duration, plus = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 1;
    const intervalTime = 20; // ms
    const steps = Math.ceil(duration / intervalTime);
    const increment = end / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <div className="n">
      {count}
      {count === end && plus ? "+" : ""}
    </div>
  );
};

export default function MoonYatriPage() {
  return (
    <>
      <WhatsAppButton />
      <Navbar />
      <main className="moonyatri">
        <section className="container hero">
          <div className="hero-card">
            <span className="eyebrow">🌟 About MoonYatri</span>
            <h1 className="title">
              Adventure, joy, and better living start here ♡
            </h1>
            <p className="subtitle">
              Hey, I’m <strong>Ahad</strong> — a content creator, storyteller,
              and YouTube vlogger with one true love: <strong>traveling</strong>
              . Every journey is more than moving from one place to another;
              it’s about living stories, capturing moments, and sharing
              happiness. That dream is now called <strong>MoonYatri</strong>.
            </p>
            <div className="badges">
              <span className="badge">Himachal</span>
              <span className="badge">Uttarakhand</span>
              <span className="badge">Kashmir</span>
              <span className="badge">Road Trips</span>
              <span className="badge">Group Tours</span>
              <span className="badge">Local Culture</span>
            </div>
            <div className="cta-row">
              <a
                className="btn btn-primary"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit moonyatri.co ↗
              </a>
              <a
                className="btn btn-ghost"
                href="https://wa.me/919643296976?text=Hi%2C%20I%20want%20to%20know%20more%20about%20MoonYatri%20trips.%20Can%20you%20help%20me%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </div>
            {/* <div className="socials">
              <a className="btn btn-social" href="https://www.instagram.com/moonyatri.co/" target="_blank" rel="noopener noreferrer">📸 @moonyatri.co</a>
              <a className="btn btn-social" href="https://instagram.com/oyekevin_?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">🎒 @oyekevin_</a>
              <a className="btn btn-social" href="https://www.youtube.com/@explorewithkevin" target="_blank" rel="noopener noreferrer">▶️ Explore with Kevin</a>
            </div> */}
          </div>
          <div className="hero-media" aria-label="MoonYatri hero image">
            <img src={HERO_IMAGE} alt="MoonYatri adventures collage / hero" />
          </div>
        </section>

        {/* <section className="container section ">
          <h2 className="vision">
            <strong>Moon Yatri • Travel Company</strong>
          </h2>
          <p className="lead">
            {" "}
            — Explore the beauty of <strong>Himachal</strong>,{" "}
            <strong>Uttarakhand</strong>, and <strong>Kashmir</strong> with us!
            Led by <strong>@oyekevin_</strong> and team. You’re not just booking
            a trip — you’re becoming part of a journey where every road has a
            story, every sunset has a memory, and every traveler becomes family.
          </p>
        </section> */}

        <section className="container section">
          <h2 className="vision">🚀 Our Vision</h2>
          <p className="lead">
            Travel isn’t about ticking destinations — it’s about experiencing
            India in its rawest and most beautiful form. We design journeys that
            blend adventure with comfort, and community with culture.
          </p>
          <div className="grid">
            <div className="card">
              <h3>✨ Curated Group Trips</h3>
              <p>
                Small groups, handpicked stays, offbeat experiences, and a vibe
                you’ll remember.
              </p>
            </div>
            <div className="card">
              <h3>🗺️ Hassle‑Free Planning</h3>
              <p>
                Routes, stays, permits, transfers — handled. You focus on the
                views and the stories.
              </p>
            </div>
            <div className="card">
              <h3>🤝 Local First</h3>
              <p>
                We partner with responsible local hosts to bring authentic
                culture (and yummy food!).
              </p>
            </div>
          </div>
        </section>

        <section className="container section stats grid grid-cols-3 gap-6 text-center mt-8">
          <div className="stat bg-white p-6 rounded-xl shadow-md">
            <Counter end={1000} duration={5000} plus={true} />
            <div className="l mt-2 text-gray-600 font-semibold">
              Happy Travellers
            </div>
          </div>
          <div className="stat bg-white p-6 rounded-xl shadow-md">
            <Counter end={50} duration={5000} plus={true} />
            <div className="l mt-2 text-gray-600 font-semibold">
              Group Departures
            </div>
          </div>
          <div className="stat">
            <div className="n">4.9★</div>
            <div className="l">Trip Ratings</div>
          </div>
        </section>

        <section className="container section destinations">
          <h2>🏔️ Where We Go</h2>
          <div className="grid">
            <a className="tile" aria-label="Himachal">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.vjN-8zNVmxxEpZQgS8tvmAHaEK?pid=Api&P=0&h=180"
                alt="Himachal Pradesh mountains"
              />
              <span className="label">Himachal</span>
            </a>
            <a className="tile" aria-label="Uttarakhand">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.lU4mJMpegRkyRM_9wQn8IAHaE8?pid=Api&P=0&h=180"
                alt="Uttarakhand landscapes"
              />
              <span className="label">Uttarakhand</span>
            </a>
            <a className="tile" aria-label="Kashmir">
              <img
                src="https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg"
                alt="Kashmir valley"
              />
              <span className="label">Kashmir</span>
            </a>
          </div>
        </section>

        <section className="container section team">
          <div className="card">
            <h2>🧭 Led by Kevin & Team</h2>
            <p className="lead">
              From vlogs to real‑world itineraries, <strong>Kevin</strong> (aka{" "}
              <strong>@oyekevin_</strong>) brings hands‑on travel experience,
              safety‑first operations, and content‑driven storytelling to every
              route.
            </p>
            <div className="social-links">
              <a
                className="social-btn social-btn-instagram"
                href="https://instagram.com/oyekevin_?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
              <a
                className="social-btn social-btn-youtube"
                href="https://www.youtube.com/@explorewithkevin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="card team-member">
            <img
              className="avatar"
              src="/public/img2.jpg"
              alt="Kevin – MoonYatri lead"
            />
            <div>
              <h3>Explore with Kevin</h3>
              <p className="subtitle">
                Story‑first travel, real tips, raw landscapes. Join the
                community and come along for the next ride.
              </p>
            </div>
          </div>
        </section>

        <section className="container section faq">
          <h2>❓ FAQ</h2>
          <details>
            <summary>How do I join a group trip?</summary>
            <p>
              Follow our Instagram{" "}
              <a
                href="https://www.instagram.com/moonyatri.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @moonyatri.co
              </a>{" "}
              for upcoming dates or ping us via the Contact section below.
            </p>
          </details>
          <details>
            <summary>Is MoonYatri beginner friendly?</summary>
            <p>
              Yes! We balance adventure with comfort. Itineraries and difficulty
              levels are clearly mentioned in trip details.
            </p>
          </details>
          <details>
            <summary>Do you plan custom trips?</summary>
            <p>
              Absolutely. Tell us your dates, budget, and vibe — we’ll craft a
              plan that fits you and your crew.
            </p>
          </details>
        </section>

        <section id="contact" className="container section cta">
          <div>
            <h2>Ready to hit the road?</h2>
            <p className="lead">
              DM us on Instagram or tap the button to get your next trip
              planned.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/moonyatri.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DM @moonyatri.co
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
