import { useState } from "react";
import { usePlaylists } from "../../context";
import "./playlistmodal.css";
export function CreatePlaylistModal({ show, setShow }) {
  const { addToPlaylists } = usePlaylists();
  const [playlistItem, setPlaylistItem] = useState({ title: "" });

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
        <div className="sm-modal-title fw-700"> Create New Playlist</div>

        <div className="sm-playlist-input-container">
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
              addToPlaylists(playlistItem);
              setShow((p) => !p);
              setPlaylistItem((prev) => {
                return { ...prev, title: "" };
              });
            }}
          >
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
