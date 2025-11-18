import express from "express";
import cors from "cors";
import nowPlayingRoutes from "./api/v1/routes/nowPlaying.routes";
import playlistRoutes from "./api/v1/routes/playlist.routes";
import subscriptionRoutes from "./api/v1/routes/subscription.routes";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/v1/playlists", playlistRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/now-playing", nowPlayingRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/test", (req, res) => {
  res.send("Server OK");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
