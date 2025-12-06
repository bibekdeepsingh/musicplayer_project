import type { Request, Response } from "express";
import {
  getNowPlayingService,
  updateNowPlayingService,
} from "../services/nowPlaying.service";

export async function getNowPlaying(req: Request, res: Response) {
  const userId = req.auth?.userId;
  const track = await getNowPlayingService(userId);
  res.json(track ?? { songName: "", artist: "" });
}

export async function updateNowPlaying(req: Request, res: Response) {
  const userId = req.auth?.userId;
  const updated = await updateNowPlayingService(userId, req.body);
  res.json(updated);
}
