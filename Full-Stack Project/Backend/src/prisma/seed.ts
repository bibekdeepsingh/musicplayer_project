import { prisma } from "../lib/prisma";

async function seed() {
  console.log("Seeding database...");

  const user = await prisma.user.upsert({
    where: { email: "temp@example.com" },
    update: {},
    create: {
      email: "temp@example.com",
      password: "temp-password",
    },
  });

  await prisma.nowPlaying.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      songName: "No Song Playing",
      artist: "Unknown Artist",
      userId: user.id,
    },
  });

  console.log("Seeding completed.");
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
