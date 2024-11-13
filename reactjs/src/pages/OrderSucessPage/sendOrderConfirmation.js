// server/sendOrderConfirmation.js
const nodemailer = require('nodemailer');

const sendOrderConfirmation = async (order, customerEmail) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: 'yourshop@example.com',
        to: customerEmail,
        subject: 'Xác nhận đơn hàng',
        html: `<h2>Cảm ơn bạn đã đặt hàng!</h2>
               <p>Mã đơn hàng của bạn là: ${order.id}</p>
               <p>Thông tin chi tiết:</p>
               <ul>
                   <li>Tên sản phẩm: ${order.productName}</li>
                   <li>Số lượng: ${order.quantity}</li>
                   <li>Tổng tiền: ${order.totalAmount}₫</li>
               </ul>`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendOrderConfirmation;
