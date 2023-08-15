import mongoose from "mongoose";
const beforeApplySchemma = new mongoose.Schema(
  {
    field: {
      type: String,
      require: true,
    },
    field2: {
      type: String,
      require,
    },
    field3: {
      type: String,
      require: true,
    },
    field4: {
      type: String,
      require: true,
    },
    field: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const beforeApply = mongoose.model("beforeApply", beforeApplySchemma);
export default beforeApply;


