/** @format */

import React from "react";

const YouTubeThumbnail = ({ videoUrl }) => {
  // Fungsi untuk mengekstrak ID video dari URL
  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed|watch)(?:\.php)?\?v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div>
      <img
        src={thumbnailUrl}
        alt="YouTube Thumbnail"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default YouTubeThumbnail;
