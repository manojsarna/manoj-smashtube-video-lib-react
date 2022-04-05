import { useAuth } from "../../context";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./user.css";

export function User() {
  const { user, logoutAuth } = useAuth();
  useDocTitle("User Profile - SmashCart - Manoj Sarna");
  return (
    <main className="sm-main">
      <div className="sm-main-user-profile-container">
        <div className="sm-main-user-profile">
          <p className="sm-main-heading">
            {`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}'s `}
            Profile Page
          </p>
        </div>
        <div className="sm-user-profile-info">
          <div className="sm-user-card">
            <div className="avatar avatar-hover avatar-text bg-3 s-xxl">
              <h2>{`${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}</h2>
            </div>
            <div className="sm-user-content">
              <h2>{`${user.firstName} ${user.lastName}`}</h2>
              <h3>{user.email}</h3>
            </div>
            <div className="sm-user-card-btn">
              <button className="sm-category-outline-btn " title="Edit Profile">
                Edit Profile
              </button>
              <button
                className="sm-category-outline-btn sm-active"
                title="Logout Now"
                onClick={() => logoutAuth()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
