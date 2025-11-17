import type { Request, Response } from "express";
import * as subscriptionService from "../services/subscription.service";

export const createSubscription = async (req: Request, res: Response) => {
  const result = await subscriptionService.create(req.body);
  res.json(result);
};

export const getSubscriptions = async (req: Request, res: Response) => {
  const result = await subscriptionService.getAll();
  res.json(result);
};
