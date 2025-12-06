import { prisma } from "../../../lib/prisma";

export const playlistService = {
  getAll(userId: string | null | undefined) {
    if (!userId) return [];
    return prisma.playlist.findMany({
      where: { userId }
    });
  },

  async create(userId: string | null | undefined, name: string) {
    if (!userId) return null;

    return prisma.playlist.create({
      data: {
        name,
        songCount: 0,
        userId
      }
    });
  },

  async remove(userId: string | null | undefined, id: string) {
    if (!userId) return null;

    const playlist = await prisma.playlist.findUnique({
      where: { id }
    });

    if (!playlist || playlist.userId !== userId) return null;

    return prisma.playlist.delete({
      where: { id }
    });
  }
};
