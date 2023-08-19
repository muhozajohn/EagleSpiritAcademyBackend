import mongoose from "mongoose";
const welcomeSchema = new mongoose.Schema(
  {
    field1: {
      type: String,
      required: true,
    },
    field2: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const welcome = mongoose.model("welcome", welcomeSchema);
export default welcome;
