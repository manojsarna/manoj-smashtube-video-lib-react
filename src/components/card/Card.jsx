import "./card.css";
import { formatDate } from "../../hooks/formatDate";
import { NavLink } from "react-router-dom";
import { useHistory, useLikes, useWatchLater } from "../../context";

export function Card({ video, type }) {
  const { addToHistory, deleteFromHistory } = useHistory();
  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();
  const { likes, addToLikes, removeFromLikes } = useLikes();

  const videoInWatchLater = watchLater?.some((v) => v._id === video._id)
    ? true
    : false;
  const videoInLikes = likes?.some((v) => v._id === video._id) ? true : false;
  return (
    <div className="sm-card">
      <div className="sm-card-img">
        {video.snippet.badgeName && (
          <span className="sm-card-badge">{video.snippet.badgeName}</span>
        )}
        {type === "history" ? (
          <button
            className="sm-card-fav"
            title="Delete From History"
            onClick={() => deleteFromHistory(video)}
          >
            <i className="fas fa-trash"></i>
          </button>
        ) : (
          <button
            className="sm-card-fav"
            title={`${
              videoInWatchLater
                ? "Remove From Watch Later"
                : "Add To Watch Later"
            }`}
            onClick={
              videoInWatchLater
                ? () => {
                    removeFromWatchLater(video);
                  }
                : () => {
                    addToWatchLater(video);
                  }
            }
          >
            <i className={`fa-clock ${videoInWatchLater ? "fas" : "far"}`}></i>
          </button>
        )}

        <span className="sm-card-bage-time">7:52</span>

        <button
          className="sm-card-bage-like-btn"
          title={`${
            videoInLikes ? "Remove From Liked Videos" : "Add To Liked Videos"
          }`}
          onClick={
            videoInLikes
              ? () => {
                  removeFromLikes(video);
                }
              : () => {
                  addToLikes(video);
                }
          }
        >
          <i className={`fa-thumbs-up ${videoInLikes ? "fas" : "far"}`}></i>
        </button>

        {/* <button
          className="sm-card-badge-playlist-btn"
          title={`Add To Playlists`}
        >
          <i className={`fa-list-alt ${videoInLikes ? "fas" : "far"}`}></i>
        </button> */}

        <img src={video.snippet.thumbnails.standard.url} alt="badminton" />
      </div>
      <div className="sm-card-content">
        <h2 className="sm-card-content-title" title="Click On Watch Now!!">
          {video.snippet.title}
        </h2>
        <h2 className="sm-card-content-brand" title="Click On Watch Now!!">
          <p className="sm-card-flex-rating">
            <span className="sm-card-rating">
              by {video.snippet.videoOwnerChannelTitle}
            </span>
          </p>
          <p className="sm-card-flex-rating">
            <span className="sm-card-rating">
              {video.snippet.viewsCount} views
            </span>
            &nbsp;&nbsp;<span className="sm-card-rating-dot"></span>&nbsp;&nbsp;
            <span className="sm-card-rating">
              {formatDate(video.snippet.publishedAt)}
            </span>
          </p>
        </h2>

        <div className="sm-card-info">
          <NavLink
            className="sm-link-new-check"
            to={`/videos/${video.snippet.resourceId.videoId}`}
            title="Go To Video"
          >
            <button
              className="btn btn-primary cart-btn"
              onClick={() => addToHistory(video)}
            >
              <i className="fas fa-play"></i>
              &nbsp;&nbsp;Watch Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
