import { subscriptionRepo } from "../repository/SubscriptionRepository";

export const subscriptionService = {
  async fetchAll() {
    return subscriptionRepo.all();
  },

  async add(service: string, planType: string, price: number) {
    return subscriptionRepo.add(service, planType, price);
  },

  async remove(id: string) {
    return subscriptionRepo.remove(id);
  },

  async updatePlan(id: string, planType: string) {
    return subscriptionRepo.updateStatus(id, planType);
  }
};
