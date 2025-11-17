import { Router } from "express";
import { playlistController } from "../controllers/playlist.controller";

const router = Router();

router.get("/", playlistController.getAll);
router.post("/", playlistController.create);
router.delete("/:id", playlistController.remove);

export default router;
