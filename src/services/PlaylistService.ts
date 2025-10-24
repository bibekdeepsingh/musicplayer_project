import type { Playlist } from "../types/PlaylistData";
import { playlistRepository } from "../repo/PlaylistRepository";

export const playlistService = {
  async getAll(): Promise<Playlist[]> {
    return playlistRepository.list();
  },

  async create(name: string): Promise<Playlist> {
    const trimmed = name.trim();
    if (!trimmed) throw new Error("Playlist name is required.");
    const existing = await playlistRepository.list();
    if (existing.some(p => p.name.toLowerCase() === trimmed.toLowerCase())) {
      throw new Error("Playlist name must be unique.");
    }
    return playlistRepository.create({ name: trimmed });
  },

  async rename(id: number, newName: string): Promise<Playlist> {
    const trimmed = newName.trim();
    if (!trimmed) throw new Error("New name is required.");
    const all = await playlistRepository.list();
    if (all.some(p => p.id !== id && p.name.toLowerCase() === trimmed.toLowerCase())) {
      throw new Error("Another playlist already has this name.");
    }
    return playlistRepository.update(id, { name: trimmed });
  },

  async remove(id: number): Promise<void> {
    return playlistRepository.remove(id);
  },

  async incrementCount(id: number): Promise<Playlist> {
    const p = await playlistRepository.get(id);
    if (!p) throw new Error("Playlist not found");
    return playlistRepository.update(id, { songCount: p.songCount + 1 });
  }
};
