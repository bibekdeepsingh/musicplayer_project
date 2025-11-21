import { prisma } from "../../../lib/prisma";

const TEMP_USER_ID = "temp-user-id";

export async function getNowPlayingService() {
  let user = await prisma.user.findUnique({ where: { id: TEMP_USER_ID } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: TEMP_USER_ID,
        email: "temp@example.com",
        password: "temp-password",
      },
    });
  }

  let record = await prisma.nowPlaying.findFirst({
    where: { userId: TEMP_USER_ID }
  });

if (!record) {
  record = await prisma.nowPlaying.create({
    data: {
      songName: "Shape of You",
      artist: "Ed Sheeran",
      userId: TEMP_USER_ID
    }
  });
}

  return record;
}

export async function updateNowPlayingService(data: { songName: string; artist: string }) {
  const existing = await prisma.nowPlaying.findFirst({
    where: { userId: TEMP_USER_ID }
  });

  if (existing) {
    return prisma.nowPlaying.update({
      where: { id: existing.id },
      data
    });
  }

  return prisma.nowPlaying.create({
    data: {
      songName: data.songName,
      artist: data.artist,
      userId: TEMP_USER_ID
    }
  });
}
