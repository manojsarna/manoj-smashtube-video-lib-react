import { useState, useEffect } from "react";

export function Toast({ type, message }) {
  const [show, setShow] = useState(true);
  const closeToastHandler = () => {
    setShow(false);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div className={`sm-toast-container ${show && "sm-toast-container-show"}`}>
      <div
        className={`sm-notification ${
          type === "success" ? "sm-not-success" : "sm-not-error"
        }`}
      >
        <span className="sm-alert-icon">
          <i
            className={`fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
            }`}
          ></i>
        </span>
        <span>{message}</span>
        <span className="sm-close-icon" onClick={closeToastHandler}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    </div>
  );
}
