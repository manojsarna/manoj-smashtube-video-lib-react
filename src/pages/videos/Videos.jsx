import "./videos.css";
import axios from "axios";
import { Card, Loader } from "../../components";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useState, useEffect } from "react";

export function Videos() {
  useDocTitle("Videos - SmashTube - Manoj Sarna");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/videos");
        setVideos(data.videos);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">All Videos</h2>
        <div className="sm-main-prod-container">
          {loading ? (
            <Loader show={loading} />
          ) : (
            videos.map((video) => <Card key={video.id} video={video} />)
          )}
        </div>
      </div>
    </main>
  );
}
