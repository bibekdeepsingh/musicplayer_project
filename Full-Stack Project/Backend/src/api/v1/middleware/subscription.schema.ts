import { z } from "zod";

export const subscriptionSchema = z.object({
  email: z.string().email(),
  active: z.boolean().optional(),
});

export type SubscriptionInput = z.infer<typeof subscriptionSchema>;
