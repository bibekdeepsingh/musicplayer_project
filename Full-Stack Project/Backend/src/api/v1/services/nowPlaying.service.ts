import prisma from "../../../prisma/client";


export async function getNowPlayingService() {
  let record = await prisma.nowPlaying.findFirst();

  if (!record) {
    record = await prisma.nowPlaying.create({
      data: {
        title: "No Song Playing",
        artist: "Unknown Artist",
      },
    });
  }

  return record;
}

export async function updateNowPlayingService(data: { title: string; artist: string }) {
  const existing = await prisma.nowPlaying.findFirst();

  const updated = await prisma.nowPlaying.update({
    where: { id: existing!.id },
    data,
  });

  return updated;
}
