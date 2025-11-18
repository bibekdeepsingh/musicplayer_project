import { useEffect, useState } from "react";
import "./PlaylistManager.css";
import { PlaylistRepository } from "../../repo/PlaylistRepository";
import type { Playlist } from "../../types/PlaylistData";

export function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await PlaylistRepository.all();
      setPlaylists(data);
    } catch (error) {
      console.error("Failed to load playlists:", error);
      alert("Failed to connect to backend. Check if server is running on http://localhost:4000");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const add = async () => {
    const trimmed = newName.trim();
    if (!trimmed) return;

    try {
      const created = await PlaylistRepository.add(trimmed, 0);
      setPlaylists((prev) => [...prev, created]);
      setNewName("");
    } catch (error) {
      console.error("Failed to add playlist:", error);
      alert("Failed to add playlist. Check backend connection.");
    }
  };

  const remove = async (id: string) => {  // Changed from number to string
    try {
      await PlaylistRepository.remove(id);
      setPlaylists((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Failed to remove playlist:", error);
      alert("Failed to remove playlist. Check backend connection.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <section className="playlist-manager">
      <h2>My Playlists</h2>

      <div className="add-playlist">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New playlist name"
        />
        <button onClick={add}>Add</button>
      </div>

      {playlists.length === 0 ? (
        <p>No playlists yet.</p>
      ) : (
        <ul>
          {playlists.map((p) => (
            <li key={p.id} className="playlist-item">
              <div>
                <span className="playlist-name">{p.name}</span>
                <span className="playlist-count">{p.songCount} songs</span>
              </div>
              <button onClick={() => remove(p.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
