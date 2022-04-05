import "./videos.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";
import { filterSortVideos, searchVideos } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  const { search } = useLocation();
  const searchString = new URLSearchParams(search).get("search");
  const categoryString = new URLSearchParams(search).get("category");
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(categoryString);
  const [filteredVideos, SetFilteredVideos] = useState([]);
  const [loading, setLoading] = useState();
  const [isSortByLatest, setIsSortByLatest] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        navigate("/videos");
        setLoading(true);
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
        SetFilteredVideos([
          ...filterSortVideos(data.videos, currentCategory, isSortByLatest),
        ]);
        if (searchString) {
          SetFilteredVideos([...searchVideos(data.videos, searchString)]);
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
    SetFilteredVideos([...searchVideos(videos, searchString)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  useEffect(() => {
    SetFilteredVideos([
      ...filterSortVideos(videos, currentCategory, isSortByLatest),
    ]);
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
