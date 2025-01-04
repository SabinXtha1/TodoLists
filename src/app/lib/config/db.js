import mongoose from "mongoose";

export const connectDB =()=>{
    try{

        mongoose.connect(process.env.MONGO_URI)
    }catch{
        console.log("Error connecting to database")
    }
}