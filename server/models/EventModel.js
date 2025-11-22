import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    startDate: Date,
    endDate: Date,
    startTime: String,
    endTime: String,
    image: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
