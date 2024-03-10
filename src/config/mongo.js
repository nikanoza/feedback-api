import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  try {
    const connectionUrl = process.env.MONGO_URL;
    mongoose.connect(connectionUrl);
  } catch (error) {
    console.log("something went wrong");
    return;
  }
};

export default connection;
