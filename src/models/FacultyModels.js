import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
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
const Faculty = mongoose.model("Facality", FacultySchema);
export default Faculty;
