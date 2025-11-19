import { prisma } from "../../../lib/prisma";

// TODO: Replace with actual authenticated user ID from session/token
const TEMP_USER_ID = "temp-user-id";

export const playlistService = {
  getAll() {
    // For now, get all playlists. Later, filter by authenticated user
    return prisma.playlist.findMany();
  },

  async create(name: string) {
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

    return prisma.playlist.create({
      data: { 
        name, 
        songCount: 0,
        userId: TEMP_USER_ID  // Required field!
      }
    });
  },

  remove(id: string) {
    return prisma.playlist.delete({ where: { id } });
  }
};
