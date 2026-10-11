const { default: mongoose } = require("mongoose");

const dbConfig = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`MongoDB Connected: ${connectDB.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = dbConfig;