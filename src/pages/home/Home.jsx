import { Carousel, Category } from "./components";
import { categories } from "../../data/category-data";
import "./home.css";

import { useDocTitle } from "../../hooks/useDocTitle";
import { videos } from "../../data/video-data";
import { Card } from "../../components";

export function Home() {
  const topVideos = videos.filter((video) => video.snippet.tag === "Top");
  useDocTitle("Home - SmashTube - Manoj Sarna");
  return (
    <main className="sm-main">
      <Carousel />
      <div className="sm-main-categories">
        <h2>Most Watched Categories</h2>
        <div className="sm-main-cat-container">
          {categories.map((category) => (
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
