//import dotenv from "dotenv"
import express from "express";
import { format } from "path/posix";
import {config} from "./config/config"
import {connectDatabase} from "./config"



const port = process.env.PORT; 
const app = express()


app.get("/", async (req,res) =>{
    res.status(200).send({masaze : "this is from app side route"})
});


app.listen(port, ( )=> {
 console.log(`server is running `)
});
connectDatabase();



