import { requireAuth } from "@clerk/express";

export const authRequired = requireAuth();
