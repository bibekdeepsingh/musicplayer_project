export interface Subscription {
  id: string;
  service: string;
  planType: string;
  price: number;
  createdAt?: string;
}

const BASE_URL = "http://localhost:3000/api/v1/subscriptions";

export const subscriptionRepo = {
  async all(): Promise<Subscription[]> {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("Failed to load subscriptions");
    }
    return res.json();
  },

  async add(service: string, planType: string, price: number): Promise<Subscription> {
    const payload = { service, planType, price };

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create subscription");
    }

    return res.json();
  },

  async remove(id: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete subscription");
    }
  }
};
