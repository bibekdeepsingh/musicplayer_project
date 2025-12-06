import { Router } from "express";
import { createSubscription, getSubscriptions } from "../controllers/subscription.controller";
import { validate } from "../middleware/validate";
import { subscriptionSchema } from "../middleware/subscription.schema";

const router = Router();

router.post("/", validate(subscriptionSchema), createSubscription);
router.get("/", getSubscriptions);

export default router;
