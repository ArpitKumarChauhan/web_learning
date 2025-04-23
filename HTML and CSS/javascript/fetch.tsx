import React, { useEffect, useState } from 'react';
import axios from 'axios'; // For making HTTP requests

interface VideoItem {
  id: { videoId: string };
  snippet: { title: string };
}

const YoutubeVideos: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    // Function to fetch top 3 videos of a YouTube channel
    const fetchVideos = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
        const API_KEY = 'YOUR_API_KEY';
        const CHANNEL_ID = 'CHANNEL_ID'; // Replace with your YouTube channel ID
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=3&order=date&type=video&key=${API_KEY}`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    // Call the fetchVideos function
    fetchVideos();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h2>Top 3 Videos</h2>
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeVideos;
