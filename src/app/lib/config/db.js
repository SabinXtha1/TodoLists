import mongoose from "mongoose";

export const connectDB =()=>{
    try{

        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 20000, // 20 seconds
            socketTimeoutMS: 45000, // 45 seconds
          })
    }catch{
        console.log("Error connecting to database")
    }
}