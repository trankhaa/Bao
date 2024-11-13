// src/pages/OrderSuccessPage/OrderSuccessPage.js

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

const SuccessContainer = styled.div`
    padding: 40px;
    text-align: center;
`;

const OrderSuccessPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { orderId } = location.state || {};

    return (
        <SuccessContainer>
            <h1>Đặt hàng thành công!</h1>
            {orderId ? (
                <p>Cảm ơn bạn đã đặt hàng! Mã đơn hàng của bạn là: <strong>{orderId}</strong></p>
            ) : (
                <p>Không tìm thấy mã đơn hàng.</p>
            )}
            <Button
                type="primary"
                onClick={() => navigate('/tracking', { state: { orderId } })}
            >
                Xem Đơn Hàng
            </Button>
            <Button onClick={() => navigate('/')}>Tiếp Tục Mua Sắm</Button>
        </SuccessContainer>
    );
};

export default OrderSuccessPage;
