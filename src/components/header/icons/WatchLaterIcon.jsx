import { Link } from "react-router-dom";
import { useWatchLater } from "../../../context";

export function WatchLaterIcon() {
  const { watchLater } = useWatchLater();
  return (
    <Link to="/watchlater" title="Go To Watch Later">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          {/* fas available */}
          <i className="fas fa-clock"></i>
          <span
            className={`icon-badge bd-red icon-bd-top-right ${
              watchLater.length === 0 ? "icon-hide " : ""
            } `}
          >
            {watchLater.length}
          </span>
        </div>
      </button>
    </Link>
  );
}
