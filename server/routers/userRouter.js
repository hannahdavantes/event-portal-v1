import { Router } from "express";
import { getAllEventsByLoggedInUser } from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/myEvents", authenticateUser, getAllEventsByLoggedInUser);

export default router;
