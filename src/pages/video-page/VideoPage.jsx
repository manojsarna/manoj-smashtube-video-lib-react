import { useDocTitle } from "../../hooks/useDocTitle";
import axios from "axios";
import "./videopage.css";
import { useLocation, useParams } from "react-router-dom";
import { Card, Loader, SmashPlayer } from "../../components";
import { videos } from "../../data/video-data";
import { formatDate } from "../../hooks/formatDate";
import {
  AddWatchLaterIcon,
  LikeIcon,
  PlaylistsAddNewIcon,
} from "../../components/header/icons";
import { useState, useEffect } from "react";

export function VideoPage() {
  useDocTitle("Video Page - SmashTube - Manoj Sarna");

  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [videoDetails, setVideoDetails] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/videos/${videoId}`);
        if (response.status === 200) {
          setVideoDetails(response.data.video);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [videoId]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const topVideos = videos.filter((video) => video.snippet.tag === "Top");

  return loading ? (
    <Loader show={loading} />
  ) : (
    <main className="sm-main-video-page">
      <div className="sm-video-container">
        <div className="sm-video-container-main">
          <SmashPlayer videoId={videoId} videoDetails={videoDetails} />
          <div className="sm-smash-player-title">
            {videoDetails.snippet.title}
          </div>
          <div className="sm-smash-player-cta-info">
            <div className="sm-smash-player-info">
              <span className="sm-smash-player-info-views">
                {videoDetails.snippet.viewsCount} views
              </span>
              <span className="sm-smash-player-info-dot"></span>

              <span className="sm-smash-player-info-date">
                {formatDate(videoDetails.snippet.publishedAt)}
              </span>
            </div>
            <div className="sm-smash-player-cta">
              <LikeIcon />
              <AddWatchLaterIcon videoDetails={videoDetails} />
              <PlaylistsAddNewIcon />
            </div>
          </div>
        </div>
        <div className="sm-smash-player-channel-avatar">
          <div className="avatar s-s">
            <img
              src="https://user-images.githubusercontent.com/45617406/160282060-80f5ed68-d389-439e-8978-bde506f1c7ac.png"
              alt="badminton"
            />
          </div>
          <div className="sm-smash-player-channel-name">
            <span className="fw-700">
              {videoDetails.snippet.videoOwnerChannelTitle}
            </span>
            <span>983K subscribers</span>
          </div>
        </div>
        <div className="sm-video-container-main-desc">
          {videoDetails.snippet.description}
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
