import mongoose from "mongoose";

const applySchema = new mongoose.Schema(
  {
    // parent portal
    pname: {
      type: String,
      require: true,
    },
    pnumber: {
      type: String,
      require: true,
    },
    pmail: {
      type: String,
      require: true,
    },
    pnationality: {
      type: String,
      require: true,
    },
    pcity: {
      type: String,
      require: true,
    },
    pstate: {
      type: String,
      require: false,
    },
    //   Student
    stName: {
      type: String,
      require: true,
    },
    stMiddleName: {
      type: String,
      require: false,
    },
    stLname: {
      type: String,
      require: true,
    },
    stProfile: {
      type: String,
      require: false,
    },
    stGender: {
      type: String,
      require: true,
    },
    stBirth: {
      type: Date,
      require: true,
    },
    stMail: {
      type: String,
      require: false,
    },
    stNationality: {
      type: String,
      require: true,
    },
    stCity: {
      type: String,
      require: true,
    },
    stState: {
      type: String,
      require: false,
    },
    statusAp: {
      type: String,
      default: "progress",
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

const apply = mongoose.model("application", applySchema);
export default apply;
