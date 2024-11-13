import { Row } from "antd";
import styled from "styled-components";

// Wrapper cho toàn bộ header
export const WrapperHeader = styled.div`
    background-color: #FF0000; /* Màu đỏ cho header */
    padding: 10px 120px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Wrapper cho phần chứa logo và các thành phần bên phải
export const TopHeaderRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: nowrap;
`;

// Wrapper cho phần logo
export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        height: 50px;
    }
`;

// Phần tìm kiếm
export const SearchWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;

    input {
        width: 100%;
        padding: 10px;
        border: none;
        font-size: 16px;
        outline: none;
    }

    button {
        background-color: transparent;
        border: 1px solid white;
        padding: 10px 16px;
        cursor: pointer;
        font-size: 16px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button:hover {
        background-color: #ff4d4d;
    }
`;

// Phần hiển thị số hotline trong header
export const HotlineText = styled.div`
    font-size: 16px;
    color: #FFFFFF;
    font-weight: bold;
    white-space: nowrap;
`;

// Wrapper cho icon địa chỉ
export const LocationWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid white;
    padding: 10px;
    border-radius: 8px;
    margin-right: 10px;

    &:hover {
        background-color: #ff4d4d;
    }
`;

// Wrapper cho khu vực tài khoản người dùng
export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid white;
    padding: 10px;
    border-radius: 8px;
    gap: 8px;

    &:hover {
        background-color: #ff4d4d;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .anticon {
        color: #FFFFFF;
    }
`;

// Wrapper cho giỏ hàng
export const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;
    border: 1px solid white;
    padding: 10px;
    border-radius: 8px;

    &:hover {
        background-color: #ff4d4d;
    }

    .anticon {
        color: #FFFFFF;
    }
`;

// Text nhỏ cho phần tài khoản và các thành phần phụ
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #FFFFFF; /* Màu trắng cho text nhỏ */
    white-space: nowrap;
`;
// Phần thanh Navigation
export const NavigationMenu = styled(Row)`
    background-color: #FF0000; /* Màu đỏ cho thanh Navigation */
    justify-content: center;
    padding: 10px 0;

    .ant-menu {
        background-color: transparent;
        color: #FFFFFF;
        border-bottom: none;
    }

    .ant-menu-item a {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
    }

    .ant-menu-item-selected,
    .ant-menu-item:hover {
        background-color: #ff4d4d;
    }
`;
