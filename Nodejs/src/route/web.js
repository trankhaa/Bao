// src/routes/webRoutes.js
import UserController from '../controllers/UserController';
import express from 'express';

let route = express.Router();

let initWebRoutes = (app) => {
   // Đăng ký các route
   app.use('/', route);

   // Route cho trang chủ
   route.get('/', (req, res) => {
      res.send('Welcome to the Home Page!'); // Gửi một thông điệp đơn giản
   });

   // Route để lấy danh sách người dùng (ví dụ sử dụng từ tệp users.json)

   route.get('/users', UserController.getUsers);
   route.post('/checkuser', UserController.createuser);

   // Route để gửi một thông điệp
   route.get('/about', (req, res) => {
      res.json({
         message: 'This is the About Page.',
         description: 'You can find more information here.',
      }); // Gửi phản hồi dưới dạng JSON
   });
};

// Xuất hàm khởi tạo các route
export default initWebRoutes;
