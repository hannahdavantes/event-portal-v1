import { StatusCodes } from "http-status-codes";

import User from "../models/UserModel.js";
import Event from "../models/EventModel.js";

export const getLoggedInUser = async (req, res) => {
  const user = User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ userId, name, email });
};
