import { testSubscriptions } from "../data/SubscriptionData";

export interface Subscription {
  id: number;
  plan: string;
  price: number;
  status: "active" | "inactive";
  startDate: string;
}

const KEY = "subscriptions";

const SEED: Subscription[] = [
  { id: 1, plan: "Basic Plan", price: 5.99, status: "active", startDate: new Date().toISOString() },
  { id: 2, plan: "Premium Plan", price: 9.99, status: "inactive", startDate: new Date().toISOString() },
];

function read(): Subscription[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(SEED));
    return SEED;
  }
  try {
    return JSON.parse(raw) as Subscription[];
  } catch {
    return SEED;
  }
}

function write(data: Subscription[]) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export const subscriptionRepo = {
  all(): Subscription[] {
    return read();
  },

  add(plan: string, price: number): Subscription[] {
    const data = read();
    const next: Subscription = {
      id: data.length ? Math.max(...data.map(s => s.id)) + 1 : 1,
      plan: plan.trim(),
      price,
      status: "active",
      startDate: new Date().toISOString(),
    };
    const out = [...data, next];
    write(out);
    return out;
  },

  remove(id: number): Subscription[] {
    const out = read().filter(s => s.id !== id);
    write(out);
    return out;
  },

  updateStatus(id: number, status: "active" | "inactive"): Subscription[] {
    const data = read().map(s => (s.id === id ? { ...s, status } : s));
    write(data);
    return data;
  },
};
