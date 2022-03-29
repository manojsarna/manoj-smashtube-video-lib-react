export function Main() {
  return (
    <main className="sm-main">
      <div className="sm-main-categories">
        <h2>Best Selling Categories</h2>
        <div className="sm-main-cat-container">
          <div className="sm-main-cat-child sm-box-shad-hov">
            <img src={images.categories.rackets} alt="badminton" />
            <div className="sm-man-cat-text sm-grid-content">
              <span>Rackets</span>
            </div>
          </div>
          <div className="sm-main-cat-child sm-box-shad-hov">
            <img src={images.categories.kitbags} alt="badminton" />
            <div className="sm-man-cat-text sm-grid-content ">
              <span>KitBags</span>
            </div>
          </div>
          <div className="sm-main-cat-child sm-box-shad-hov">
            <img src={images.categories.shoes} alt="badminton" />
            <div className="sm-man-cat-text sm-grid-content">
              <span>Shoes</span>
            </div>
          </div>
          <div className="sm-main-cat-child sm-box-shad-hov">
            <img src={images.categories.shuttles} alt="badminton" />
            <div className="sm-man-cat-text sm-grid-content">
              <span>Shuttles</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sm-main-feature-p">
        <h2 className="prod-heading">Best Selling Products</h2>
        <div className="sm-main-prod-container">
          <div className="sm-card">
            <div className="sm-card-img">
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <span className="sm-card-badge">New</span>
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <span className="sm-card-badge">Best seller</span>
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <span className="sm-card-badge">New</span>
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          <div className="sm-card">
            <div className="sm-card-img">
              <span className="sm-card-badge">Best seller</span>
              <button className="sm-card-fav" title="Add To Wishlist">
                <i className="fas fa-heart"></i>
              </button>
              <img src={images.products.p1} alt="badminton" />
            </div>
            <div className="sm-card-content">
              <h2
                className="sm-card-content-title"
                title="Click To Know More!!"
              >
                Yonex GR 303 Aluminum Blend Badminton Racquets with Full Cover,
                Pack of 2 and Mavis combo
              </h2>
              <h2
                className="sm-card-content-brand"
                title="Click To Know More!!"
              >
                {" "}
                by{" "}
                <a href="#" className="link-brand">
                  Yonex
                </a>
              </h2>
              <div className="sm-card-info">
                <span className="sm-card-info-price">
                  ₹1249
                  <span className="sm-card-info-price-old">₹1750</span>
                  <span className="sm-card-info-price-save">(29% Off)</span>
                </span>
                <button className="btn btn-primary cart-btn">
                  <i className="btn-cart fas fa-shopping-cart"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
