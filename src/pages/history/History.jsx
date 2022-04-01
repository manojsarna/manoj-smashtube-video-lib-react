import { Link } from "react-router-dom";
import { Card } from "../../components";
import { useHistory } from "../../context";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./history.css";

export function History() {
  useDocTitle("History - SmashTube - Manoj Sarna");
  const { history, clearHistory } = useHistory();

  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">History Videos</h2>
        {history.length === 0 ? (
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
          <>
            <button
              className="btn btn-primary history-button"
              onClick={clearHistory}
            >
              Clear Full History
            </button>
            <div className="sm-main-prod-container">
              {history.map((video) => (
                <Card key={video.id} video={video} type={"history"} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
