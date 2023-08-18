import mongoose from "mongoose";
const lifeSchemma = new mongoose.Schema(
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

const life = mongoose.model("life", lifeSchemma);
export default life;
