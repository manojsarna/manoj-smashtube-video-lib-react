export const formatDateToTime = (publishedAt) => {
  const videoPublishedDate = new Date(publishedAt);
  return Number(videoPublishedDate.getTime());
};
