const mongoose=require("mongoose")
const colors=require("colors")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected `.green.inverse)
    }
    catch(error){
        console.log(`Message Error: ${error}`.bgRed.white)
    }
}
module.exports=connectDB