import React, { useState } from 'react';
import { Button, InputNumber, Row, Col, Divider } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
    CartPageContainer,
    CartItem,
    CartImage,
    CartDetails,
    CartItemTitle,
    CartPrice,
    TotalPriceContainer,
    TotalPrice,
    CheckoutButton,
    RemoveButton
} from './style';

const CartPage = () => {
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Macbook Air 2020',
            price: 13990000,
            quantity: 1,
            image: 'https://cdn.tgdd.vn/Products/Images/44/231244/grey-1-750x500.jpg',
        },
        {
            id: 2,
            name: 'iPhone 13',
            price: 21990000,
            quantity: 1,
            image: 'data:image/jpeg;base64,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',
        },
    ]);

    const handleQuantityChange = (id, value) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: value } : item
        );
        setCartItems(updatedCart);
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        navigate('/check'); // Chuyển đến trang Checkout khi nhấn nút Thanh toán
    };

    return (
        <CartPageContainer>
            <h2>Giỏ hàng của bạn</h2>
            {cartItems.map((item) => (
                <CartItem key={item.id}>
                    <Row>
                        <Col span={6}>
                            <CartImage src={item.image} alt={item.name} />
                        </Col>
                        <Col span={12}>
                            <CartDetails>
                                <CartItemTitle>{item.name}</CartItemTitle>
                                <CartPrice>{item.price.toLocaleString()}₫</CartPrice>
                                <InputNumber
                                    min={1}
                                    defaultValue={item.quantity}
                                    onChange={(value) => handleQuantityChange(item.id, value)}
                                />
                            </CartDetails>
                        </Col>
                        <Col span={6}>
                            <RemoveButton onClick={() => handleRemoveItem(item.id)}>Xóa</RemoveButton>
                        </Col>
                    </Row>
                    <Divider />
                </CartItem>
            ))}
            <TotalPriceContainer>
                <TotalPrice>Tổng: {calculateTotalPrice().toLocaleString()}₫</TotalPrice>
                <CheckoutButton type="primary" onClick={handleCheckout}>Thanh toán</CheckoutButton> {/* Gọi hàm handleCheckout */}
            </TotalPriceContainer>
        </CartPageContainer>
    );
};

export default CartPage;
