import { songs } from "../data/testData";
import type { Song } from "../types/Song";

export const SongRepository = {
  getAll: (): Song[] => songs,

  getById: (id: number): Song | undefined => songs.find((s) => s.id === id),

  add: (newSong: Song): Song => {
    songs.push(newSong);
    return newSong;
  },

  delete: (id: number): void => {
    const index = songs.findIndex((s) => s.id === id);
    if (index !== -1) songs.splice(index, 1);
  },
};