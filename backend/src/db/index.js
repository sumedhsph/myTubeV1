import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

//process 2
dotenv.config({
  path: "./.env",
});

const dbUrl = process.env.MONGODB_URI;
//console.log(dbUrl)

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
       // `mongodb+srv://tanisha:Tanisha%4087@cluster0.yxdhs78.mongodb.net`
        );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
