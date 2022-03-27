import { useDocTitle } from "../../hooks/useDocTitle";
import "./videopage.css";
import { useLocation, useParams } from "react-router-dom";
import { Card, SmashPlayer } from "../../components";
import { videos } from "../../data/video-data";
import { useFormatDate } from "../../hooks/useFormatDate";
import { AddWatchLaterIcon, LikeIcon } from "../../components/header/icons";
import { useEffect } from "react";

export function VideoPage() {
  useDocTitle("Video Page - SmashTube - Manoj Sarna");
  const { videoId } = useParams();
  const videoDetails = videos.find(
    (video) => video.snippet.resourceId.videoId === videoId
  );

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const topVideos = videos.filter((video) => video.snippet.tag === "Top");

  return (
    <main className="sm-main-video-page">
      <div className="sm-video-container">
        <div className="sm-video-container-main">
          <SmashPlayer videoId={videoId} />
          <div className="sm-smash-player-cta-info">
            <div className="sm-smash-player-info">
              <span className="sm-smash-player-info-views">
                {videoDetails.snippet.viewsCount} views
              </span>
              &nbsp;&nbsp;<span className="sm-smash-player-info-dot"></span>
              &nbsp;&nbsp;
              <span className="sm-smash-player-info-date">
                {useFormatDate(videoDetails.snippet.publishedAt)}
              </span>
            </div>
            <div className="sm-smash-player-cta">
              <LikeIcon />
              <AddWatchLaterIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="sm-video-side-featured">
        <h3 className="sm-video-side-featured-heading">Must Watch</h3>
        <div className="sm-video-side-wrapper">
          {topVideos.map(
            (video) =>
              video.snippet.tag && <Card key={video.id} video={video} />
          )}
        </div>
      </div>
    </main>
  );
}
