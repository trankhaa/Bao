import React, { useState } from 'react';
import { Row, Col, Input, Radio, Button, Card, InputNumber, Rate } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CheckoutContainer = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #333;
`;

const SectionTitle = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

const OrderSummary = styled(Card)`
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
`;

const CheckoutButton = styled(Button)`
    width: 100%;
    background-color: #007aff;
    color: white;
    &:hover {
        background-color: #005bb5;
    }
`;

const OrderImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
`;

const OrderItem = styled.div`
    display: flex;
    align-items: center;
`;

const CheckoutPage = () => {
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [address, setAddress] = useState({ name: '', phone: '', address: '' });
    const [couponCode, setCouponCode] = useState('');
    const [shippingFee, setShippingFee] = useState(20000); // giả định
    const [deliveryTime, setDeliveryTime] = useState('2-3 ngày');
    const [notes, setNotes] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handlePlaceOrder = () => {
        const orderId = "123456"; // Giả lập mã đơn hàng, bạn có thể thay thế bằng mã thực từ API
        navigate('/sucess', { state: { orderId } }); // Điều hướng đến OrderSuccessPage với orderId
    };

    return (
        <CheckoutContainer>
            <Title>Thanh Toán</Title>

            <Row gutter={20}>
                {/* Thông tin đơn hàng */}
                <Col span={12}>
                    <OrderSummary title="Thông tin đơn hàng">
                        <OrderItem>
                            <OrderImage src="https://cdn.tgdd.vn/Products/Images/44/231244/grey-1-750x500.jpg" alt="Sản phẩm" />
                            <div>
                                <h4>Macbook Air 2020 13" M1 8/256GB</h4>
                                <span>Màu sắc: Bạc</span>
                                <div>
                                    Số lượng:
                                    <InputNumber min={1} defaultValue={1} onChange={(value) => setQuantity(value)} style={{ marginLeft: '10px' }} />
                                </div>
                                <span>Giá: 13.990.000₫</span>
                            </div>
                        </OrderItem>
                        <Item>
                            <span>Phí giao hàng</span>
                            <span>{shippingFee.toLocaleString()}₫</span>
                        </Item>
                        <Item>
                            <span>Mã giảm giá</span>
                            <Input placeholder="Nhập mã giảm giá" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} style={{ width: '120px' }} />
                        </Item>
                        <Item>
                            <span>Thời gian giao hàng</span>
                            <span>{deliveryTime}</span>
                        </Item>
                        <Item>
                            <span>Tổng cộng</span>
                            <span>{(13990000 * quantity + shippingFee).toLocaleString()}₫</span>
                        </Item>
                    </OrderSummary>
                </Col>

                {/* Thông tin giao hàng */}
                <Col span={12}>
                    <OrderSummary title="Thông tin giao hàng">
                        <SectionTitle>Địa chỉ giao hàng</SectionTitle>
                        <Input placeholder="Tên người nhận" name="name" value={address.name} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
                        <Input placeholder="Số điện thoại" name="phone" value={address.phone} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
                        <Input placeholder="Địa chỉ" name="address" value={address.address} onChange={handleInputChange} style={{ marginBottom: '20px' }} />

                        <SectionTitle>Phương thức thanh toán</SectionTitle>
                        <Radio.Group onChange={handlePaymentChange} value={paymentMethod} style={{ marginBottom: '10px' }}>
                            <Radio value="cash">Thanh toán khi nhận hàng</Radio>
                            <Radio value="credit">Thẻ tín dụng</Radio>
                            <Radio value="wallet">Ví điện tử</Radio>
                            <Radio value="qr">
                                QR Code
                                {paymentMethod === 'qr' && <QrcodeOutlined style={{ fontSize: '24px', marginLeft: '10px' }} />}
                            </Radio>
                        </Radio.Group>

                        <SectionTitle>Ghi chú</SectionTitle>
                        <Input.TextArea rows={4} placeholder="Ghi chú cho sản phẩm (VD: yêu cầu đóng gói kỹ)" value={notes} onChange={(e) => setNotes(e.target.value)} />

                        {/* Nút đặt hàng */}
                        <CheckoutButton type="primary" onClick={handlePlaceOrder}>
                            Đặt hàng
                        </CheckoutButton>
                    </OrderSummary>
                </Col>
            </Row>
        </CheckoutContainer>
    );
};

export default CheckoutPage;
