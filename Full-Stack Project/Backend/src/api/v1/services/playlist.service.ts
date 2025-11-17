import { prisma } from "../../../../prisma/prismaClient";

export const playlistService = {
  getAll() {
    return prisma.playlist.findMany();
  },

  create(name: string) {
    return prisma.playlist.create({
      data: { name, songCount: 0 }
    });
  },

  remove(id: string) {
    return prisma.playlist.delete({ where: { id } });
  }
};
