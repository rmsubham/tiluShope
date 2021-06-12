import mongoose from "mongoose";
import {config} from "./config"

const mongoConnect = async () =>{
     const databaseUrl = `mongodb+srv://${config.mongoDB.user}:${config.mongoDB.pass}@${config.mongoDB.host}/${config.mongoDB.db}`;
    //const uri = `mongodb+srv://monu01:CiWLKsSXYmEneCVJ@todocluster.qdjnh.mongodb.net/todotilushopelist?retryWrites=true&w=majority&ssl=true`


    const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  };
    try{
    await mongoose.connect(databaseUrl, options);
     console.log('tiludata base is ready');
    }catch(e){
     console.log('database connection error');
    }
}

export { mongoConnect as connectDatabase };
export default mongoose;
