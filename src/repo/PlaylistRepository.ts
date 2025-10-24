import { PLAYLISTS_TESTDATA } from "../data/Playlistdata";
import type { Playlist } from "../types/PlaylistData";

let memory = [...PLAYLISTS_TESTDATA];

const delay = (ms = 150) => new Promise(res => setTimeout(res, ms));

export const playlistRepository = {
  async list(): Promise<Playlist[]> {
    await delay();
    return [...memory];
  },
  async get(id: number): Promise<Playlist | undefined> {
    await delay();
    return memory.find(p => p.id === id);
  },
  async create(input: Pick<Playlist, "name">): Promise<Playlist> {
    await delay();
    const next: Playlist = {
      id: memory.length ? Math.max(...memory.map(p => p.id)) + 1 : 1,
      name: input.name,
      songCount: 0,
    };
    memory = [...memory, next];
    return next;
  },
  async update(id: number, patch: Partial<Pick<Playlist, "name" | "songCount">>): Promise<Playlist> {
    await delay();
    const idx = memory.findIndex(p => p.id === id);
    if (idx === -1) throw new Error("Playlist not found");
    const updated: Playlist = { ...memory[idx], ...patch,};
    memory = [...memory.slice(0, idx), updated, ...memory.slice(idx + 1)];
    return updated;
  },
  async remove(id: number): Promise<void> {
    await delay();
    memory = memory.filter(p => p.id !== id);
  }
};
