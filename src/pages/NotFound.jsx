
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span className="eyebrow">PAGE NOT FOUND</span>
        <h1>404</h1>
        <h2>This Page Could Not Be Found</h2>
        <p>The page may have moved or the address may be incorrect.</p>
        <Link to="/" className="btn">Return to Home</Link>
      </div>
    </section>
  );
}
