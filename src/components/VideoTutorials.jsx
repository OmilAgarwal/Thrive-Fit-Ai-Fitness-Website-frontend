import React, { useState } from "react";
import "../components/VideoTutorials.css";
import Navbar from "../components/Navbar";

export default function VideoTutorials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const YOUTUBE_API_KEY = "AIzaSyBxZA7RWw-HvsBOO6Kw6tSs-QA2YQFX3us"; // 🔹 Replace with your actual API key

  // Fetch YouTube Videos
  const fetchVideos = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}+workout+fitness+gym&maxResults=6&type=video&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch videos");

      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-tutorials-container">
      <Navbar />

      <h1 className="video-tutorials-title">📺 Search Gym & Fitness Videos 🎥</h1>

      {/* YouTube Search Bar */}
      <div className="youtube-search">
        <input
          type="text"
          placeholder="Search for gym & fitness videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetchVideos}>🔍 Search</button>
      </div>

      {/* Display YouTube Videos */}
      <div className="youtube-content">
        {loading ? (
          <p>Loading videos...</p>
        ) : (
          videos.map((video, index) => (
            <div key={index} className="video-box">
              <h2>{video.snippet.title}</h2>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
