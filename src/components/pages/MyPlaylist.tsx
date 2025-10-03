import { Link } from "react-router-dom";
import type { Playlist } from "../types/PlaylistData";
import { PlaylistManager } from "../PlaylistManager/PlaylistManager";

interface MyPlaylistsProps {
  playlists: Playlist[];
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
}

export function MyPlaylists({ playlists }: MyPlaylistsProps) {
  const NoPlaylistsFound = () => {
    return (
      <div className="no-playlists">
        <div>
          <span>You have no playlists saved.</span>
        </div>
        <div>
          <Link to="/playlists">
            <span className="playlist-link">View all playlists</span>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="my-playlists">
      {playlists.length === 0 ? <NoPlaylistsFound /> : null}
      <div className="playlist-wrapper">
        <PlaylistManager />
      </div>
    </div>
  );
}
