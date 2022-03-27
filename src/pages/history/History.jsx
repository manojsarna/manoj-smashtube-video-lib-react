import { useDocTitle } from "../../hooks/useDocTitle";
import "./history.css";

export function History() {
  useDocTitle("History - SmashTube - Manoj Sarna");
  return <main className="history">History Page</main>;
}
