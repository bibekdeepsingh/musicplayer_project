import { z } from "zod";

export const subscriptionSchema = z.object({
  service: z.string().min(1),
  planType: z.string().min(1),
  price: z.number().positive()
});

export type SubscriptionInput = z.infer<typeof subscriptionSchema>;
