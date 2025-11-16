import { Link } from "react-router-dom";
import "../pages/PlaylistLanding.css";

export function Landing() {
  return (
    <div className="landing-container">
      <span className="landing-title">Welcome to Music Player Organizer!</span>
      <span className="landing-subtext">
        <Link to="/login" className="landing-link">Login</Link> or{" "}
        <Link to="/sign-up" className="landing-link">Sign up</Link> to get started.
      </span>
    </div>
  );
}
