import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
 
import { Landing } from "./components/pages/PlaylistLanding";
import { PlaylistManager } from "./components/PlaylistManager/PlaylistManager";
import SubscriptionManager from "./components/SubscriptionManager/SubscriptionManager";
import { Login } from "./components/login/Login";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
 
function App() {
  return (
<Router>
<div className="app-container">
<Header />

<nav className="main-nav">
<Link to="/">Home</Link> |{" "}
<Link to="/login">Login</Link> |{" "}
<Link to="/subscriptions">Subscriptions</Link> |{" "}
<Link to="/playlists">Playlists</Link>
</nav>
 
        <main>
<Routes>
<Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path="/subscriptions" element={<SubscriptionManager />} />
<Route path="/playlists" element={<PlaylistManager />} />
</Routes>
</main>
 
        <Footer />
</div>
</Router>
  );
}
 
export default App;