import { Request, Response, NextFunction } from "express";

export function validateMiddleware(req: Request, res: Response, next: NextFunction) {
  const { songName, artist } = req.body;

  if (!songName || !artist) {
    return res.status(400).json({ error: "songName and artist are required" });
  }

  next();
}
