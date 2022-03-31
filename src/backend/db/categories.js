import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
    category: "all",
    image: "https://i.ytimg.com/vi/h1lUXxdlKC4/maxresdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Shots",
    category: "shots",
    image: "https://i.ytimg.com/vi/h1lUXxdlKC4/maxresdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Smashes",
    category: "smashes",
    image: "https://i.ytimg.com/vi/mbK1t_U-3p0/maxresdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Serves",
    category: "serves",
    image: "https://i.ytimg.com/vi/IEge830cgHs/maxresdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Skills",
    category: "skills",
    image: "https://i.ytimg.com/vi/SC67OTiA_j0/maxresdefault.jpg",
  },
];
