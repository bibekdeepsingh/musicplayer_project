# 🏗️ Architecture Document — Navpreet Kaur (NK)

**Feature:** Now Playing  
**Sprint:** 3  
**Project:** Music Player Organizer  

This document explains the architectural design decisions made for the `NowPlaying` feature, including the custom hook, service, and repository. These follow the **Hook → Service → Repository** pattern to ensure clean separation of concerns, maintainability, and reusability across the project.

---

## 🎣 Hook: `useNowPlaying`

### 🔹 What does this hook do?
The `useNowPlaying` hook manages all presentation logic related to the currently playing song.  
It:
- Loads the last played song from `localStorage` on startup.
- Tracks which song is currently active.
- Provides functions to play the **next** and **previous** songs.
- Automatically saves the current song back to `localStorage` for persistence across browser sessions.

### 🔹 How was logic separated?
The hook is limited strictly to **UI-level state management** and presentation logic:
- It doesn’t contain any business logic for how songs are selected (that belongs in the service).
- It doesn’t fetch or store raw data (that belongs in the repository).
- It only updates the component state (`currentSong`) and interacts with `localStorage`.

This keeps the hook lightweight and reusable, following React’s single-responsibility principle.

### 🔹 Where is it used?
The hook is used in:
```tsx
src/components/NowPlaying/NowPlaying.tsx
