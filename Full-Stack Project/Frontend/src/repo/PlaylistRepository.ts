const BASE = "http://localhost:3000/api/v1/playlists";

export const PlaylistRepository = {
  async all() {
    const r = await fetch(BASE);
    if (!r.ok) throw new Error("Could not load playlists");
    return r.json();
  },

  async add(name: string, songCount = 0) {
    const r = await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, songCount })
    });
    if (!r.ok) throw new Error("Could not create playlist");
    return r.json();
  },

  async remove(id: number) {
    const r = await fetch(`${BASE}/${id}`, { method: "DELETE" });
    if (!r.ok) throw new Error("Could not delete playlist");
    return r.json();
  }
};
