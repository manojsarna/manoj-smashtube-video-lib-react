import { Link } from "react-router-dom";
import { useAuth, useWatchLater } from "../../../context";

export function WatchLaterIcon() {
  const { watchLater } = useWatchLater();
  const { user } = useAuth();

  return (
    <Link to="/watchlater" title="Go To Watch Later">
      <button className={`sm-icon-btn color-dm sm-icon-btn-primary`}>
        <div className="icon">
          <i className="fas fa-clock"></i>
          {user && watchLater.length !== 0 && (
            <span className={`icon-badge bd-red icon-bd-top-right `}>
              {watchLater.length}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
