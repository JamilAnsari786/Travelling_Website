import React from "react";

const VideoModal = ({ open, videoId, onClose }) => {
  if (!open || !videoId) return null;

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-iframe-wrapper">
          <iframe
            className="modal-iframe"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <a
          className="watch-on-youtube"
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
};

export default VideoModal;
