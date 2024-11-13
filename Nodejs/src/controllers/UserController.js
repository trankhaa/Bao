import usersjson from '../models/User.json'; // Importing the JSON data
import User from '../models/User.js';

const getUsers = async (req, res) => {
   try {
      const users = await User.find(); // Lấy tất cả người dùng từ MongoDB
      res.json(users); // Gửi danh sách người dùng dưới dạng phản hồi JSON
   } catch (error) {
      console.error('Error fetching users:', error); // Log lỗi
      res.status(500).json({ message: 'Error fetching users', error }); // Lỗi khi lấy người dùng
   }
};
const createuser = async (req, res) => {
   try {
      const newuser = new User(req.body); // Tạo sản phẩm mới từ dữ liệu gửi lên
      const saveduser = await newuser.save(); // Lưu sản phẩm vào MongoDB
      console.log(newuser);
      res.status(201).json(saveduser); // Trả về sản phẩm mới được tạo
   } catch (error) {
      console.error('Error creating user:', error); // Log lỗi
      res.status(400).json({ message: 'Error creating user', error }); // Lỗi khi tạo sản phẩm
   }
};

// Export the functions to be used in routes
export default {
   getUsers,
   createuser,
};
