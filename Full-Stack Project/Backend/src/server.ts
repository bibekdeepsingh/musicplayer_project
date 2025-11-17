import express from "express";
import cors from "cors";
import playlistRoutes from "./api/v1/routes/playlist.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/playlists", playlistRoutes);

app.get("/test", (req, res) => res.send("Server OK"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
