import type { Request, Response } from "express";
import { subscriptionService } from "../services/subscription.service";

export const createSubscription = async (req: Request, res: Response) => {
  const userId = req.auth?.userId;
  const { service, planType, price } = req.body;
  const sub = await subscriptionService.create(userId, service, planType, price);
  res.json(sub);
};

export const getSubscriptions = async (req: Request, res: Response) => {
  const userId = req.auth?.userId;
  const subs = await subscriptionService.getAll(userId);
  res.json(subs);
};

export const deleteSubscription = async (req: Request, res: Response) => {
  const userId = req.auth?.userId;
  await subscriptionService.remove(userId, req.params.id);
  res.json({ message: "Deleted" });
};

export const updateSubscription = async (req: Request, res: Response) => {
  const userId = req.auth?.userId;
  const updated = await subscriptionService.update(userId, req.params.id, req.body.planType);
  res.json(updated);
};
