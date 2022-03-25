import { Link } from "react-router-dom";

export function HistoryIcon() {
  return (
    <Link to="/history" title="Go To History">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-history"></i>
        </div>
      </button>
    </Link>
  );
}
