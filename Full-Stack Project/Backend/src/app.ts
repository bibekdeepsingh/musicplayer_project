// app.ts
import express from "express";
import cors from "cors";
import playlistRoutes from "./api/v1/routes/playlist.routes";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/v1/playlists", playlistRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/test", (req, res) => {
  res.send("Server OK");
});

export default app;
