import mongoose from "mongoose";

const attendeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
});

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
    attendees: [attendeeSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
