import { formatDateToTime } from "./formatDateToTime";

export function filterSortVideos(videos, category, isSortByLatest) {
  let filteredVideos = [];
  if (category === "all") {
    filteredVideos = videos;
  } else {
    filteredVideos = videos.filter((v) => v.snippet.category === category);
  }

  if (isSortByLatest) {
    filteredVideos.sort(
      (a, b) =>
        formatDateToTime(b.snippet.publishedAt) -
        formatDateToTime(a.snippet.publishedAt)
    );
  } else {
    filteredVideos.sort(
      (a, b) =>
        formatDateToTime(a.snippet.publishedAt) -
        formatDateToTime(b.snippet.publishedAt)
    );
  }
  return filteredVideos;
}
