export interface Playlist {
  id: string;  // Changed from number to string (UUID from backend)
  name: string;
  songCount: number;
}