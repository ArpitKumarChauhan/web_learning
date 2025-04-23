function fetchYoutobeVideos() {
  const apiKey = 'AIzaSyBLp5oK9IA_lJVTIbFhvV60xq88fWDEHNw';
  const channelId = 'UCLf8B_IY4g6zy3oWjdZsP7Q';
  const maxResults = 3;
  const videosContainer = document.getElementById('videos-container');
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const videos = data.items;
      videos.forEach(video => {
        const videoTitle = video.snippet.title;
        const videoId = video.id.videoId;
        const videoThumbnail = video.snippet.thumbnails.high.url;
        const videoDescription = video.snippet.description;
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            <h4>${videoTitle}</h4>
            <p>${videoDescription}</p>
            `
          ;
        videosContainer.appendChild(videoElement);
      });
    })
    .catch(error => {
      console.error('Error in fetching videos:', error);
    });
}
fetchYoutobeVideos(); 