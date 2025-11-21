//Routers
import eventRouter from "./routes/eventsRouter.js";

//.env file configuration
import * as dotenv from "dotenv";
dotenv.config();

//Object Document Mapper for MongoDB
import mongoose from "mongoose";

//ExpressJS
import express from "express";
const app = express();
app.use(express.json());

//Morgan - HTTP request logger
import morgan from "morgan";
import { StatusCodes } from "http-status-codes";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Routes
app.use("/api/v1/events", eventRouter);

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
