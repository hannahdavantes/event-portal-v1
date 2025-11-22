import Event from "../models/Event.js";
import { NotFoundError } from "../errors/customErrors.js";

import { StatusCodes } from "http-status-codes";

export const createEvent = async (req, res) => {
  const event = await Event.create("");
  res.status(StatusCodes.CREATED).json(event);
};

export const getAllEvents = async (req, res) => {
  const events = await Event.find({});
  res.status(StatusCodes.OK).json(events);
};

export const getEventById = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    throw new NotFoundError(`Event with ID of ${id} not found`);
  }
  res.status(StatusCodes.OK).json(event);
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
  if (!event) {
    throw new NotFoundError(`Event with ID of ${id} not found`);
  }
  res.status(StatusCodes.OK).json(event);
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete(id);
  if (!event) {
    throw new NotFoundError(`Event with ID of ${id} not found`);
  }
  res.status(StatusCodes.OK).json(event);
};
