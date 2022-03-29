import "./playlistmodal.css";
export function PlaylistModal({ show, setShow }) {
  const play = [
    { title: "Playlist 1", videocount: 10, _id: 1 },
    { title: "Playlist 2", videocount: 12, _id: 2 },
    { title: "Playlist 3", videocount: 13, _id: 3 },
    { title: "Playlist 4", videocount: 15, _id: 4 },
    { title: "Playlist 5", videocount: 11, _id: 5 },
  ];
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
        <div className="sm-modal-playlist-container">
          <ul className="sm-modal-playilst-wrapper">
            {play.map((item, index) => (
              <li key={index} className="sm-playlist-item">
                <input
                  value={item}
                  type="checkbox"
                  maxLength="20"
                  className="item-checkbox"
                />
                <span className="item-name">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm-playlist-input-container sm-input-box-hide ">
          <input
            type="text"
            className="input-basic"
            name="playlist-name-input"
            placeholder="Enter Name"
          />
          <button className="btn btn-primary btn-bold">Create</button>
        </div>

        <div className="create-playlist-btn-container">
          <button className=" sm-btn-create-playlist-btn">
            <i className="fas fa-plus"></i>Create New Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
