import { subscriptionRepo } from "../repo/SubscriptionRepository";

export const subscriptionService = {
  async fetchAll() {
    return new Promise(resolve => {
      setTimeout(() => resolve(subscriptionRepo.all()), 300);
    });
  },
  async add(plan: string, price: number) {
    return new Promise(resolve => {
      setTimeout(() => resolve(subscriptionRepo.add(plan, price)), 300);
    });
  },
  async remove(id: number) {
    return new Promise(resolve => {
      setTimeout(() => resolve(subscriptionRepo.remove(id)), 300);
    });
  },
  async toggleStatus(id: number) {
    return new Promise(resolve => {
      const data = subscriptionRepo.all();
      const sub = data.find(s => s.id === id);
      if (!sub) return resolve(data);
      const newStatus = sub.status === "active" ? "inactive" : "active";
      setTimeout(() => resolve(subscriptionRepo.updateStatus(id, newStatus)), 300);
    });
  },
};
