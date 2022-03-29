import { Card } from "../../components";
import { useHistory } from "../../context";
import { useDocTitle } from "../../hooks/useDocTitle";
import "./history.css";

export function History() {
  useDocTitle("History - SmashTube - Manoj Sarna");

  return <main className="sm-main"></main>;
}
