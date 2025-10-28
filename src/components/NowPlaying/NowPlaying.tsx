import "./NowPlaying.css";
import { useNowPlaying } from "../../hooks/useNowPlaying";

function NowPlaying() {
  const { currentSong, playNext, playPrev } = useNowPlaying();

  return (
    <section className="now-playing">
      <h2>🎵 Now Playing</h2>

      {currentSong ? (
        <>
          <div className="song-info">
            <p className="song-title"><strong>{currentSong.title}</strong></p>
            <p className="song-artist">{currentSong.artist}</p>
            <p className="song-duration">⏱ {currentSong.duration}</p>
          </div>

          <div className="controls">
            <button className="control-btn prev" onClick={playPrev}>⏮️ Prev</button>
            <button className="control-btn next" onClick={playNext}>⏭️ Next</button>
          </div>
        </>
      ) : (
        <p>No song currently playing.</p>
      )}
    </section>
  );
}

export default NowPlaying;
