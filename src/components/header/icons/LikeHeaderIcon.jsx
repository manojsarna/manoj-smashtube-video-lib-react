import { Link } from "react-router-dom";
import { useAuth, useLikes } from "../../../context";

export function LikeHeaderIcon() {
  const { likes } = useLikes();
  const { user } = useAuth();
  return (
    <Link to="/likes" title="Go To Liked Videos">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-thumbs-up"></i>
          {user && likes.length !== 0 && (
            <span className={`icon-badge bd-red icon-bd-top-right `}>
              {likes.length}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
