import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
  getAllEventsByLoggedInUser,
  addAttendee,
} from "../controllers/eventController.js";

import {
  validateAttendee,
  validateCreateOrUpdateEvent,
  validateEventIdParam,
} from "../middlewares/validationMiddleware.js";

import { authenticateUser } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multerMiddleware.js";

const router = Router();

router.get("/all", getAllEvents);
router.get("/myEvents", authenticateUser, getAllEventsByLoggedInUser);
router.get("/:id", authenticateUser, validateEventIdParam, getEventById);
router.post("/", authenticateUser, validateCreateOrUpdateEvent, createEvent);
router.patch(
  "/:id",
  authenticateUser,
  upload.single("image"),
  validateCreateOrUpdateEvent,
  validateEventIdParam,
  updateEvent
);
router.delete("/:id", authenticateUser, validateEventIdParam, deleteEvent);

router.post("/:id/attendees", validateAttendee, addAttendee);

export default router;
