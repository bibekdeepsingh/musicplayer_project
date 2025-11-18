import { useEffect, useState } from "react";
import type { Playlist } from "../../types/PlaylistData";
import { playlistRepository } from "../../repository/PlaylistRepository";
import "./PlaylistManager.css";

export function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");

  // Load playlists on mount
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await playlistRepository.getAll();
        setPlaylists(data);
      } catch (error) {
        console.error("Failed to load playlists:", error);
        alert("Failed to connect to backend. Make sure server is running.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Add playlist
  const addPlaylist = async () => {
    if (!newName.trim()) return;

    try {
      const created = await playlistRepository.add(newName.trim());
      setPlaylists((prev) => [...prev, created]);
      setNewName("");
    } catch (error) {
      console.error("Failed to add playlist:", error);
      alert("Failed to add playlist. Check backend connection.");
    }
  };

  // Remove playlist
  const removePlaylist = async (id: number | string) => {
    try {
      await playlistRepository.remove(id);
      setPlaylists((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to remove playlist:", error);
      alert("Failed to remove playlist. Check backend connection.");
    }
  };

  if (loading) return <p>Loading playlists...</p>;

  return (
    <section className="playlist-manager">
      <h2>My Playlists</h2>

      <div className="add-playlist">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New playlist name"
        />
        <button onClick={addPlaylist}>Add</button>
      </div>

      {playlists.length === 0 ? (
        <p>No playlists yet.</p>
      ) : (
        <ul>
          {playlists.map((p) => (
            <li key={p.id} className="playlist-item">
              <span>{p.name}</span>
              <span>{p.songCount} songs</span>
              <button onClick={() => removePlaylist(p.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
