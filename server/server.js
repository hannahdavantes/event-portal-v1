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
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Routes
app.use("/api/v1/events", eventRouter);

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
