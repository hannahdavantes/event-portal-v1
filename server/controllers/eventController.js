import Event from "../models/EventModel.js";
import { NotFoundError } from "../errors/customErrors.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import { StatusCodes } from "http-status-codes";
import { sendEmail } from "../utils/sendEmail.js";

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
  const newEvent = { ...req.body };

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newEvent.image = response.secure_url;
    newEvent.imagePublicId = response.public_id;
  }

  const event = await Event.findByIdAndUpdate(id, newEvent);
  if (req.file && event.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
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

import eventEmitter from "../eventEmitter/eventEmitter.js";

export const addAttendee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  const event = await Event.findById(id);
  if (!event) {
    throw new NotFoundError(`Event with ID of ${id} not found`);
  }

  event.attendees.push({ firstName, lastName, email });
  await event.save();

  eventEmitter.emit("confirmEventRegistration", {
    firstName,
    lastName,
    email,
    event,
  });

  res
    .status(StatusCodes.OK)
    .json({ msg: "Attendee added & confirmation email send!" });
};

export const notifyAttendees = async (req, res) => {
  const { id } = req.params;

  const event = await Event.findById(id);
  if (!event) {
    throw new NotFoundError(`Event with ID of ${id} not found`);
  }

  if (!event.attendees || event.attendees.length === 0) {
    throw new NotFoundError(`No attendees to notify`);
  }

  eventEmitter.emit("notifyAttendees", { event });

  return res
    .status(StatusCodes.OK)
    .json({ msg: "Email notifications sent to the attendees" });
};
