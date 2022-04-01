//import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreatePlaylistModal } from "../../components";
import { usePlaylists } from "../../context";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./playlists.css";

export function Playlists() {
  useDocTitle("Playlists - SmashTube - Manoj Sarna");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { playlists, removeFromPlaylists } = usePlaylists();
  return (
    <main className="sm-main">
      <div className="sm-main-feature-p sm-main-feat-new">
        <div className="sm-main-playlist-top">
          <p className="sm-main-heading">My Playlists</p>
          <button
            className="btn btn-primary btn-bolder create-playlist-button"
            onClick={() => setShow((p) => !p)}
          >
            Create New Playlist
          </button>
        </div>
        <ul className="sm-main-prod-container">
          {playlists.map((playlist) => (
            <li key={playlist._id} className=" sm-playlist-main">
              <div
                className="sm-playlist-info-card"
                title="Go To Playlist"
                onClick={() => navigate(`/playlists/${playlist._id}`)}
              >
                <div className="sm-playlist-name">{playlist.title}</div>
                <div className="sm-playlist-count">
                  {playlist.videos.length} Videos
                </div>
              </div>
              <button
                className="sm-playlist-delete-btn"
                title="Delete This Playlist"
                onClick={() => removeFromPlaylists(playlist._id)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <CreatePlaylistModal show={show} setShow={setShow} />
    </main>
  );
}
