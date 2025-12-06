import { prisma } from "../../../lib/prisma";

export async function getNowPlayingService(userId: string | null | undefined) {
  if (!userId) return null;

  let record = await prisma.nowPlaying.findFirst({
    where: { userId }
  });

  if (!record) {
    record = await prisma.nowPlaying.create({
      data: {
        songName: "No Song Playing",
        artist: "Unknown Artist",
        userId
      }
    });
  }

  return record;
}

export async function updateNowPlayingService(
  userId: string | null | undefined,
  data: { songName: string; artist: string }
) {
  if (!userId) return null;

  const existing = await prisma.nowPlaying.findFirst({
    where: { userId }
  });

  if (!existing) {
    return prisma.nowPlaying.create({
      data: { ...data, userId }
    });
  }

  return prisma.nowPlaying.update({
    where: { id: existing.id },
    data
  });
}
