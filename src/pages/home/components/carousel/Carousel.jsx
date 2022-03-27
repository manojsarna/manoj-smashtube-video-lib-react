import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../../../assets/images";

export function Carousel() {
  const sliderImages = Object.values(images.slider);
  const [imgSrc, setImgSrc] = useState(sliderImages[0]);
  let i = 0;
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
        <Link to="/videos" title="Go To Videos">
          <button
            id="carousel-btn"
            className="shop-now-hover btn btn-primary btn-bold"
            title="CheckOut Product Listings"
          >
            <i className="fas fa-play"></i> &nbsp;Watch Now
          </button>
        </Link>
      </div>
    </div>
  );
}
