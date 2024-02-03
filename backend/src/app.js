import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

//use cors
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//security practices
app.use(express.json({
    limit:"20kb",

}))
//encoder config to get data from url 
app.use(express.urlencoded({
    extended:true,
    limit:"20kb"
}))
//static config to store files (img, pdf etc)
app.use(express.static("public"))

//cookies parser 
app.use(cookieParser())



export {app}