import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  getAllEventsByUser,
} from "../controllers/eventsController.js";

import {
  validateCreateOrUpdateEvent,
  validateEventIdParam,
  validateUserIdParam,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.get("/", getAllEvents);
router.get("/user/:id", validateUserIdParam, getAllEventsByUser);
router.post("/", validateCreateOrUpdateEvent, createEvent);
router.put(
  "/:id",
  validateCreateOrUpdateEvent,
  validateEventIdParam,
  updateEvent
);
router.get("/:id", validateEventIdParam, getEventById);
router.delete("/:id", validateEventIdParam, deleteEvent);

export default router;
