import { useState } from "react";

export function LikeIcon() {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <button
      className="sm-icon-btn color-dm sm-icon-btn-primary"
      onClick={onClickHandler}
    >
      <div className="icon icon-video">
        <i className={`fa-thumbs-up ${toggle ? "fas" : "far"}`}></i>
        <span>{"  "}LIKE</span>
      </div>
    </button>
  );
}
