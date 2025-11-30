import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import Event from "../models/EventModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("Event with ID")) {
          throw new NotFoundError(errorMessages.join(", "));
        }
        if (errorMessages[0].startsWith("You do not have permission")) {
          throw new UnauthorizedError(errorMessages.join(", "));
        }
        throw new BadRequestError(errorMessages.join(", "));
      }
      next();
    },
  ];
};

export const validateCreateOrUpdateEvent = withValidationErrors([
  body("title").notEmpty().withMessage("Title is required"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 300 })
    .withMessage("Description must be less than 300 characters"),
  body("location").notEmpty().withMessage("Location is required"),
  body("startDate").notEmpty().withMessage("Start date is required"),
  body("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .custom((value, { req }) => {
      const start = new Date(req.body.startDate);
      const end = new Date(value);
      if (start >= end) {
        throw new Error("End date must be after start date");
      }
      return true;
    }),
  body("startTime").notEmpty().withMessage("Start time is required"),
  body("endTime")
    .notEmpty()
    .withMessage("End time is required")
    .custom((endTime, { req }) => {
      if (endTime <= req.body.startTime) {
        throw new Error("End time must be after start time");
      }
      return true;
    }),
]);

export const validateEventIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) {
      throw new BadRequestError("Invalid MongoDB ID");
    }
    const event = await Event.findById(value);
    if (!event) {
      throw new NotFoundError(`Event with ID of ${value} not found`);
    }
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === event.createdBy.toString();
    console.log(event.createdBy.toString());
    if (!isAdmin && !isOwner) {
      throw new UnauthorizedError(
        "You do not have permission to access this event"
      );
    }
  }),
]);

export const validateRegisterUser = withValidationErrors([
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new BadRequestError("Email already in use");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
]);

export const validateLoginUser = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateAttendee = withValidationErrors([
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) {
      throw new BadRequestError("Invalid MongoDB ID");
    }
    const event = await Event.findById(value);
    if (!event) {
      throw new NotFoundError(`Event with ID of ${value} not found`);
    }
  }),
]);
