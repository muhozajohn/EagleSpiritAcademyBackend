import mongoose from "mongoose";

const facilitiesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    facImage: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const facilitiesModel = mongoose.model("Facilities", facilitiesSchema);
export default facilitiesModel;
