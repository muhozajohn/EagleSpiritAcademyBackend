import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    newsImage: {
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

const news = mongoose.model("news", newsSchema);
export default news;
