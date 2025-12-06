import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth } from "@clerk/express";

import playlistRoutes from "./api/v1/routes/playlist.routes";
import subscriptionRoutes from "./api/v1/routes/subscription.routes";
import nowPlayingRoutes from "./api/v1/routes/nowPlaying.routes";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("Backend is running"));
app.get("/test", (req, res) => res.send("Server OK"));

app.use("/api/v1/playlists", playlistRoutes);
app.use("/api/v1/subscriptions", subscriptionRoutes);
app.use("/api/v1/now-playing", nowPlayingRoutes);

app.get("/api/v1/auth-check", requireAuth(), (req, res) => {
  res.json({ authenticated: true, userId: req.auth?.userId });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
