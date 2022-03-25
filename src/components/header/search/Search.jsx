export function Search({ searchMob }) {
  return (
    <div className={`sm-nav-search${searchMob ? "-mobile" : ""}`}>
      <div className="sm-input-container input-search">
        <input
          type="text"
          className="input-basic input-basic-icon"
          placeholder="Search..."
          name="search"
        />
        <i className="icon-basic fas fa-search"></i>
      </div>
    </div>
  );
}
