import { Card } from "../../components";
import { videos } from "../../data/video-data";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./videos.css";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  console.log(videos);
  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">All Videos</h2>
        <div className="sm-main-prod-container">
          {videos.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
