import { connect, disconnect } from "mongoose";
import { config } from "dotenv";

config();

async function connectToDatabase() {
  try {
    console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
