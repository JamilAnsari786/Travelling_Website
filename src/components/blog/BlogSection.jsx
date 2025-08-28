import React, { useState } from "react";
import BlogCard from "./BlogCard";
import VideoModal from "./VideoModal";
import "./BlogCard.css";

const blogs = [
  {
    date: "April 7, 2023",
    title: "DRUNG FROZEN WATERFALL",
    description:
      "❄️ Welcome to my Kashmir Series – join me as I explore the DRUNG Frozen Waterfall, visit cafes, stay options, and the iconic Ghanta Ghar in Srinagar! 🏔️🕰️",
    videoUrl: "https://www.youtube.com/watch?v=7jII5MIA2uw",
  },
  {
    date: "April 8, 2023",
    title: "A Journey of India’s most beautiful lake - Chandratal Lake",
    description:
      "✨ Join me on an unforgettable journey to Chandratal Lake, where turquoise waters, starry skies, and Himalayan beauty create a true paradise on Earth! 🌄🌌",
    videoUrl: "https://www.youtube.com/watch?v=CQqnxUlUtX4",
  },
  {
    date: "April 9, 2023",
    title: "A Journey of Most Beautiful Views of India| Mussoorie",
    description: "🚕 A full-day trip (11 AM–8 PM) exploring Kempty Fall, Company Garden, and George Everest Peak by taxi – adventure packed in one day! 🌄✨",
    videoUrl: "https://www.youtube.com/watch?v=fGQ9Xnob6NU",
  },
  {
    date: "April 10, 2023",
    title: "A day on Dal Lake 😃| Shikara Ride & HouseBoat Tour | kashmiri Vlogs",
    description:
      "🌊 Welcome to my Kashmir Series – experience a cozy Boathouse stay and a peaceful Shikara Ride on Dal Lake! 🛶✨",
    videoUrl: "https://www.youtube.com/watch?v=dPx9v1db6yw",
  },
  {
    date: "April 11, 2023",
    title: "I found this hidden gem in Himachal's Old Manali",
    description:
      "Explore the hidden beauty of Kharma Valley in Old Manali – a serene escape of meadows, streams, and stunning mountain views! 🌄✨",
    videoUrl: "https://www.youtube.com/watch?v=SSbNtuMKQGo",
  },
  {
    date: "April 12, 2023",
    title: "PAHALGAM kese poche All details",
    description:
      "🌄 Welcome to my Kashmir Series – exploring Pahalgam, the heart of Kashmir, with stunning Baisaran Valley & Betaab Valley! ❤️✨",
    videoUrl: "https://www.youtube.com/watch?v=sl3WrrDfhWE",
  },
];

const BlogSection = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <>
      <h2 className="blog-heading">🌍 Travel Blogs</h2>
      <section className="blog-section" id="blog">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} onPlay={setActiveVideoId} />
        ))}
      </section>

      <VideoModal
        videoId={activeVideoId}
        open={!!activeVideoId}
        onClose={() => setActiveVideoId(null)}
      />
    </>
  );
};

export default BlogSection;
