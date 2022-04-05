import "./videos.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";
import { filterSortVideos, searchVideos } from "../../hooks";
import { useLocation } from "react-router-dom";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  const { search } = useLocation();
  const searchString = new URLSearchParams(search).get("search");
  const categoryString = new URLSearchParams(search).get("category");

  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(
    categoryString ?? "all"
  );
  const [filteredVideos, SetFilteredVideos] = useState([]);
  const [loading, setLoading] = useState();
  const [isSortByLatest, setIsSortByLatest] = useState(false);
  console.log(isSortByLatest, currentCategory);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
        if (categoryString) {
          setCurrentCategory(categoryString);
          SetFilteredVideos(
            data.videos.filter((v) => v.snippet.category === categoryString)
          );
        } else {
          SetFilteredVideos(data.videos);
        }
        const { data: data1 } = await axios.get("/api/categories");
        setCategories(data1.categories);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    SetFilteredVideos(searchVideos(videos, searchString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  useEffect(() => {
    SetFilteredVideos(
      filterSortVideos(videos, currentCategory, isSortByLatest)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, isSortByLatest]);

  return loading ? (
    <Loader show={loading} />
  ) : (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">All Videos</h2>
        <div className="sm-videos-categories-container">
          {categories.map((category) => (
            <button
              key={category._id}
              className={`sm-category-outline-btn   ${
                category.category === currentCategory ? "sm-active" : ""
              }`}
              onClick={() => setCurrentCategory(category.category)}
            >
              {category.categoryName}
            </button>
          ))}
          <button
            key={uuid()}
            className={`sm-category-outline-btn ${
              isSortByLatest ? "sm-active" : ""
            }`}
            onClick={() => setIsSortByLatest((value) => !value)}
          >
            Sort By Latest
          </button>
        </div>
        <div className="sm-main-prod-container">
          {filteredVideos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
