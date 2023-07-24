import mongoose from "mongoose";

const adimisionSchema = new mongoose.Schema(
  {
    before: {
      type: String,
    },
    deadline: {
      type: String,
    },
    programDesign: {
      type: String,
    },
    Acceleration: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Admimision = mongoose.model("Admission", adimisionSchema);
export default Admimision;
