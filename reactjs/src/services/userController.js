import axios from 'axios';

const API_URL = 'http://localhost:3000/users'; // Địa chỉ API của bạn
const API_URL_post = 'http://localhost:3000/checkuser';

export const fetchUsers = async () => {
    try {
       const response = await axios.get(API_URL);
       return response.data; // Trả về dữ liệu từ API
    } catch (error) {
       console.error('Error fetching users:', error);
       throw error; // Ném lỗi để xử lý ở nơi khác nếu cần
    }
 };
 
 export const createProduct = async (formData) => {
    console.log('Form Data:', formData); // In ra dữ liệu form trước khi gửi
 
    try {
       const response = await axios.post(API_URL_post, formData);
       console.log('Response from server:', response.data); // In ra phản hồi từ server
       return response.data; // Trả về phản hồi từ server
    } catch (error) {
       console.error('Error creating product:', error); // In ra lỗi nếu có
       throw error; // Ném lỗi để xử lý ở nơi khác nếu cần
    }
 };
 