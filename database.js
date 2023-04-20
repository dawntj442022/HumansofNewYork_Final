const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./server/config.env" }); // update path to .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
