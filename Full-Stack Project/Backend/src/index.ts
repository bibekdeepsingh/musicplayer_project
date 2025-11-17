import express from "express";
import cors from "cors";
import nowPlayingRoutes from "./api/v1/routes/nowPlaying.routes";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/now-playing", nowPlayingRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
