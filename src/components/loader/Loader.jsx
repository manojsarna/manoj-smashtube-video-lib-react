import "./loader.css";
export function Loader({ show }) {
  return (
    <div className={show ? "sm-loader" : "sm-loader-hide"}>
      <div className="sm-loader-div-container">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
