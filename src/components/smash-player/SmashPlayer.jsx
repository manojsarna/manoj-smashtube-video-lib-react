import "./smashplayer.css";
import ReactPlayer from "react-player/lazy";
import { useAuth, useHistory } from "../../context";
export function SmashPlayer({ videoId, videoDetails, played, setPlayed }) {
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
    </div>
  );
}
