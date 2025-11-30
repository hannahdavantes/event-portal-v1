import Event from "../models/EventModel.js";
import { NotFoundError } from "../errors/customErrors.js";

import { StatusCodes } from "http-status-codes";

export const getAllEvents = async (req, res) => {
  const events = await Event.find({});
  res.status(StatusCodes.OK).json(events);
};

export const getAllEventsByLoggedInUser = async (req, res) => {
  const { userId } = req.user;
  const events = await Event.find({ createdBy: userId });
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

export const createEvent = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const event = await Event.create(req.body);
  res.status(StatusCodes.CREATED).json(event);
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  console.log(req.file);
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

export const addAttendee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ msg: `Event with ID of ${id} not found` });
  }

  event.attendees.push({ firstName, lastName, email });
  await event.save();

  res.status(200).json({ msg: "Attendee added" });
};
