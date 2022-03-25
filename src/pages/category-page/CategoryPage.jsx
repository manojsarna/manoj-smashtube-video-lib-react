import { useDocTitle } from "../../hooks/useDocTitle";
import "./categorypage.css";
import { useParams } from "react-router-dom";
import { Card } from "../../components";
import { videos } from "../../data/video-data";

export function CategoryPage() {
  const { category } = useParams();
  const categoryVideos = videos.filter(
    (video) => video.snippet.category === category.toLowerCase()
  );

  useDocTitle("Category Video Page - SmashTube - Manoj Sarna");
  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">{category} Videos</h2>
        <div className="sm-main-prod-container">
          {categoryVideos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
