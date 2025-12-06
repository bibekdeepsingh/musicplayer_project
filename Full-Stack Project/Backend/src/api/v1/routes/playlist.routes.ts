import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { playlistController } from "../controllers/playlist.controller";

const router = Router();

router.get("/", requireAuth(), playlistController.getAll);
router.post("/", requireAuth(), playlistController.create);
router.delete("/:id", requireAuth(), playlistController.remove);

export default router;
