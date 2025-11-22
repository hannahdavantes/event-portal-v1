import { StatusCodes } from "http-status-codes";
import Event from "../models/EventModel.js";

export const getAllEventsByLoggedInUser = async (req, res) => {
  const { userId } = req.user;
  const events = await Event.find({ createdBy: userId });
  res.status(StatusCodes.OK).json(events);
};
