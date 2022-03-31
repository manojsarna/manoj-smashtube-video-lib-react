import "./home.css";
import axios from "axios";
import { Carousel, Category } from "./components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { Card } from "../../components";
import { useState, useEffect } from "react";

export function Home() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/categories");
        setCategoryData(data.categories.slice(1));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
      } catch (error) {
        console.error("error", error);
      }
    })();
  }, []);

  const topVideos = videos.filter((video) => video.snippet.tag === "Top");
  useDocTitle("Home - SmashTube - Manoj Sarna");
  return (
    <main className="sm-main">
      <Carousel />
      <div className="sm-main-categories">
        <h2>Most Watched Categories</h2>
        <div className="sm-main-cat-container">
          {categoryData.map((category) => (
            <Category key={category._id} categoryItem={category} />
          ))}
        </div>
      </div>
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Most Watched Videos</h2>
        <div className="sm-main-prod-container">
          {topVideos.map(
            (video) =>
              video.snippet.tag && <Card key={video.id} video={video} />
          )}
        </div>
      </div>
    </main>
  );
}
