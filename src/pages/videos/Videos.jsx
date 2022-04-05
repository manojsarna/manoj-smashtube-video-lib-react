import "./videos.css";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";
import { formatDateToTime, searchVideos } from "../../hooks";
import { useLocation } from "react-router-dom";
//import { useLocation } from "react-router-dom";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [curCat, setCurCat] = useState("all");
  const [catVideos, SetCatVideos] = useState([]);
  const [loading, setLoading] = useState();
  const [isSortByLatest, setIsSortByLatest] = useState(false);

  const { search } = useLocation();

  const searchString = new URLSearchParams(search).get("search");

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
        SetCatVideos(data.videos);
        const { data: data1 } = await axios.get("/api/categories");
        setCategories(data1.categories);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    SetCatVideos(searchVideos(videos, searchString));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

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
                category.category === curCat ? "sm-active" : ""
              }`}
              onClick={() => {
                if (category.category === "all") {
                  SetCatVideos(videos);
                } else {
                  SetCatVideos(
                    videos.filter(
                      (v) => v.snippet.category === category.category
                    )
                  );
                }
                setCurCat(category.category);
              }}
            >
              {category.categoryName}
            </button>
          ))}
          <button
            key={uuid()}
            className={`sm-category-outline-btn ${
              isSortByLatest ? "sm-active" : ""
            }`}
            onClick={() => {
              if (isSortByLatest) {
                SetCatVideos((v) => [
                  ...v.sort(
                    (a, b) =>
                      formatDateToTime(a.snippet.publishedAt) -
                      formatDateToTime(b.snippet.publishedAt)
                  ),
                ]);
                setIsSortByLatest(false);
              } else {
                setIsSortByLatest(true);
                SetCatVideos((v) => [
                  ...v.sort(
                    (a, b) =>
                      formatDateToTime(b.snippet.publishedAt) -
                      formatDateToTime(a.snippet.publishedAt)
                  ),
                ]);
              }
            }}
          >
            Sort By Latest
          </button>
        </div>
        <div className="sm-main-prod-container">
          {catVideos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
