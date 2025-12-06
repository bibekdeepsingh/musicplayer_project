import { prisma } from "../../../lib/prisma";

const TEMP_USER_ID = "temp-user-id";

export async function getNowPlayingService() {

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
        songName: "No Song Playing",  
        artist: "Unknown Artist",
        userId: TEMP_USER_ID
      },
    });
  }

  return record;
}

export async function updateNowPlayingService(data: { songName: string; artist: string }) {  
  const existing = await prisma.nowPlaying.findFirst();

  const updated = await prisma.nowPlaying.update({
    where: { id: existing!.id },
    data,
  });

  return updated;
}
