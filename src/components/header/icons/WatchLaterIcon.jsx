import { Link } from "react-router-dom";

export function WatchLaterIcon() {
  return (
    <Link to="/watchlater" title="Go To Watch Later">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          {/* fas available */}
          <i className="fas fa-clock"></i>
          <span className="icon-badge bd-red icon-bd-top-right ">12</span>
        </div>
      </button>
    </Link>
  );
}
