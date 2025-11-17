import type { Request, Response } from "express";
import {
  getNowPlayingService,
  updateNowPlayingService,
} from "../services/nowPlaying.service";

export async function getNowPlaying(req: Request, res: Response) {
  const track = await getNowPlayingService();
  return res.json(track ?? { title: "", artist: "" });
}

export async function updateNowPlaying(req: Request, res: Response) {
  const updated = await updateNowPlayingService(req.body);
  return res.json(updated);
}
