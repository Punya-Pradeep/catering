const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Database connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;