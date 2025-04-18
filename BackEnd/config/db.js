const moongoose = require("mongoose");
require("dotenv").config()



const connectDB = async () => {
    try {
        await moongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas Connected...");
    } catch (err) {
        console.log("Error in Connecting to MongoDB Atlas",err.message);
    }
}

module.exports = connectDB;