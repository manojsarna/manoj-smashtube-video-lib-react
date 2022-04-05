export const formatDate = (publishedAt) => {
  const videoPublishedDate = new Date(publishedAt);
  const monthShort = videoPublishedDate.toLocaleString("default", {
    month: "short",
  });
  const formattedDate =
    videoPublishedDate.getDate() +
    " " +
    monthShort +
    " " +
    videoPublishedDate.getFullYear();

  return formattedDate;
};
