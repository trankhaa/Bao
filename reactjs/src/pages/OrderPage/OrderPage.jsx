import React, { useState } from 'react';
import { Row, Col, Card, Button, InputNumber, Rate } from 'antd';
import styled from 'styled-components';

// Styled Components
const OrderPageContainer = styled.div`
  padding: 40px;
  background: #f4f4f4;
  min-height: 100vh;
`;

const OrderCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OrderImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
`;

const OrderDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  padding: 20px;
`;

const OrderTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const OrderDescription = styled.p`
  margin: 5px 0;
  color: #555;
`;

const PriceTag = styled.h4`
  color: #000;
  font-weight: bold;
  margin: 10px 0;
`;

const ColorButton = styled(Button)`
  margin-right: 10px;
  border: none;
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SpecsContainer = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SpecsTitle = styled.h4`
  margin: 0 0 10px;
`;

const SpecItem = styled.p`
  margin: 5px 0;
`;

const OrderPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('red');

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const order = {
    id: 1,
    name: 'Macbook Air 2020 13" M1 8/256GB Silver - USED 98.5%',
    image: 'https://cdn.tgdd.vn/Products/Images/44/231244/grey-1-750x500.jpg',
    price: '13.990.000₫',
    description: 'Ngoại hình 98.5% - Cấu hình 8GB RAM / 256GB Bộ nhớ',
    specs: {
      weight: '1.29 kg',
      dimensions: '30.61 x 21.24 x 1.61 cm',
      processor: 'Apple M1',
      ram: '8GB',
      storage: '256GB SSD',
      battery: '18 hours',
    },
    features: [
      'Màn hình Retina',
      'Bảo mật Touch ID',
      'Khả năng kết nối Wi-Fi 6',
      'Cổng Thunderbolt 3',
    ],
  };

  return (
    <OrderPageContainer>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Order</h2>
      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <OrderCard>
            <OrderImage src={order.image} alt={order.name} />
            <OrderDetails>
              <OrderTitle>{order.name}</OrderTitle>
              <PriceTag>{order.price}</PriceTag>
              <OrderDescription>{order.description}</OrderDescription>

              {/* Color Selection */}
              <div style={{ marginBottom: '10px' }}>
                <span style={{ marginRight: '10px' }}>Chọn màu:</span>
                <ColorButton onClick={() => handleColorChange('red')} style={{ backgroundColor: 'red' }}>
                  Đỏ
                </ColorButton>
                <ColorButton onClick={() => handleColorChange('blue')} style={{ backgroundColor: 'blue' }}>
                  Xanh
                </ColorButton>
                <ColorButton onClick={() => handleColorChange('green')} style={{ backgroundColor: 'green' }}>
                  Xanh lá
                </ColorButton>
              </div>

              {/* Star Rating */}
              <Rate allowHalf defaultValue={4} style={{ marginBottom: '10px' }} />

              {/* Button Group */}
              <ButtonGroup>
                <InputNumber min={1} defaultValue={1} onChange={handleQuantityChange} style={{ marginRight: '10px' }} />
                <Button type="primary" style={{ marginRight: '10px' }}>Đặt ngay</Button>
                <Button type="default">Thêm vào giỏ hàng</Button>
              </ButtonGroup>
            </OrderDetails>
          </OrderCard>
        </Col>
      </Row>

      {/* Technical Specifications */}
      <SpecsContainer>
        <SpecsTitle>Thông số kỹ thuật</SpecsTitle>
        <SpecItem>Cân nặng: {order.specs.weight}</SpecItem>
        <SpecItem>Kích thước: {order.specs.dimensions}</SpecItem>
        <SpecItem>Vi xử lý: {order.specs.processor}</SpecItem>
        <SpecItem>RAM: {order.specs.ram}</SpecItem>
        <SpecItem>Bộ nhớ: {order.specs.storage}</SpecItem>
        <SpecItem>Thời gian sử dụng: {order.specs.battery}</SpecItem>
      </SpecsContainer>

      {/* Features */}
      <SpecsContainer style={{ marginTop: '10px' }}>
        <SpecsTitle>Tính năng nổi bật</SpecsTitle>
        <ul>
          {order.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </SpecsContainer>
    </OrderPageContainer>
  );
};

export default OrderPage;
