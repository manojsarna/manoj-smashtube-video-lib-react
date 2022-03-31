import { useNavigate } from "react-router-dom";
import { useAuth, useLikes } from "../../../context";

export function AddToLikesIcon({ videoDetails }) {
  const { likes, addToLikes, removeFromLikes } = useLikes();
  const { user } = useAuth();
  const navigate = useNavigate();
  const videoInLikes = likes.some((v) => v._id === videoDetails._id)
    ? true
    : false;
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      onClick={() => {
        if (!user) {
          navigate("/auth");
        } else if (videoInLikes) {
          removeFromLikes(videoDetails);
        } else {
          addToLikes(videoDetails);
        }
      }}
      // onClick={
      //   videoInLikes
      //     ? () => {
      //         removeFromLikes(videoDetails);
      //       }
      //     : () => {
      //         addToLikes(videoDetails);
      //       }
      // }
      title={`${
        videoInLikes ? "Remove From Liked Videos" : "Add To Liked Videos"
      }`}
    >
      <div className="icon icon-video">
        <i className={`fa-thumbs-up ${videoInLikes ? "fas" : "far"}`}></i>
        <span>
          {"  "}
          LIKE
        </span>
      </div>
    </button>
  );
}
