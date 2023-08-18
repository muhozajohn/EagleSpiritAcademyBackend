import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    field1: {
      type: String,
      required: true,
    },
    field2: {
      type: String,
      required: true,
    },
    field3: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Parent = mongoose.model("Parent", parentSchema);

export default Parent;
