import { useWatchLater } from "../../../context";

export function AddWatchLaterIcon({ videoDetails }) {
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();
  console.log("in icon", watchLater);
  const videoInWatchLater = watchLater.some((v) => v._id === videoDetails._id)
    ? true
    : false;
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      onClick={
        videoInWatchLater
          ? () => {
              removeFromWatchLater(videoDetails);
            }
          : () => {
              addToWatchLater(videoDetails);
            }
      }
      title={`${
        videoInWatchLater ? "Remove From Watch Later" : "Add To Watch Later"
      }`}
    >
      <div className="icon icon-video">
        <i className={`fa-clock ${videoInWatchLater ? "fas" : "far"}`}></i>
        <span>
          {"  "}
          WATCH
        </span>
      </div>
    </button>
  );
}
