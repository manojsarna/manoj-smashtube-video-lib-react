import { Link } from "react-router-dom";
import { useAuth, useHistory } from "../../../context";

export function HistoryIcon() {
  const { user } = useAuth();
  const { history } = useHistory();

  return (
    <Link to="/history" title="Go To History">
      <button className="sm-icon-btn color-dm sm-icon-btn-primary">
        <div className="icon">
          <i className="fas fa-history"></i>
          {user && history.length !== 0 && (
            <span className={`icon-badge bd-red icon-bd-top-right `}>
              {history.length}
            </span>
          )}
        </div>
      </button>
    </Link>
  );
}
