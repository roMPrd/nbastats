
import mongoose from 'mongoose';

const connectDB = async () => {
  console.log('connecting to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error(error.message)
    throw new Error('connection to MongoDB failed');
  }
};

export default connectDB;
