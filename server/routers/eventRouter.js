import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  getAllEventsByLoggedInUser,
} from "../controllers/eventController.js";

import {
  validateCreateOrUpdateEvent,
  validateEventIdParam,
} from "../middlewares/validationMiddleware.js";

import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/all", getAllEvents);
router.get("/myEvents", authenticateUser, getAllEventsByLoggedInUser);
router.get("/:id", authenticateUser, validateEventIdParam, getEventById);
router.post("/", authenticateUser, validateCreateOrUpdateEvent, createEvent);
router.put(
  "/:id",
  validateCreateOrUpdateEvent,
  validateEventIdParam,
  updateEvent
);
router.delete("/:id", validateEventIdParam, deleteEvent);

export default router;
