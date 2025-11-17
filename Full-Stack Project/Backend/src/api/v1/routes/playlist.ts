import { Router } from "express";
import {prisma} from "../../../lib/prisma";

const router = Router();

router.get("/", async (req, res) => {
  const playlists = await prisma.playlist.findMany();
  res.json(playlists);
});

export default router;
