import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../../assets/images";
import "./carousel.css";
export function Carousel() {
  const sliderImages = Object.values(images.slider);
  const [imgSrc, setImgSrc] = useState(sliderImages[0]);
  let i = 0;
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (i > sliderImages.length - 1) i = 0;
      setImgSrc(() => sliderImages[i]);
      i++;
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="sm-main-carousel">
      <div className="sm-main-img-container">
        <img id="sm-main-image" src={imgSrc} alt="badminton" />
      </div>
      <div className="sm-main-carousel-btn sm-grid-content">
        <h1 className="sub-main-heading color-p">
          Watch Best Badminton Videos
        </h1>

        <button
          id="carousel-btn"
          className="shop-now-hover btn btn-primary btn-bold"
          title="Explore Videos"
          onClick={() => navigate(`/videos/?category=all`)}
        >
          <i className="fas fa-play sm-margin-right"></i> Explore Now
        </button>
      </div>
    </div>
  );
}
