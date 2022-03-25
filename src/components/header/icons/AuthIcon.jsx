import { Link } from "react-router-dom";

export function AuthIcon() {
  return (
    <Link to="/auth" title="Go To Login">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-sign-in-alt icon-in-btn"></i>
        </div>
      </button>
    </Link>
  );
}
