import express from "express";
import cors from "cors";

const app = express();

// Allow only your frontend to access the backend
app.use(
  cors({
    origin: "http://localhost:5173",  // Vite front-end URL
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
