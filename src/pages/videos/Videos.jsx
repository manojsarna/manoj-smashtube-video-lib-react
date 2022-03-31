import "./videos.css";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";
//import { useLocation } from "react-router-dom";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [curCat, setCurCat] = useState("all");
  const [fVid, SetFVid] = useState([]);
  const [loading, setLoading] = useState();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
        SetFVid(data.videos);
        const { data: data1 } = await axios.get("/api/categories");
        setCategories(data1.categories);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
                  SetFVid(videos);
                } else {
                  SetFVid(
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
        </div>
        <div className="sm-main-prod-container">
          {fVid.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
