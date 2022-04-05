import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth, useLikes } from "../../../context";
import { formatViewsString } from "../../../hooks";

export function AddToLikesIcon({ videoDetails }) {
  const { likes, addToLikes, removeFromLikes } = useLikes();
  const [currentLikes, setCurrentLikes] = useState(0);
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
          setCurrentLikes(Number(videoDetails.statistics.likeCount));
        } else {
          addToLikes(videoDetails);
          setCurrentLikes(Number(videoDetails.statistics.likeCount) + 1);
        }
      }}
      title={`${
        videoInLikes ? "Remove From Liked Videos" : "Add To Liked Videos"
      }`}
    >
      <div className="icon icon-video">
        <i
          className={`fa-thumbs-up ${videoInLikes && user ? "fas" : "far"}`}
        ></i>
        <span>
          {"  "}
          {currentLikes === 0
            ? formatViewsString(videoDetails.statistics.likeCount)
            : formatViewsString(currentLikes)}
        </span>
      </div>
    </button>
  );
}
