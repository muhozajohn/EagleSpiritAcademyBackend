import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
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
const Student = mongoose.model("Student", StudentSchema);
export default Student;
