import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Landing } from "./components/pages/PlaylistLanding";
import { Login } from "./components/login/Login";
import { SignUpPage } from "./components/signup/SignUp";
import NowPlaying from "./components/NowPlaying/NowPlaying";
import SubscriptionManager from "./components/SubscriptionManager/SubscriptionManager";
import { PlaylistManager } from "./components/PlaylistManager/PlaylistManager";

function App() {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <Router>
      <div className="app-container">
        <Header />

        <nav className="main-nav">
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/now-playing">Now Playing</Link> |{" "}
          <Link to="/subscriptions">Subscriptions</Link> |{" "}
          <Link to="/playlists">Playlists</Link>
          
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/now-playing" element={<NowPlaying />} />
            <Route path="/subscriptions" element={<SubscriptionManager />} />
            <Route path="/playlists" element={<PlaylistManager />} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
