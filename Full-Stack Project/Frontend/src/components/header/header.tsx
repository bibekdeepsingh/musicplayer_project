import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="title-block">
          <h1>My Music Player</h1>
          <p>Organize and enjoy your playlists</p>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="auth-btn login-btn">Login</Link>
          <Link to="/sign-up" className="auth-btn signup-btn">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
