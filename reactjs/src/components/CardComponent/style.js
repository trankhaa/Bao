// style.js
import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 240px;
    border-radius: 10px; /* Bo góc cho thẻ */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Thêm bóng cho thẻ */
    transition: transform 0.3s, box-shadow 0.3s; /* Hiệu ứng chuyển đổi khi hover */
    
    &:hover {
        transform: translateY(-5px); /* Nâng thẻ lên khi hover */
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Tăng bóng khi hover */
    }

    img {
        height: 200px;
        width: 100%; /* Thay đổi width thành 100% để vừa với card */
        object-fit: cover; /* Đảm bảo ảnh không bị biến dạng */
        border-radius: 10px 10px 0 0; /* Bo góc cho ảnh */
    }
`;

export const StyleNameProduct = styled.div`
    font-weight: 600; /* Tăng độ đậm cho tên sản phẩm */
    font-size: 14px; /* Tăng kích thước font */
    line-height: 18px;
    color: rgb(56, 56, 61);
    margin: 8px 0; /* Thêm khoảng cách trên và dưới */
`;

export const WrapperReportText = styled.div`
    font-size: 12px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 4px 0; /* Thêm khoảng cách */
`;

export const WrapperPriceText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 18px; /* Tăng kích thước font */
    font-weight: 600; /* Tăng độ đậm cho giá sản phẩm */
    margin-top: auto; /* Đẩy giá xuống dưới cùng */
`;

export const WrapperDiscountText = styled.span`
    color: rgb(128, 128, 137); /* Đổi màu giảm giá cho nhẹ nhàng hơn */
    font-size: 14px; /* Tăng kích thước font */
    font-weight: 400; /* Giảm độ đậm cho giảm giá */
    margin-left: 10px; /* Thêm khoảng cách trái */
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column; /* Đặt các nút nằm dọc */
    justify-content: center; /* Căn giữa các nút */
    margin-top: 10px; /* Khoảng cách trên nút */
`;

export const StyledButton = styled.button`
    border: none;
    background-color: rgb(26, 148, 255); /* Màu nền cho nút */
    color: white; /* Màu chữ */
    padding: 8px; /* Khoảng cách bên trong nút */
    border-radius: 5px; /* Bo góc cho nút */
    cursor: pointer; /* Con trỏ khi hover */
    font-size: 12px; /* Kích thước chữ */
    margin-bottom: 5px; /* Khoảng cách giữa các nút */
    transition: background-color 0.3s; /* Hiệu ứng chuyển đổi màu nền */
    
    &:hover {
        background-color: rgb(20, 120, 210); /* Tối màu khi hover */
    }
`;

export const AddToCartButton = styled.button`
    border: none;
    background-color: rgb(0, 150, 0); /* Màu nền cho nút thêm vào giỏ hàng */
    color: white; /* Màu chữ */
    padding: 10px; /* Khoảng cách bên trong nút */
    border-radius: 5px; /* Bo góc cho nút */
    cursor: pointer; /* Con trỏ khi hover */
    font-size: 14px; /* Kích thước chữ */
    width: 100%; /* Chiều rộng đầy đủ */
    margin-top: 10px; /* Khoảng cách trên nút */
    transition: background-color 0.3s; /* Hiệu ứng chuyển đổi màu nền */
    
    &:hover {
        background-color: rgb(0, 120, 0); /* Tối màu khi hover */
    }
`;
