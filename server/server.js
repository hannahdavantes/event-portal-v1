import "express-async-errors";
import { StatusCodes } from "http-status-codes";

//Routers
import eventRouter from "./routers/eventRouter.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";

//Middlewares
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

//.env file configuration
import * as dotenv from "dotenv";
dotenv.config();

//Object Document Mapper for MongoDB
import mongoose from "mongoose";

//ExpressJS
import express from "express";
const app = express();
app.use(express.json());

//Cookie parse
import cookieParser from "cookie-parser";
app.use(cookieParser());

//Morgan - HTTP request logger
import morgan from "morgan";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Routes
// app.use("/api/v1/events", authenticateUser, eventRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

//Error middleware
app.use(errorHandlerMiddleware);

//404 NOT FOUND error middleware
app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ error: "Invalid route" });
});

//500 SERVER ERROR error middleware
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: "Something went wrong" });
});

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log("===========================");
    console.log(`Server running on PORT ${port}`);
    console.log("===========================");
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
