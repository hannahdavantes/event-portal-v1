import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import Event from "../models/Event.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
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

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
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
