const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: "Backend/config/config.env" });

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDatabase;
