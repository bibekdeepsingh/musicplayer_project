import "./PlaylistManager.css";
import type { Playlist } from "../types/PlaylistData";


export function PlaylistManager() {
  const playlists: Playlist[] = [
    { id: 1, name: "Your Station", songCount: 215 },
    { id: 2, name: "Hip-Hop Workout", songCount: 212 },
    { id: 3, name: "Sad Hits", songCount: 140 },
  ];

  return (
    <section className="playlist-manager">
      <h2>My Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} className="playlist-item">
            <span className="playlist-name">{playlist.name}</span>
            <span className="playlist-count">{playlist.songCount} songs</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PlaylistManager;