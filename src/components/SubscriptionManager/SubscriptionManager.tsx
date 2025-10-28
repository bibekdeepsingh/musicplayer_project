import "./SubscriptionManager.css";
import { useState, useEffect } from "react";
import type { Subscription } from "../../types/SubscriptionData";
import { testSubscriptions } from "../../data/SubscriptionData";

export function SubscriptionManager() {
  const [subs, setSubs] = useState<Subscription[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("subscriptions");
    setSubs(saved ? JSON.parse(saved) : testSubscriptions);
  }, []);

  const save = (data: Subscription[]) => {
    setSubs(data);
    localStorage.setItem("subscriptions", JSON.stringify(data));
  };

  const toggle = (id: string) => {
    const updated = subs.map((s) =>
      s.id === id ? { ...s, isActive: !s.isActive } : s
    );
    save(updated);
  };

  return (
    <section className="subscription-manager">
      <h2>My Subscriptions</h2>
      <ul>
        {subs.map((s) => (
          <li key={s.id} className="subscription-item">
            <div className="subscription-info">
              <span className="subscription-name">{s.name}</span>
              <span className="subscription-plan">{s.plan}</span>
              <span className="subscription-validity">
                Valid till: {new Date(s.validity).toLocaleDateString()}
              </span>
            </div>
            <div className="subscription-details">
              <span className="subscription-price">
                ${s.price.toFixed(2)}/month
              </span>
              <button
                className={s.isActive ? "cancel-btn" : "subscribe-btn"}
                onClick={() => toggle(s.id)}
              >
                {s.isActive ? "Cancel Subscription" : "Subscribe"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SubscriptionManager;
