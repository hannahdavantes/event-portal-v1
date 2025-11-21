import Event from "../models/Event.js";
import { StatusCodes } from "http-status-codes";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json(event);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(StatusCodes.OK).json(events);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    if (!event) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Event not found" });
    }
    res.status(StatusCodes.OK).json(event);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!event) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Event not found" });
    }
    res.status(StatusCodes.OK).json(event);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Event not found" });
    }
    res.status(StatusCodes.OK).json(event);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
