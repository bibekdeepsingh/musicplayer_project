import "./SubscriptionManager.css";
import type { Subscription } from "../data/SubscriptionData";

const subscriptions: Subscription[] = [
  { id: 101, service: "Spotify Premium", planType: "Monthly", price: 9.99 },
  { id: 102, service: "Apple Music", planType: "Student", price: 4.99 },
  { id: 103, service: "YouTube Music", planType: "Family", price: 14.99 },
];

function SubscriptionItem({ sub }: { sub: Subscription }) {
  return (
    <li className="subscription-item">
      <div className="subscription-info">
        <span className="subscription-name">{sub.service}</span>
        <span className="subscription-plan">{sub.planType} plan</span>
      </div>
      <div className="subscription-details">
        <span className="subscription-price">${sub.price.toFixed(2)}/month</span>
      </div>
    </li>
  );
}

export function SubscriptionManager() {
  return (
    <section className="subscription-manager">
      <h2>My Subscriptions</h2>
      <ul>
        {subscriptions.map((item) => (
          <SubscriptionItem key={item.id} sub={item} />
        ))}
      </ul>
    </section>
  );
}

export default SubscriptionManager;
