import type { Playlist } from "../types/PlaylistData";

const API = "http://localhost:3000/api/v1/playlists";

export const playlistRepository = {
  async getAll(): Promise<Playlist[]> {
    const res = await fetch(API);
    return res.json();
  },

  async add(name: string): Promise<Playlist> {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    return res.json();
  },

  async remove(id: number): Promise<{ message: string }> {
    const res = await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    return res.json();
  }
};
