import type { Playlist } from "../types/PlaylistData";
import { playlistRepo } from "../repo/PlaylistRepository";

export const playlistService = {
  getAll(): Playlist[] {
    return playlistRepo.all();
  },

  add(name: string): Playlist[] {
    const trimmed = name.trim();
    if (!trimmed) return playlistRepo.all(); 
    const current = playlistRepo.all();
    const exists = current.some(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) return current; 

    return playlistRepo.add(trimmed);
  },

  remove(id: number): Playlist[] {
    return playlistRepo.remove(id);
  },
};
