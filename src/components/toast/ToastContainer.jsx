import "./toast.css";

import { Toast } from "./Toast";
import { useToast } from "../../context";
import { useEffect } from "react";

export function ToastContainer() {
  const { toastList, dispatch } = useToast();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: "TOAST_RESET",
      });
    }, 2000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastList.length]);

  return (
    <div className="sm-toast-container">
      {[...toastList].reverse().map((toast) => (
        <Toast key={toast._id} toast={toast} />
      ))}
    </div>
  );
}
