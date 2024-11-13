import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StarFilled } from '@ant-design/icons';
import imagePath from "../../assets/images/mac1.webp";
import {
    StyleNameProduct,
    WrapperCardStyle,
    WrapperDiscountText,
    WrapperPriceText,
    WrapperReportText,
    ButtonGroup,
    StyledButton,
    AddToCartButton
} from './style';

const CardComponent = ({ product, addToCart }) => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (typeof addToCart === 'function') {
            addToCart(product); // Gọi hàm addToCart
            navigate('/cart'); // Chuyển hướng tới trang giỏ hàng
        } else {
            console.error('addToCart is not a function');
        }
    };

    const handleViewDetails = () => {
        navigate(`/product-details/${product.id}`); // Điều hướng đến trang ProductDetailsPage với productId
    };

    return (
        <WrapperCardStyle
            bodyStyle={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            cover={<img alt={product.name} src={product.image || imagePath} />}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <StyleNameProduct>{product.name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{product.rating} </span> <StarFilled style={{ fontSize: '12px', color: 'gold' }} />
                </span>
                <span> | Đã bán {product.sold}</span>
            </WrapperReportText>
            <WrapperPriceText>
                {product.price}
                <WrapperDiscountText>{product.discount}</WrapperDiscountText>
            </WrapperPriceText>
            {hovered && (
                <ButtonGroup>
                    <StyledButton onClick={handleViewDetails}> Xem chi tiết </StyledButton>
                </ButtonGroup>
            )}
            <AddToCartButton onClick={handleAddToCart}> Thêm vào giỏ hàng </AddToCartButton>
        </WrapperCardStyle>
    );
};

export default CardComponent;
