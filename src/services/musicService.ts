import { SongRepository } from "../repositories/songRepository";
import type { Song } from "../types/Song";

export const MusicService = {
  getNextSong(currentId: number): Song {
    const all = SongRepository.getAll();
    const index = all.findIndex((s) => s.id === currentId);
    return all[(index + 1) % all.length];
  },

  getPrevSong(currentId: number): Song {
    const all = SongRepository.getAll();
    const index = all.findIndex((s) => s.id === currentId);
    return all[(index - 1 + all.length) % all.length];
  },

  getAllSongs(): Song[] {
    return SongRepository.getAll();
  },
};
