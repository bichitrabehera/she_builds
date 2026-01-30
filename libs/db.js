import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/shebuilds";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectDB;
