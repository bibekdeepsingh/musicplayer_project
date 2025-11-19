import { useEffect, useState } from "react";
import type { Subscription } from "../repository/SubscriptionRepository";
import { subscriptionService } from "../services/SubscriptionService";

export function useSubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  useEffect(() => {
    async function load() {
      const data = await subscriptionService.fetchAll();
      setSubscriptions(data);
    }
    load();
  }, []);

  async function addSubscription(service: string, planType: string, price: number) {
    const newSub = await subscriptionService.add(service, planType, price);
    setSubscriptions((prev) => [...prev, newSub]);
  }

  async function removeSubscription(id: string) {
    await subscriptionService.remove(id);
    setSubscriptions((prev) => prev.filter((sub) => sub.id !== id));
  }

  async function updatePlan(id: string, planType: string) {
    const updated = await subscriptionService.updatePlan(id, planType);
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.id === id ? updated : sub))
    );
  }

  return {
    subscriptions,
    addSubscription,
    removeSubscription,
    updatePlan
  };
}
