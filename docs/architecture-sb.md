Architecture Document — Smilepreet Kaur (SK)

Feature: Subscriptions
Sprint: 3
Project: Music Player Organizer

This document explains the architectural design decisions made for the Subscription feature, including the custom hook, service, and repository. These follow the Hook → Service → Repository pattern to maintain clean separation of concerns, readability, and scalability across the project.

- What does this hook do?
The useSubscription hook manages all UI logic related to user subscriptions.
It:
Loads subscription details from localStorage.
Tracks the user’s current plan and renewal status.
Provides functions to update or cancel a plan.
Persists updated data across sessions.

- How was logic separated?
The hook only handles presentation and state logic:
No API calls or backend operations (handled by the service).
No data storage logic beyond localStorage.
Keeps UI components clean and focused.

Where is it used?
The hook is used in:
src/components/SubscriptionPage/SubscriptionPage.tsx
src/components/Dashboard/Dashboard.tsx