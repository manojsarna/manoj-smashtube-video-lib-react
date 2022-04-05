import "./toast.css";

import { Toast } from "./Toast";
import { useToast } from "../../context";

export function ToastContainer() {
  const { toastList } = useToast();

  return (
    <div className="sm-toast-container">
      {[...toastList].reverse().map((toast) => (
        <Toast key={toast._id} toast={toast} />
      ))}
    </div>
  );
}
