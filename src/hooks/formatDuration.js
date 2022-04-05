export const formatDuration = (duration) => {
  if (duration.includes("H")) {
    return duration.replace(/PT(\d+)H(\d+)M(\d+)S/, "$1:$2:$3");
  } else {
    return duration.replace(/PT(\d+)M(\d+)S/, "$1:$2");
  }
};
