import { Link } from "react-router-dom";
import { HeartPulse } from "lucide-react";

export default function Brand() {
  return (
    <Link
      to="/"
      className="brand"
      aria-label="Sri Sakthi Hospital home"
    >
      <span className="brand-mark">
        <HeartPulse size={28} strokeWidth={2.2} />
      </span>

      <span className="brand-copy">
        <strong>SRI SAKTHI</strong>

        <small>HOSPITAL</small>

        <em>Listening • Caring • Healing</em>
      </span>
    </Link>
  );
}