import { useState, useEffect } from "react";
import type { Playlist } from "../types/PlaylistData";

const STORAGE_KEY = "playlists";

export function usePlaylist() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  // Load playlists from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPlaylists(JSON.parse(stored));
    } else {
      const defaults: Playlist[] = [
        { id: 1, name: "Your Station", songCount: 215 },
        { id: 2, name: "Hip-Hop Workout", songCount: 212 },
        { id: 3, name: "Sad Hits", songCount: 140 },
      ];
      setPlaylists(defaults);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    }
  }, []);

  const save = (data: Playlist[]) => {
    setPlaylists(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const add = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const newList = [
      ...playlists,
      { id: playlists.length + 1, name: trimmed, songCount: 0 },
    ];
    save(newList);
  };

  const remove = (id: number) => {
    const newList = playlists.filter((p) => p.id !== id);
    save(newList);
  };

  const clear = () => {
    save([]);
  };

  return { playlists, add, remove, clear };
}
