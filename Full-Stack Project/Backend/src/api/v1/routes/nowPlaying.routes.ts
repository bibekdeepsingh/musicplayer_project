import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { getNowPlaying, updateNowPlaying } from "../controllers/nowPlaying.controller";
import { validateMiddleware } from "../middleware/validateMiddleware";

const router = Router();

router.get("/", requireAuth(), getNowPlaying);
router.put("/", requireAuth(), validateMiddleware, updateNowPlaying);

export default router;
