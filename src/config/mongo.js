import mongoose from "mongoose";

const connection = async () => {
  try {
    const connectionUrl = process.env.MONGO_URl;
    mongoose.connect(connectionUrl);
  } catch (error) {
    console.log("something went wrong");
    return;
  }
};

export default connection;
