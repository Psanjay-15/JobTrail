import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  // console.log(process.env.MONGODB_URI);
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB connected!:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(error);
    console.log("DB not connect");
    process.exit(1);
  }
};

export default connectDB;
