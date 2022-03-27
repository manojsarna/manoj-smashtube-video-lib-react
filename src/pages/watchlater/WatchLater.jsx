import { useDocTitle } from "../../hooks/useDocTitle";
import "./watchlater.css";
import { Card } from "../../components";
import { useWatchLater } from "../../context";

export function WatchLater() {
  useDocTitle("WatchLater - SmashTube - Manoj Sarna");

  return <main className="sm-main"></main>;
}
