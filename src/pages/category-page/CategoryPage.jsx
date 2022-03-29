import { useDocTitle } from "../../hooks/useDocTitle";
import axios from "axios";
import "./categorypage.css";
import { useParams } from "react-router-dom";
import { Card, Loader } from "../../components";
import { useState, useEffect } from "react";

export function CategoryPage() {
  useDocTitle("CategoryId Video Page - SmashTube - Manoj Sarna");
  const { categoryId } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/videos`);
        if (response.status === 200) {
          setVideos(response.data.videos);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return loading ? (
    <Loader show={loading} />
  ) : (
    <main className="sm-main">
      <div className="sm-main-feature-p">
        <h2 className="prod-heading">{categoryId} Videos</h2>
        <div className="sm-main-prod-container">
          {videos
            .filter(
              (video) => video.snippet.category === categoryId.toLowerCase()
            )
            .map((video) => (
              <Card key={video.id} video={video} />
            ))}
        </div>
      </div>
    </main>
  );
}
