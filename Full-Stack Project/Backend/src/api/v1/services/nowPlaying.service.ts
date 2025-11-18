import { prisma } from "../../../lib/prisma";

// TODO: Replace with actual authenticated user ID from session/token
const TEMP_USER_ID = "temp-user-id";

export async function getNowPlayingService() {
  // First, ensure a temp user exists for testing
  let user = await prisma.user.findUnique({ where: { id: TEMP_USER_ID } });
  
  if (!user) {
    user = await prisma.user.create({
      data: {
        id: TEMP_USER_ID,
        email: "temp@example.com",
        password: "temp-password"
      }
    });
  }

  let record = await prisma.nowPlaying.findFirst();

  if (!record) {
    record = await prisma.nowPlaying.create({
      data: {
        songName: "No Song Playing",  // Changed from 'title' to 'songName'
        artist: "Unknown Artist",
        userId: TEMP_USER_ID  // Required field!
      },
    });
  }

  return record;
}

export async function updateNowPlayingService(data: { songName: string; artist: string }) {  // Changed 'title' to 'songName'
  const existing = await prisma.nowPlaying.findFirst();

  const updated = await prisma.nowPlaying.update({
    where: { id: existing!.id },
    data,
  });

  return updated;
}
