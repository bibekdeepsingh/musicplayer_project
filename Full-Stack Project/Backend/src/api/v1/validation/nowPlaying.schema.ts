import { z } from "zod";

export const updateNowPlayingSchema = z.object({
  track: z.string().min(1, "Track name is required"),
  artist: z.string().min(1, "Artist name is required"),
});
