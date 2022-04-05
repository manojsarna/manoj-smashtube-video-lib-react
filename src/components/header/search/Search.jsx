import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./search.css";

export function Search({ searchMob }) {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(`/videos/?search=${searchString}`);
    //setSearchString("");
  };

  return (
    <div className={`sm-nav-search${searchMob ? "-mobile" : ""}`}>
      <div className="sm-input-container input-search">
        <input
          type="text"
          className={`input-basic input-basic-icon sm-input-search ${
            searchString.length <= 3 && "sm-search-error"
          }`}
          placeholder="Search For Videos..."
          name="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && searchString.length > 3) {
              return searchHandler();
            }
          }}
        />
        <button
          className="sm-icon-btn color-dm sm-icon-btn-primary sm-icon-search"
          onClick={() => searchHandler()}
        >
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
