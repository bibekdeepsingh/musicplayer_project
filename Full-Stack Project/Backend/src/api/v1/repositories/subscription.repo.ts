import { prisma } from "../../../lib/prisma";
import type { SubscriptionInput } from "../middleware/subscription.schema";

export const create = (userId: string, data: SubscriptionInput) => {
  return prisma.subscription.create({
    data: {
      service: data.service,
      planType: data.planType,
      price: data.price,
      userId,
    }
  });
};

export const getAll = (userId: string) => {
  return prisma.subscription.findMany({
    where: { userId }
  });
};
