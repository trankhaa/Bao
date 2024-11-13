import express from 'express';
import http from 'http'; // Import http để tạo server
import { Server as SocketIO } from 'socket.io'; // Import socket.io
import connectDB from './config/database.js'; // Kết nối với MongoDB
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session'; // Import express-session
import flash from 'connect-flash'; // Import connect-flash
import viewEngine from './config/viewEngine.js'; // Thiết lập view engine
import initWebRoute from './route/web.js'; // Khởi tạo các route
//import setUser from './middleware/setUser.js'; // Nhập middleware setUser

dotenv.config();

const app = express();
const server = http.createServer(app); // Tạo HTTP server
const io = new SocketIO(server); // Tích hợp socket.io với HTTP server

// Kết nối với MongoDB
connectDB();

// Middleware thiết lập
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

// Thiết lập session middleware
app.use(
   session({
      secret: 'your-secret-key', // Thay đổi thành một secret key mạnh
      resave: false,
      saveUninitialized: true,
   })
);

// Khởi tạo flash messages
app.use(flash());

// Middleware để làm cho flash messages có sẵn trong các response
app.use((req, res, next) => {
   res.locals.error = req.flash('error');
   res.locals.success = req.flash('success'); // Tùy chọn cho thông báo thành công
   next();
});

// Middleware để thiết lập biến username từ session
//app.use(setUser); // Thêm middleware setUser

// Thiết lập view engine
viewEngine(app);

// Khởi tạo các route
initWebRoute(app);

// Socket.IO setup
io.on('connection', (socket) => {
   console.log('A user connected:', socket.id);

   // Lắng nghe sự kiện gửi tin nhắn từ người dùng hoặc admin
   socket.on('sendMessage', (data) => {
      const { sender, content } = data;

      console.log(`${sender} sent a message: ${content}`);

      // Gửi tin nhắn tới tất cả các client (phía người dùng và admin)
      if (sender === 'user') {
         // Gửi tin nhắn từ người dùng tới admin
         io.emit('receiveMessage', content);
      } else if (sender === 'admin') {
         // Gửi tin nhắn từ admin tới người dùng
         io.emit('receiveMessage', content);
      }
   });

   // Xử lý khi người dùng ngắt kết nối
   socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
   });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Backend NodeJS is running on port: ${port}`);
});
