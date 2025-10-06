import { useState } from "react";
import "./PlaylistManager.css";
import type { Playlist } from "../types/PlaylistData";

export function PlaylistManager() {
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 1, name: "Your Station", songCount: 215 },
    { id: 2, name: "Hip-Hop Workout", songCount: 212 },
    { id: 3, name: "Sad Hits", songCount: 140 },
  ]);

  const [newPlaylist, setNewPlaylist] = useState("");

  const addPlaylist = () => {
    if (!newPlaylist.trim()) return;
    setPlaylists([
      ...playlists,
      { id: playlists.length + 1, name: newPlaylist, songCount: 0 },
    ]);
    setNewPlaylist("");
  };

  const removePlaylist = (id: number) => {
    setPlaylists(playlists.filter((p) => p.id !== id));
  };

  return (
    <section className="playlist-manager">
      <h2>My Playlists</h2>

      <div className="add-playlist">
        <input
          type="text"
          value={newPlaylist}
          onChange={(e) => setNewPlaylist(e.target.value)}
          placeholder="New playlist name"
        />
        <button onClick={addPlaylist}>Add</button>
      </div>

      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} className="playlist-item">
            <span className="playlist-name">{playlist.name}</span>
            <span className="playlist-count">{playlist.songCount} songs</span>
            <button onClick={() => removePlaylist(playlist.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
