import React from "react";

// Extracts a YouTube video ID from watch, embed, or youtu.be URLs
const getYouTubeId = (url) => {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const parts = u.pathname.split("/"); // e.g. /embed/VIDEOID
    const embedIdx = parts.indexOf("embed");
    if (embedIdx !== -1 && parts[embedIdx + 1]) return parts[embedIdx + 1];
  // eslint-disable-next-line no-empty
  } catch {}
  return "";
};

const BlogCard = ({ date, title, description, videoUrl, onPlay }) => {
  const videoId = getYouTubeId(videoUrl);
  const thumb =
    videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";

  return (
    <article className="blog-card">
      <button
        className="video-thumb"
        style={{ backgroundImage: `url(${thumb})` }}
        onClick={() => videoId && onPlay(videoId)}
        aria-label={`Play video: ${title}`}
      >
        <span className="play-button">▶</span>
      </button>

      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
    </article>
  );
};

export default BlogCard;
