import styled from "styled-components";

// Container cho trang Order
export const OrderPageContainer = styled.div`
    padding: 40px; // Tăng padding để giao diện rộng hơn
    background: #efefef;
`;

// Tiêu đề trang
export const OrderTitle1 = styled.h2`
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;

// Card cho sản phẩm
export const OrderCard = styled.div`
    display: flex; // Sắp xếp các phần tử theo hàng
    align-items: flex-start; // Đặt các phần tử lên trên cùng
    background: #fff; // Màu nền trắng
    padding: 20px; // Padding cho Card
    border-radius: 8px; // Bo góc
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); // Bóng đổ
    margin-top: 20px; // Khoảng cách phía trên
`;

// Hình ảnh sản phẩm
export const OrderImage = styled.img`
    width: 300px; // Chiều rộng của hình ảnh
    height: 300px; // Chiều cao của hình ảnh
    object-fit: cover; // Giữ tỷ lệ hình ảnh
    margin-right: 20px; // Khoảng cách bên phải cho hình ảnh
`;

// Chi tiết sản phẩm
export const OrderDetails = styled.div`
    flex: 1; // Chiếm không gian còn lại
    display: flex; 
    flex-direction: column; // Đặt các phần tử theo chiều dọc
    justify-content: space-between; // Căn chỉnh khoảng cách giữa các phần tử
`;

// Tiêu đề sản phẩm
export const OrderTitle2 = styled.h3`
    margin: 0;
`;

// Mô tả sản phẩm
export const OrderDescription = styled.p`
    margin: 5px 0;
    color: #555;
`;

// Giá sản phẩm
export const PriceTag = styled.h4`
    color: #000;
    font-weight: bold;
`;

// Nút chọn màu sắc
export const ColorButton = styled.button`
    margin-right: 10px;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    color: white;
    &:first-child {
        background-color: red;
    }
    &:nth-child(2) {
        background-color: blue;
    }
    &:last-child {
        background-color: green;
    }
`;

// Nhóm các nút chức năng
export const FunctionButtons = styled.div`
    display: flex;
    flex-direction: column; // Sắp xếp các nút theo chiều dọc
    align-items: flex-start; // Căn trái
    margin-left: 20px; // Khoảng cách bên trái
`;

// Nhóm nút chức năng
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start; // Căn chỉnh nút
    margin-top: 10px;
`;

// Nút chức năng
export const OrderButton = styled.button`
    background-color: rgb(11, 116, 229);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: #0a7dc1; // Màu khi hover
    }
`;
