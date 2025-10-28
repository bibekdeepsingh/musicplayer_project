import { useEffect, useState } from "react";
import { subscriptionRepo, type Subscription } from "../repo/SubscriptionRepository";

export function useSubscriptionManager() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  // Load subscriptions once
  useEffect(() => {
    setSubscriptions(subscriptionRepo.all());
  }, []);

  function addSubscription(plan: string, price: number) {
    const updated = subscriptionRepo.add(plan, price);
    setSubscriptions(updated);
  }

  function removeSubscription(id: number) {
    const updated = subscriptionRepo.remove(id);
    setSubscriptions(updated);
  }

  function toggleStatus(id: number) {
    const sub = subscriptions.find(s => s.id === id);
    if (!sub) return;
    const newStatus = sub.status === "active" ? "inactive" : "active";
    const updated = subscriptionRepo.updateStatus(id, newStatus);
    setSubscriptions(updated);
  }

  return { subscriptions, addSubscription, removeSubscription, toggleStatus };
}
