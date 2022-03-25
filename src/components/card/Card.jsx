import "./card.css";
import { useFormatDate } from "../../hooks/useFormatDate";
import { NavLink } from "react-router-dom";

export function Card({ video }) {
  return (
    <div className="sm-card">
      <div className="sm-card-img">
        {video.snippet.badgeName && (
          <span className="sm-card-badge">{video.snippet.badgeName}</span>
        )}
        <button className="sm-card-fav" title="Add To Watch Later">
          <i className="far fa-clock"></i>
        </button>
        <img src={video.snippet.thumbnails.standard.url} alt="badminton" />
      </div>
      <div className="sm-card-content">
        <h2 className="sm-card-content-title" title="Click To Know More!!">
          {video.snippet.title}
        </h2>
        <h2 className="sm-card-content-brand" title="Click To Know More!!">
          <p className="sm-card-flex-rating">
            <span className="sm-card-rating">
              {video.snippet.viewsCount} views
            </span>
            &nbsp;&nbsp;<span className="sm-card-rating-dot"></span>&nbsp;&nbsp;
            <span className="sm-card-rating">
              {useFormatDate(video.snippet.publishedAt)}
            </span>
          </p>
        </h2>

        <div className="sm-card-info">
          <NavLink
            className="sm-link-new-check"
            to={`/video/${video.snippet.resourceId.videoId}`}
            title="Go To Video"
          >
            <button className="btn btn-primary cart-btn">
              <i className="fas fa-play"></i>
              &nbsp;&nbsp;Watch Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
