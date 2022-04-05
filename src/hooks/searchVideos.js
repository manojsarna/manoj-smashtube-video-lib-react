export function searchVideos(videos, searchString) {
  return videos.filter(
    (video) =>
      video.snippet.title.toLowerCase().includes(searchString.toLowerCase()) ||
      video.snippet.category
        .toLowerCase()
        .includes(searchString.toLowerCase()) ||
      video.snippet.description
        .toLowerCase()
        .includes(searchString.toLowerCase())
  );
}
