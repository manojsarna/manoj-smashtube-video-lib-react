import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";

export function PlaylistsAddNewIcon({ setShow }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      title="Add To Playlists"
      onClick={() => {
        user ? setShow((p) => !p) : navigate("/auth");
      }}
    >
      <div className="icon icon-video">
        <i className="far fa-list-alt"></i>
        <span>{"  "}SAVE</span>
      </div>
    </button>
  );
}
