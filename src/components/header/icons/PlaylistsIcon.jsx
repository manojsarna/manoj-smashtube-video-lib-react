import { Link } from "react-router-dom";
import { usePlaylists } from "../../../context";

export function PlaylistsIcon() {
  const { playlists } = usePlaylists();
  return (
    <Link to="/playlists" title="Go To Playlists">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-list"></i>
          {playlists.length === 0 ? (
            ""
          ) : (
            <span className="icon-badge bd-red icon-bd-top-right ">
              {playlists.length}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
