import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

export const ConnectMongoose = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@finalpollingapi.ww1t47b.mongodb.net/?retryWrites=true&w=majority&appName=FinalPollingApi`
    );
    console.log("MongoDB using mongoose is connected");
  } catch (err) {
    console.log(err);
  }
};
