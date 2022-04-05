export const formatViewsString = (views) => {
  return views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
