import { useDocTitle } from "../../hooks/useDocTitle";
import "./likes.css";
import { Card } from "../../components";
import { useLikes } from "../../context";
import { Link } from "react-router-dom";

export function Likes() {
  useDocTitle("Liked Videos - SmashTube - Manoj Sarna");

  const { likes } = useLikes();

  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Liked Videos</h2>
        <div className="sm-main-prod-container">
          {likes.length === 0 ? (
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

          {likes.map((video) => (
            <Card key={video.id} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
