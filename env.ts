//import { Console } from "console";
import dotenv from "dotenv";


dotenv.config({
 path:`.env.${process.env.NODE_ENV || "TEST"}`
});


console.log(`using enverment : ${process.env.NODE_ENV}`);
