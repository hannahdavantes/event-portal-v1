import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
} from "../controllers/eventsController.js";

import {
  validateCreateOrUpdateEvent,
  validateIdParam,
} from "../middlewares/validationMiddleware.js";

const router = Router();

router.post("/", validateCreateOrUpdateEvent, createEvent);
router.get("/", getAllEvents);
router.put("/:id", validateCreateOrUpdateEvent, validateIdParam, updateEvent);
router.get("/:id", validateIdParam, getEventById);
router.delete("/:id", validateIdParam, deleteEvent);

export default router;
