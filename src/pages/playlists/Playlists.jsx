import { useDocTitle } from "../../hooks/useDocTitle";
import "./playlists.css";

export function Playlists() {
  useDocTitle("Playlists - SmashTube - Manoj Sarna");
  return <main className="playlists">Playlists Listing Page</main>;
}
