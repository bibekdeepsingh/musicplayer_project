import { Router } from "express";
import { getNowPlaying, updateNowPlaying } from "../controllers/nowPlaying.controller";
import { validateMiddleware } from "../middleware/validateMiddleware";

const router = Router();

router.get("/", getNowPlaying);
router.put("/", validateMiddleware, updateNowPlaying);

export default router;
