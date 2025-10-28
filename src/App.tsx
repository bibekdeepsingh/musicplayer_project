import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
 
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Landing } from "./components/pages/PlaylistLanding";
import { Login } from "./components/login/Login";
import SubscriptionManager from "./components/SubscriptionManager/SubscriptionManager";
import { PlaylistManager } from "./components/PlaylistManager/PlaylistManager";
 
function App() {
  const [tags, setTags] = useState<string[]>([]);
 
  const addTag = (tag: string) => {
    const t = tag.trim();
    if (t && !tags.includes(t)) setTags([...tags, t]);
  };
 
  const removeTag = (tag: string) => setTags(tags.filter((x) => x !== tag));
 
  return (
    <BrowserRouter>
      <Header />
 
      <nav className="nav-bar">
        {["/", "/login", "/subscriptions", "/playlists"].map((path, i) => (
          <Link key={i} to={path}>
            {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
          </Link>
        ))}
      </nav>
 
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscriptions" element={<SubscriptionManager />} />
          <Route path="/playlists" element={<PlaylistManager />} />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>} />
        </Routes>
      </main>
 
      {tags.length > 0 && (
        <div className="tag-bar">
          {tags.map((t) => (
            <span key={t} className="tag">
              {t} <button onClick={() => removeTag(t)}>✕</button>
            </span>
          ))}
        </div>
      )}
 
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;
 