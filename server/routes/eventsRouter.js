import { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  deleteEvent,
  updateEvent,
} from "../controllers/eventsController.js";

const router = Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.put("/:id", updateEvent);
router.get("/:id", getEventById);
router.delete("/:id", deleteEvent);

export default router;
