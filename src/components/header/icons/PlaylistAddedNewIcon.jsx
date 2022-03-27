import { MdPlaylistAddCheck } from "react-icons/md";
export function PlaylistAddedNewIcon() {
  return (
    <button className="sm-icon-btn color-dm sm-icon-btn-primary">
      <div className="icon">
        <MdPlaylistAddCheck />
        <span className="icon-badge bd-red icon-bd-top-right "></span>
      </div>
    </button>
  );
}
