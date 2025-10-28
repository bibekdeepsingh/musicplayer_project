Architecture Document — Bibekdeep Singh (BS)

Feature: Playlists
Sprint: 3
Project: Music Player Organizer

This document outlines the architectural structure for the Playlist feature. It follows the Hook → Service → Repository pattern to separate logic, simplify debugging, and improve scalability across the project.

- What does this hook do?
The usePlaylist hook manages all UI logic related to playlists.
Loads playlist data from localStorage using the service.
Tracks playlist updates and deletions in real time.
Provides functions to add, remove, and clear playlists.
Keeps playlist data consistent across navigation and page reloads.

- How was logic separated?
The logic is separated to keep each layer independent:
Hook handles only React state and presentation updates.
Service defines business logic (validation, duplicates, trimming names).
Repository manages all data persistence using localStorage.
This ensures the PlaylistManager UI remains simple, focusing purely on displaying playlists and handling user interactions.

- Where is it used?
The hook and service are used in:
src/components/PlaylistManager/PlaylistManager.tsx
src/hooks/usePlaylist.ts
src/services/playlistService.ts
src/repositories/playlistRepository.ts