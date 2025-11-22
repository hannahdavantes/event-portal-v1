import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import User from "../models/UserModel.js";
import { createJWT } from "../utils/jwtUtils.js";

export const registerUser = async (req, res) => {
  const userData = { ...req.body };
  delete userData.confirmPassword;

  //Check if it's the first user in database
  //The first user must be an admin
  const isFirstUser = (await User.countDocuments()) === 0;
  userData.role = isFirstUser ? "admin" : "user";

  //Create user
  const user = await User.create(userData);
  res
    .status(StatusCodes.CREATED)
    .json({ message: "User succesfully registered" });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid email or password");
  }

  const token = createJWT({ userId: user._id, role: user.role });

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ message: "User succesfully logged in" });
};
