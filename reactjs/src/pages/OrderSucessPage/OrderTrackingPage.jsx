// src/pages/OrderTrackingPage/OrderTrackingPage.js

import React, { useEffect, useState } from 'react';
import { Button, Steps, Card } from 'antd';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const { Step } = Steps;

const TrackingContainer = styled.div`
    padding: 40px;
`;

const OrderTrackingPage = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
    const { orderId } = location.state || {};
    const [orderStatus, setOrderStatus] = useState('processing');

    useEffect(() => {
        // Fetch trạng thái đơn hàng từ server nếu cần
        const fetchOrderStatus = async () => {
            // const response = await fetch(`/api/orders/${orderId}`);
            // const data = await response.json();
            // setOrderStatus(data.status);
        };
        fetchOrderStatus();
    }, [orderId]);

    const handleCompleteOrder = () => {
        setOrderStatus('completed');
        navigate('/'); // Điều hướng về trang chủ
    };

    return (
        <TrackingContainer>
            <h1>Theo Dõi Đơn Hàng</h1>
            <Steps current={orderStatus === 'completed' ? 3 : 1}>
                <Step title="Đang chuẩn bị" />
                <Step title="Đang vận chuyển" />
                <Step title="Đã giao" />
                <Step title="Hoàn tất" />
            </Steps>
            <Card style={{ marginTop: '20px' }}>
                <h3>Mã đơn hàng: {orderId}</h3>
                <Button type="primary" onClick={handleCompleteOrder}>
                    Hoàn tất đơn hàng
                </Button>
            </Card>
        </TrackingContainer>
    );
};

export default OrderTrackingPage;
