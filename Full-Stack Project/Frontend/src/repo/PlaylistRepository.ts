import type { Playlist } from "../types/PlaylistData";

const KEY = "playlists";
const SEED: Playlist[] = [
  { id: 1, name: "Your Station", songCount: 215 },
  { id: 2, name: "Hip-Hop Workout", songCount: 212 },
  { id: 3, name: "Sad Hits", songCount: 140 },
];

function read(): Playlist[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(SEED));
    return SEED;
  }
  try { return JSON.parse(raw) as Playlist[]; } catch { return SEED; }
}
function write(data: Playlist[]) { localStorage.setItem(KEY, JSON.stringify(data)); }

export const playlistRepo = {
  all(): Playlist[] { return read(); },
  add(name: string): Playlist[] {
    const data = read();
    const next = { id: data.length ? Math.max(...data.map(p => p.id)) + 1 : 1, name: name.trim(), songCount: 0 };
    const out = [...data, next];
    write(out);
    return out;
  },
  remove(id: number): Playlist[] {
    const out = read().filter(p => p.id !== id);
    write(out);
    return out;
  }
};
