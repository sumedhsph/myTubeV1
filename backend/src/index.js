//import dotenv from "dotenv";
//import mongoose from "mongoose";
//import { DB_NAME } from "./constant";
import {app} from "./app.js"
import connectDB from "./db/index.js";

/* dotenv.config({
  path: "./env",
}); */

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });

//First approch with iffi
/* 
import express from "express";
const app = express();

;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error)=>{
        console.log(error)
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is running on port: ${process.env.PORT}`)
    })

  } catch (error) {
    console.log(error);
  }
})();
 */
