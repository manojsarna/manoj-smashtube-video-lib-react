import "./card.css";
import { formatDate } from "../../hooks/formatDate";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useAuth,
  useHistory,
  useLikes,
  usePlaylists,
  useWatchLater,
} from "../../context";
import { PlaylistModal } from "../playlist-modal/PlaylistModal";
import { useState } from "react";

export function Card({ video, type }) {
  const { addToHistory, deleteFromHistory } = useHistory();

  const { user } = useAuth();
  const navigate = useNavigate();

  const { watchLater, addToWatchLater, removeFromWatchLater } = useWatchLater();
  const { likes, addToLikes, removeFromLikes } = useLikes();
  const [show, setShow] = useState(false);

  const { playlist, removeFromPlaylist } = usePlaylists();

  const videoInWatchLater = watchLater?.some((v) => v._id === video._id)
    ? true
    : false;
  const videoInLikes = likes?.some((v) => v._id === video._id) ? true : false;

  return (
    <>
      <div className="sm-card" title="Click On Watch Now!!">
        <div className="sm-card-img">
          {video.snippet.badgeName && (
            <span className="sm-card-badge">{video.snippet.badgeName}</span>
          )}
          {type === "history" ? (
            <button
              className="sm-card-fav-delete"
              title="Delete From History"
              onClick={() => deleteFromHistory(video)}
            >
              <i className="fas fa-trash"></i>
            </button>
          ) : (
            ""
          )}

          {type === "playlist" ? (
            <button
              className="sm-card-fav-delete"
              title="Delete From Playlist"
              onClick={() => removeFromPlaylist(playlist._id, video._id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          ) : (
            ""
          )}

          <span className="sm-card-bage-time">7:52</span>

          <button
            className="sm-card-fav-watch"
            title={`${
              videoInWatchLater
                ? "Remove From Watch Later"
                : "Add To Watch Later"
            }`}
            onClick={() => {
              if (!user) {
                navigate("/auth");
              } else if (videoInWatchLater) {
                removeFromWatchLater(video);
              } else {
                addToWatchLater(video);
              }
            }}
          >
            <i className={`fa-clock ${videoInWatchLater ? "fas" : "far"}`}></i>
          </button>
          <button
            className="sm-card-bage-like-btn"
            title={`${
              videoInLikes ? "Remove From Liked Videos" : "Add To Liked Videos"
            }`}
            onClick={() => {
              if (!user) {
                navigate("/auth");
              } else if (videoInLikes) {
                removeFromLikes(video);
              } else {
                addToLikes(video);
              }
            }}
          >
            <i className={`fa-thumbs-up ${videoInLikes ? "fas" : "far"}`}></i>
          </button>

          <button
            className="sm-card-badge-playlist-btn"
            title="Add To Playlists"
            onClick={() => {
              user ? setShow((p) => !p) : navigate("/auth");
            }}
          >
            <i className="fa-list-alt far"></i>
          </button>

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
              &nbsp;&nbsp;<span className="sm-card-rating-dot"></span>
              &nbsp;&nbsp;
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
                onClick={() => (user ? addToHistory(video) : "")}
              >
                <i className="fas fa-play"></i>
                &nbsp;&nbsp;Watch Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <PlaylistModal show={show} setShow={setShow} video={video} />
    </>
  );
}
