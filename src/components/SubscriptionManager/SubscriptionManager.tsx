import "./SubscriptionManager.css";
import { useState } from "react";
import type { Subscription } from "../types/SubscriptionData";

export function SubscriptionManager() {
  const subscriptions: Subscription[] = [
    { id: 101, service: "Spotify Premium", planType: "Monthly", price: 9.99 },
    { id: 102, service: "Apple Music", planType: "Student", price: 4.99 },
    { id: 103, service: "YouTube Music", planType: "Family", price: 14.99 },
  ];

  const [activeSubs, setActiveSubs] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    if (activeSubs.includes(id)) {
      setActiveSubs(activeSubs.filter((subId) => subId !== id));
    } else {
      setActiveSubs([...activeSubs, id]);
    }
  };

  return (
    <section className="subscription-manager">
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptions.map((sub) => {
          const isActive = activeSubs.includes(sub.id);
          return (
            <li key={sub.id} className="subscription-item">
              <div className="subscription-info">
                <span className="subscription-name">{sub.service}</span>
                <span className="subscription-plan">{sub.planType} plan</span>
              </div>
              <div className="subscription-details">
                <span className="subscription-price">
                  ${sub.price.toFixed(2)}/month
                </span>
                <button
                  className={isActive ? "cancel-btn" : "subscribe-btn"}
                  onClick={() => handleToggle(sub.id)}
                >
                  {isActive ? "Cancel Subscription" : "Subscribe"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SubscriptionManager;
