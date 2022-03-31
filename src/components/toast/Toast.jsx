export function Toast({ toast }) {
  return (
    <div
      className={`sm-notification ${
        toast.type === "success" ? "sm-not-success" : "sm-not-error"
      } ${toast.show ? "" : "toast-hide"}`}
    >
      <span className="sm-alert-icon">
        <i
          className={`fas ${
            toast.type === "success"
              ? "fa-check-circle"
              : "fa-exclamation-circle"
          }`}
        ></i>
      </span>
      <span>{toast.message}</span>
      {/* <span className="sm-close-icon" onClick={closeHandler}>
        <i className="fas fa-times"></i>
      </span> */}
    </div>
  );
}
