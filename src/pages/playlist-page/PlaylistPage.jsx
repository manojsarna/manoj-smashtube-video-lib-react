import { useDocTitle } from "../../hooks/useDocTitle";
import "./playlistpage.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Loader } from "../../components";
import { usePlaylists } from "../../context";

export function PlaylistPage() {
  useDocTitle("Playlist Page - SmashTube - Manoj Sarna");

  const { playlistId } = useParams();
  const [loading, setLoading] = useState(true);
  const { playlist, getPlaylist, removeFromPlaylists } = usePlaylists();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    (async function () {
      try {
        setLoading(true);
        await getPlaylist(playlistId);
        timeout = setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.error(error.response.data.errors);
      }
    })();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlistId]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return loading ? (
    <Loader show={loading} />
  ) : (
    <main className="sm-main">
      <div className="sm-main-feature-p sm-main-feat-new">
        <div className="sm-main-playlist-top">
          <p className="sm-main-heading">{playlist.title}'s Page</p>
          <button
            className="btn btn-primary btn-bolder create-playlist-button"
            onClick={() => {
              removeFromPlaylists(playlistId);
              navigate("/playlists");
            }}
          >
            Delete Playlist
          </button>
        </div>
        <ul className="sm-main-prod-container">
          {playlist.videos.map((video) => (
            <Card key={video._id} video={video} type={"playlist"} />
          ))}
        </ul>
      </div>
    </main>
  );
}
