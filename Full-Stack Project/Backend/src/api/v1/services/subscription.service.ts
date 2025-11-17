import * as subscriptionRepo from "../repositories/subscription.repo";
import type { SubscriptionInput } from "../middleware/subscription.schema";

export const create = (data: SubscriptionInput) => {
  return subscriptionRepo.create(data);
};

export const getAll = () => {
  return subscriptionRepo.getAll();
};
