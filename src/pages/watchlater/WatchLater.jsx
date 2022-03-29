import { useDocTitle } from "../../hooks/useDocTitle";
import "./watchlater.css";
import { Card } from "../../components";
import { useWatchLater } from "../../context";
import { Link } from "react-router-dom";

export function WatchLater() {
  useDocTitle("WatchLater - SmashTube - Manoj Sarna");

  const { watchLater } = useWatchLater();

  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Watch Later Videos</h2>
        <div className="sm-main-prod-container">
          {watchLater.length === 0 ? (
            <Link to="/" title="Explore Videos">
              <button
                id="carousel-btn"
                className="shop-now-hover btn btn-primary btn-bold"
                title="Go To Videos"
              >
                <i className="fas fa-play sm-margin-right"></i> Explore Now
              </button>
            </Link>
          ) : (
            ""
          )}

          {watchLater.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
