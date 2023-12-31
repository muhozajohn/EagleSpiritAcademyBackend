import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: false,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    userProfile: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: false,
      default: "admin",
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("Users", userSchema);
export default users;
