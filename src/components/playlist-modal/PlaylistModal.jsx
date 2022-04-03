import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePlaylists } from "../../context";
import "./playlistmodal.css";
export function PlaylistModal({ show, setShow, video }) {
  const [showDiv, setShowDiv] = useState(false);
  const [playlistItem, setPlaylistItem] = useState({ title: "" });
  const { playlists, addToPlaylists, removeFromPlaylist, addToPlaylist } =
    usePlaylists();
  const [playlistArr, setPlaylistArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPlaylistArr(
      playlists.reduce(
        (acc, cur) =>
          cur.videos.some((v) => v._id === video._id)
            ? [...acc, cur]
            : [...acc],
        []
      )
    );
  }, [playlists, video]);

  return (
    <div className={`sm-modal-main ${show ? "sm-modal-main-show" : ""}`}>
      <div className="sm-modal-content">
        <button
          id="btn btn-primary"
          className="sm-card-dismiss"
          title="Dismiss"
          onClick={() => setShow((p) => !p)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="sm-modal-title fw-700">My Playlists</div>
        <div
          className={`sm-modal-playlist-container ${
            playlists.length === 0 ? "sm-playlist-container-hide" : ""
          }`}
        >
          <ul className="sm-modal-playilst-wrapper">
            {playlists.map((item) => (
              <li key={item._id} className="sm-playlist-item">
                <input
                  type="checkbox"
                  maxLength="20"
                  className="item-checkbox"
                  checked={playlistArr.some((p) => p._id === item._id)}
                  title={
                    playlistArr.some((p) => p._id === item._id)
                      ? `Remove from ${item.title}`
                      : `Add to ${item.title}`
                  }
                  onChange={
                    playlistArr.some((p) => p._id === item._id)
                      ? () => {
                          removeFromPlaylist(item._id, video._id);
                          //setShow((p) => !p);
                        }
                      : () => {
                          addToPlaylist(item._id, video);
                          //setShow((p) => !p);
                        }
                  }
                />
                <span
                  className="btn btn-txt item-name"
                  title={`Go To ${item.title} Playlist`}
                  onClick={() => navigate(`/playlists/${item._id}`)}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`sm-playlist-input-container ${
            showDiv ? "" : "sm-input-box-hide"
          }`}
        >
          <input
            ref={(input) => {
              input && input.focus();
            }}
            type="text"
            className="input-basic"
            name="playlist-name-input"
            placeholder="Enter Name"
            maxLength="15"
            value={playlistItem.title}
            onChange={(e) =>
              setPlaylistItem((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
          <button
            className="btn btn-primary btn-bold"
            disabled={playlistItem.title === "" ? true : false}
            onClick={() => {
              addToPlaylists(playlistItem, video);
              setShow((p) => !p);
              setShowDiv((p) => !p);
              setPlaylistItem((prev) => {
                return { ...prev, title: "" };
              });
            }}
          >
            Create Playlist
          </button>
        </div>

        <div className="create-playlist-btn-container">
          <button
            className={`sm-btn-create-playlist-btn ${
              showDiv ? "sm-input-box-hide" : ""
            }`}
            title="Create New Playlist"
            onClick={() => setShowDiv((p) => !p)}
          >
            <i className="fas fa-plus"></i>Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
