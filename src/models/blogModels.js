import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    blogImage: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("blogs", blogSchema);
export default blog;
