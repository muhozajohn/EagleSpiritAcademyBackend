import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  Gallery: {
    type: String,
    require: true,
  },
});

const gallery = mongoose.model("GalleryAlbum", gallerySchema);
export default gallery;
