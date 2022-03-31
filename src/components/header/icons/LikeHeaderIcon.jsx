import { Link } from "react-router-dom";
import { useLikes } from "../../../context";

export function LikeHeaderIcon() {
  const { likes } = useLikes();
  return (
    <Link to="/likes" title="Go To Liked Videos">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          {/* fas available */}
          <i className="fas fa-thumbs-up"></i>
          <span
            className={`icon-badge bd-red icon-bd-top-right ${
              likes?.length === 0 ? "icon-hide " : ""
            } `}
          >
            {likes.length}
          </span>
        </div>
      </button>
    </Link>
  );
}
