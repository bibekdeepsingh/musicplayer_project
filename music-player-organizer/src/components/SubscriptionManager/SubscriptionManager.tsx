import React from "react";
import "./SubscriptionManager.css";

type Subscription = {
  id: number;
  service: string;
  planType: string;
};

const subscriptionsData: Subscription[] = [
  { id: 101, service: "Spotify Premium", planType: "Monthly" },
  { id: 102, service: "Apple Music", planType: "Student" },
  { id: 103, service: "YouTube Music", planType: "Family" },
];

const SubscriptionItem: React.FC<{ sub: Subscription }> = ({ sub }) => (
  <li className="subscription-item">
    <span className="subscription-name">{sub.service}</span>
    <span className="subscription-plan">{sub.planType} plan</span>
  </li>
);

const SubscriptionManager: React.FC = () => {
  return (
    <section className="subscription-manager">
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptionsData.map((item) => (
          <SubscriptionItem key={item.id} sub={item} />
        ))}
      </ul>
    </section>
  );
};

export default SubscriptionManager;
