import { prisma } from "../../../lib/prisma";

export const create = (data: any) => {
  return prisma.subscription.create({ data });
};

export const getAll = () => {
  return prisma.subscription.findMany();
};