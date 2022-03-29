import "./smashplayer.css";
export function SmashPlayer({ videoId, videoDetails }) {
  const videoEmbed = "https://www.youtube.com/embed/";
  const videoSrc = `${videoEmbed}${videoId}?autoplay=1`;
  return (
    <div>
      <iframe
        className="sm-player-iframe"
        src={videoSrc}
        title="SmashTube"
        frameBorder="0"
        allow={
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        }
        allowFullScreen
      ></iframe>
    </div>
  );
}
