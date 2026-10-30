import mongoose from "mongoose";

let connected = false;
let connecting = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("FATAL: MONGODB_URI is not defined in the environment.");
    process.exit(1);
  }

  if (connected) return;
  if (connecting) return;

  connecting = true;

  const tryConnect = async (retries = 5) => {
    for (let i = 0; i < retries; i++) {
      try {
        const conn = await mongoose.connect(uri, {
          serverSelectionTimeoutMS: 15000,
          socketTimeoutMS: 45000,
          maxPoolSize: 10,
          minPoolSize: 0,
          maxIdleTimeMS: 30000,
          family: 4,
        });
        connected = true;
        connecting = false;
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return;
      } catch (error) {
        const msg = error.message || "";
        // Mask credentials in logs
        const safeMsg = uri.replace(/(mongodb(\+srv)?:\/\/)([^:]+):([^@]+)@/, "$1***:***@");
        console.error(
          `MongoDB connection attempt ${i + 1}/${retries} failed: ${msg} (URI: ${safeMsg})`
        );
        if (i < retries - 1) {
          const delay = Math.min(2000 * Math.pow(2, i), 10000);
          await new Promise((r) => setTimeout(r, delay));
        }
      }
    }

    connecting = false;
    console.error(
      "MongoDB could not be reached. The server will keep running but database operations will fail until a connection is established."
    );
  };

  // Don't block server startup — connect in the background
  tryConnect().catch((err) => {
    console.error("Unexpected error during MongoDB connection:", err.message);
  });

  // Reconnect if the connection drops
  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected — attempting to reconnect...");
    connected = false;
    connecting = false;
    connectDB();
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err.message);
  });
};

export const isDBConnected = () => connected && mongoose.connection.readyState === 1;

export default connectDB;