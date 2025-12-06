import { Request, Response } from "express";
import { playlistService } from "../services/playlist.service";

export const playlistController = {
  async getAll(req: Request, res: Response) {
    const userId = req.auth?.userId;
    const playlists = await playlistService.getAll(userId);
    res.json(playlists);
  },

  async create(req: Request, res: Response) {
    const userId = req.auth?.userId;
    const { name } = req.body;

    if (!name) return res.status(400).json({ error: "Name required" });

    const playlist = await playlistService.create(userId, name);
    res.status(201).json(playlist);
  },

  async remove(req: Request, res: Response) {
    const userId = req.auth?.userId;
    const id = req.params.id;
    const playlist = await playlistService.remove(userId, id);
    res.json({ message: "Deleted", playlist });
  }
};
