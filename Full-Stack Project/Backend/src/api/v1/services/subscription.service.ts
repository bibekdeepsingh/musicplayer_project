import { prisma } from "../../../lib/prisma";

export const subscriptionService = {
  getAll(userId: string | null | undefined) {
    if (!userId) return [];
    return prisma.subscription.findMany({
      where: { userId }
    });
  },

  async create(
    userId: string | null | undefined,
    service: string,
    planType: string,
    price: number
  ) {
    if (!userId) return null;

    return prisma.subscription.create({
      data: {
        service,
        planType,
        price,
        userId
      }
    });
  },

  async remove(userId: string | null | undefined, id: string) {
    if (!userId) return null;

    const subscription = await prisma.subscription.findUnique({
      where: { id }
    });

    if (!subscription || subscription.userId !== userId) return null;

    return prisma.subscription.delete({
      where: { id }
    });
  },

  async update(userId: string | null | undefined, id: string, planType: string) {
    if (!userId) return null;

    const subscription = await prisma.subscription.findUnique({
      where: { id }
    });

    if (!subscription || subscription.userId !== userId) return null;

    return prisma.subscription.update({
      where: { id },
      data: { planType }
    });
  }
};
