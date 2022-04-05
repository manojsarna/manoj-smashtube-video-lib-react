import { useNavigate } from "react-router-dom";
import { useAuth, useWatchLater } from "../../../context";

export function AddWatchLaterIcon({ videoDetails }) {
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();
  const { user } = useAuth();
  const navigate = useNavigate();
  const videoInWatchLater = watchLater.some((v) => v._id === videoDetails._id)
    ? true
    : false;
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      onClick={() => {
        if (!user) {
          navigate("/auth");
        } else if (videoInWatchLater) {
          removeFromWatchLater(videoDetails);
        } else {
          addToWatchLater(videoDetails);
        }
      }}
      // onClick={
      //   videoInWatchLater
      //     ? () => {
      //         removeFromWatchLater(videoDetails);
      //       }
      //     : () => {
      //         addToWatchLater(videoDetails);
      //       }
      // }
      title={`${
        videoInWatchLater ? "Remove From Watch Later" : "Add To Watch Later"
      }`}
    >
      <div className="icon icon-video">
        <i
          className={`fa-clock ${videoInWatchLater && user ? "fas" : "far"}`}
        ></i>
        <span>
          {"  "}
          WATCH
        </span>
      </div>
    </button>
  );
}
