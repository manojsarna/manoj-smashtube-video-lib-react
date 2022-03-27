import { useDocTitle } from "../../hooks/useDocTitle";
import "./page404.css";

export function Page404() {
  useDocTitle("404 - SmashCart - Manoj Sarna");
  return (
    <main className="page404">
      <section className="page404-section">
        <h1>Page Not Found</h1>
        <h3>
          We could not find what you were looking for. Try with a different URL
        </h3>
      </section>
    </main>
  );
}
