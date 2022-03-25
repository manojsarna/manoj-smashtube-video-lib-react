import "./smashplayer.css";
export function SmashPlayer({ videoId }) {
  const videoEmbed = "https://www.youtube.com/embed/";
  const videoSrc = `${videoEmbed}${videoId}`;
  return (
    <>
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
    </>
  );
}
