import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in environment variables");
  }

  await mongoose.connect(mongoUrl);
  return mongoose;
};

export default connectDB;
