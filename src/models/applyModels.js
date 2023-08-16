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
    stAge: {
      type: String,
      require: false,
    },
    // Background
    prevSchool: {
      type: String,
      require: true,
    },
    prevGradeClass: {
      type: String,
      require: true,
    },
    currentGradeClass: {
      type: String,
      require: false,
    },
    // Schooladdress
    country: {
      type: String,
      require: true,
    },
    province: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    cityState: {
      type: String,
      require: true,
    },
    schoolPhone: {
      type: String,
      require: true,
    },
    schoolMail: {
      type: String,
      require: false,
    },
    reasons: {
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
