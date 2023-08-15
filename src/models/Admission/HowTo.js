import mongoose from "mongoose";
const howToApplySchemma = new mongoose.Schema(
  {
    field: {
      type: String,
      require: false,
      default:
        "If you've spoken to an admissions representative and completed your interview, and you're ready to begin the application process, there are several items you'll need to have ready:",
    },
    field2: {
      type: String,
      require,
      default:
        "A government-issued photo identification such as a driver's license, passport, or state-issued ID card.",
    },
    field3: {
      type: String,
      require: true,
      default:
        "Verification of English proficiency if English is not your primary language (all required documentation that is not in English must be accompanied by a certified English translation). Click here to view ",
    },
    field4: {
      type: String,
      require: true,
      default:
        "Once you have these items, you're ready to begin the online application. Completing your application will take 30-45 minutes, and you can save your application if you run out of time or need",
    },
  },
  {
    timestamps: true,
  }
);

const howToApply = mongoose.model("howToApply", howToApplySchemma);
export default howToApply;
