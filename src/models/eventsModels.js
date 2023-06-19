import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    eventImage: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const event = mongoose.model("Events", eventSchema);
export default event;
