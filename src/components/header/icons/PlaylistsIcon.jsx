import { Link } from "react-router-dom";

export function PlaylistsIcon() {
  return (
    <Link to="/playlists" title="Go To Playlists">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-list"></i>
          <span className="icon-badge bd-red icon-bd-top-right ">12</span>
        </div>
      </button>
    </Link>
  );
}
