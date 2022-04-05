import "./smashplayer.css";
import ReactPlayer from "react-player/lazy";
import { useAuth, useHistory } from "../../context";
export function SmashPlayer({ videoId, videoDetails, played, setPlayed }) {
  // const videoEmbed = "https://www.youtube.com/embed/";
  //const videoSrc = `${videoEmbed}${videoId}?autoplay=1`;
  const videoSrc = "https://www.youtube.com/watch?v=";
  const { addToHistory } = useHistory();
  const { user } = useAuth();
  return (
    <div className="sm-player-iframe">
      <ReactPlayer
        controls
        onPlay={() => {
          if (!played) {
            setPlayed(true);
            if (user) {
              addToHistory(videoDetails);
            }
          }
        }}
        height="70vh"
        width="100%"
        url={`${videoSrc}${videoId}`}
      />
      {/* <iframe
        className="sm-player-iframe"
        src={videoSrc}
        title="SmashTube"
        frameBorder="0"
        allow={
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        }
        allowFullScreen
      ></iframe> */}
    </div>
  );
}
