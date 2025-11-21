import { prisma } from "../../../lib/prisma";
 
 
const TEMP_USER_ID = "temp-user-id";
 
export const playlistService = {
  getAll() {
   
    return prisma.playlist.findMany();
  },
 
  async create(name: string) {
   
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
        userId: TEMP_USER_ID  
      }
    });
  },
 
  remove(id: string) {
    return prisma.playlist.delete({ where: { id } });
  }
};