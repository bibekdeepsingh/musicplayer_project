import "./PlaylistManager.css";
import type { Playlist } from "../../types/PlaylistData";
import { PLAYLISTS_TESTDATA } from "../../data/PlaylistData";
import { useState, useEffect } from "react";

export function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("playlists");
    setPlaylists(saved ? JSON.parse(saved) : PLAYLISTS_TESTDATA);
  }, []);

  const save = (data: Playlist[]) => {
    setPlaylists(data);
    localStorage.setItem("playlists", JSON.stringify(data));
  };

  const add = () => {
    if (!newName.trim()) return;
    save([...playlists, { id: playlists.length + 1, name: newName, songCount: 0 }]);
    setNewName("");
  };

  const remove = (id: number) => save(playlists.filter((p) => p.id !== id));

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
              <span>{p.name}</span>
              <span>{p.songCount} songs</span>
              <button onClick={() => remove(p.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
