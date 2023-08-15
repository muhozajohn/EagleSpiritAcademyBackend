import mongoose from "mongoose";
const AfterApplySchema = new mongoose.Schema(
  {
    field: {
      type: String,
      require: false,
      default:
        "If you haven't already completed your admissions interview, that will be your next step. An admissions representative will reach out to schedule an interview at a convenient time for you.",
    },
    field2: {
      type: String,
      require,
      default:
        "If you have completed your interview, your enrollment guide will reach out to finalize your application and gather additional information.",
    },
    field3: {
      type: String,
      require: true,
      default:
        "You will also receive an email that gives you access to our Full Sail One platform, where you'll be able to submit documentation and complete the final steps for enrollment.",
    },
    field4: {
      type: String,
      require: true,
      default:
        "Throughout this process, if you have any questions or run into any issues, your enrollment guide can be reached at 0788308647/0788845020",
    },
  },
  {
    timestamps: true,
  }
);

const AfterApply = mongoose.model("AfterApply", AfterApplySchema);
export default AfterApply;
