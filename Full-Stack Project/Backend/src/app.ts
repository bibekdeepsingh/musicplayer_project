import express from "express";
import cors from "cors";
import subscriptionRoutes from "../src/api/v1/routes/subscription.routes";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/subscriptions", subscriptionRoutes);

export default app;
