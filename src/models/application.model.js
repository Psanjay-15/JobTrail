import mongoose, { Schema } from "mongoose";
const applicationSchema = new Schema(
  {
    userId: {
      type: String,
    },
    jobposition: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
      possibleValues: ["Applied", "Interviewed", "Pending", "Completed"],
    },
    applicationlink: {
      type: String,
    },
    salary: {
      type: String,
    },
    date: {
      type: Date,
      // required: true,
      default: Date.now,
    },
  },
  { timeseries: true }
);
export const Application = mongoose.model("Application", applicationSchema);
