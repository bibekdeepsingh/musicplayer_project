import { Router } from "express";
import { validate } from "../middleware/validate";
import { subscriptionSchema } from "../middleware/subscription.schema";
import { createSubscription, getSubscriptions } from "../controllers/subscription.controller";

const router = Router();

router.post("/", validate(subscriptionSchema), createSubscription);
router.get("/", getSubscriptions);

export default router;
