import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error(error);
    // Corrected from console.log(err)
  }
};

export default connectMongoDB;
