import dotenv from "dotenv";
import mongoose from "mongoose";

const connectdb = async () => {};
try {
  const url = dotenv.config().parsed.DB_url;
  const res = await mongoose.connect(url);
  console.log(`Connected to MongoDB:${url}`);
} catch (error) {
  console.log(`Error connecting : ${error.message}`);
}

export default connectdb;
