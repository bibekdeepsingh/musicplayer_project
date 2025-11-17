import { useState, useEffect } from "react";
import { MusicService } from "../services/musicService";
import type { Song } from "../types/Song";

export function useNowPlaying() {
  const allSongs = MusicService.getAllSongs();

  const [currentSong, setCurrentSong] = useState<Song>(() => {
    const stored = localStorage.getItem("currentSong");
    return stored ? JSON.parse(stored) : allSongs[0];
  });

  useEffect(() => {
    localStorage.setItem("currentSong", JSON.stringify(currentSong));
  }, [currentSong]);

  const playNext = () => {
    const next = MusicService.getNextSong(currentSong.id);
    setCurrentSong(next);
  };

  const playPrev = () => {
    const prev = MusicService.getPrevSong(currentSong.id);
    setCurrentSong(prev);
  };

  return { currentSong, playNext, playPrev };
}
