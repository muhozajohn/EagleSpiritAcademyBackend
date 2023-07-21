import mongoose, { Schema } from "mongoose";

const councilSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  councilImage: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

const council = mongoose.model("Council", councilSchema);

export default council;
