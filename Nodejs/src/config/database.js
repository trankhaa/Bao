const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Để sử dụng các biến từ .env

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Thoát nếu kết nối thất bại
  }
};

module.exports = connectDB;
