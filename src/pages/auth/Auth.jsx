import { useDocTitle } from "../../hooks/useDocTitle";
import "./auth.css";

export function Auth() {
  useDocTitle("Auth - SmashCart - Manoj Sarna");
  return <main className="auth">Auth Page</main>;
}
