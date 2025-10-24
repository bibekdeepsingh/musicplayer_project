import { useCallback, useEffect, useState } from "react";
import type { Playlist } from "../types/PlaylistData";
import { playlistService } from "../services/PlaylistService";

export function usePlaylists() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      setPlaylists(await playlistService.getAll());
      setError(null);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load playlists");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void refresh(); }, [refresh]);

  const add = useCallback(async (name: string) => {
    try {
      await playlistService.create(name);
      await refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to create playlist");
    }
  }, [refresh]);

  const remove = useCallback(async (id: number) => {
    try {
      await playlistService.remove(id);
      await refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to remove playlist");
    }
  }, [refresh]);

  const rename = useCallback(async (id: number, newName: string) => {
    try {
      await playlistService.rename(id, newName);
      await refresh();
    } catch (e: any) {
      setError(e?.message ?? "Failed to rename playlist");
    }
  }, [refresh]);

  return { playlists, loading, error, add, remove, rename, refresh };
}
