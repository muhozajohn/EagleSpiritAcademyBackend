import mongoose from "mongoose";
const mvcSchema = new mongoose.Schema(
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

const mvc = mongoose.model("mvc", mvcSchema);
export default mvc;
