import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.ATLAS_URI;
    if (!uri) {
      throw new Error('MongoDB connection string not provided. Set MONGO_URI or ATLAS_URI in your .env');
    }
    const conn = await mongoose.connect(uri, {
      // mongoose v6+ has sensible defaults; options kept for clarity
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
