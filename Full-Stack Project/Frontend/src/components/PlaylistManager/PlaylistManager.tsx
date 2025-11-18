import { useEffect, useState } from "react";
import type { Playlist } from "../../types/PlaylistData";
import { playlistRepository } from "../../repository/PlaylistRepository";
import "./PlaylistManager.css";

export function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    playlistRepository.getAll().then((data) => {
      setPlaylists(data);
      setLoading(false);
    });
  }, []);

  const addPlaylist = async () => {
    if (!newName.trim()) return;

    const created = await playlistRepository.add(newName);
    setPlaylists((prev) => [...prev, created]);
    setNewName("");
  };

  const removePlaylist = async (id: number) => {
    await playlistRepository.remove(id);
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
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
