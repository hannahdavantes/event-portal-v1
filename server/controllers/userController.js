import { StatusCodes } from "http-status-codes";

import User from "../models/UserModel.js";

export const getLoggedInUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json(user.toJSON());
};
