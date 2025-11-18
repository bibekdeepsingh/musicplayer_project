// Updated to use backend API instead of localStorage (Sprint 4 requirement I.3)

export interface Subscription {
  id: string;  // Changed to string for UUID from backend
  service: string;  // Changed from 'plan' to match backend schema
  planType: string;
  price: number;
  createdAt?: string;  // Backend returns this
}

const BASE = "http://localhost:3000/api/v1/subscriptions";

export const subscriptionRepo = {
  async all(): Promise<Subscription[]> {
    const response = await fetch(BASE);
    if (!response.ok) throw new Error("Failed to load subscriptions");
    return response.json();
  },

  async add(service: string, planType: string, price: number): Promise<Subscription> {
    const response = await fetch(BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service, planType, price })
    });
    if (!response.ok) throw new Error("Failed to create subscription");
    return response.json();
  },

  async remove(id: string): Promise<void> {
    const response = await fetch(`${BASE}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Failed to delete subscription");
  },

  async updateStatus(id: string, planType: string): Promise<Subscription> {
    const response = await fetch(`${BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planType })
    });
    if (!response.ok) throw new Error("Failed to update subscription");
    return response.json();
  },
};
