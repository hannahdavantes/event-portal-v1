import { Router } from "express";
import { getAllEventsByLoggedInUser } from "../controllers/eventController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { getLoggedInUser } from "../controllers/userController.js";

const router = Router();

router.get("/me", authenticateUser, getLoggedInUser);
router.get("/myEvents", authenticateUser, getAllEventsByLoggedInUser);

export default router;
