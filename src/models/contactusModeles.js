import mongoose from "mongoose";
const contactusSchemma = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require,
    },
    email: {
      type: String,
      require: true,
    },
    Tel: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const contactUs = mongoose.model("contactUs", contactusSchemma);
export default contactUs;
