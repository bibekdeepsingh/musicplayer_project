const API_URL = "http://localhost:4000/now-playing";

export async function getNowPlaying() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to load now playing data");
  }
  return res.json();
}

export async function updateNowPlaying(data: { title: string; artist: string }) {
  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update now playing");
  }

  return res.json();
}
