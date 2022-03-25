export const useFormatDate = (publishedAt) => {
  const videoPublishedDate = new Date(publishedAt);
  const formattedDate =
    videoPublishedDate.getDate() +
    "-" +
    (videoPublishedDate.getMonth() + 1) +
    "-" +
    videoPublishedDate.getFullYear();

  return formattedDate;
};
