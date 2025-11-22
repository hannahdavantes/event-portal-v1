import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
} from "../controllers/eventController.js";

import {
  validateCreateOrUpdateEvent,
  validateEventIdParam,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.get("/", getAllEvents);
router.get("/:id", validateEventIdParam, getEventById);
router.post("/", validateCreateOrUpdateEvent, createEvent);
router.put(
  "/:id",
  validateCreateOrUpdateEvent,
  validateEventIdParam,
  updateEvent
);
router.delete("/:id", validateEventIdParam, deleteEvent);

export default router;
