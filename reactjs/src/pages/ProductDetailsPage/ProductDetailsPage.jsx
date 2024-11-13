import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    display: flex;
    gap: 20px;
    background-color: #fff;
`;

const ImageSection = styled.div`
    flex: 2;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const ThumbnailContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
    &:hover {
        border: 1px solid #000;
    }
`;

const DetailsSection = styled.div`
    flex: 3;
    padding: 0 20px;
`;

const ProductTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #333;
`;

const ProductPrice = styled.p`
    font-size: 24px;
    color: #ff0000;
    margin: 0;
`;

const OriginalPrice = styled.span`
    font-size: 18px;
    color: #888;
    text-decoration: line-through;
    margin-left: 10px;
`;

const ActionButton = styled.button`
    padding: 10px 20px;
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
    background-color: ${(props) => (props.primary ? '#ff5050' : '#007bff')};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;

const DescriptionSection = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
`;

const TechnicalSpecs = styled.div`
    margin-top: 20px;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
`;

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Fetch hoặc dữ liệu mẫu
        const fetchedProduct = {
            id: productId,
            name: `ASUS TUF Gaming GeForce RTX 3060 V2 12GB GDDR6`,
            image: `https://product.hstatic.net/200000837185/product/screenshot_2024-08-12_125856_cbf0edeb0f8145b5911e581d69420115_small.png`,
            thumbnails: [
                `https://theme.hstatic.net/200000837185/1001221874/14/pproduct_frame_image_27_grande.png?v=2494`,
                `https://product.hstatic.net/200000837185/product/screenshot_2024-08-12_125937_c43367b2de24482ab7a69159b0eb19aa_small.png`,
                `https://product.hstatic.net/200000837185/product/screenshot_2024-08-12_125856_cbf0edeb0f8145b5911e581d69420115_small.png`,
            ],
            price: '7,990,000đ',
            originalPrice: '11,990,000đ',
            warranty: '36 tháng',
            description: 'ASUS TUF Gaming GeForce RTX 3060 V2 với hiệu năng mạnh mẽ và độ bền cao.',
            technicalSpecs: {
                brand: 'Asus',
                warranty: '36 tháng',
                model: 'GeForce RTX 3060 V2',
                memory: '12GB GDDR6',
                // Các thông số khác...
            },
        };
        setProduct(fetchedProduct);
        setSelectedImage(fetchedProduct.image); // Thiết lập hình ảnh mặc định
    }, [productId]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const handleThumbnailClick = (thumbnail) => {
        setSelectedImage(thumbnail); // Cập nhật hình ảnh lớn khi bấm vào thumbnail
    };

    const handleAddToCart = () => {
        // Logic thêm vào giỏ hàng có thể thêm ở đây nếu cần
        navigate('/cart'); // Điều hướng đến trang giỏ hàng
    };

    return (
        <Container>
            <ImageSection>
                <ProductImage src={selectedImage} alt={product.name} />
                <ThumbnailContainer>
                    {product.thumbnails.map((thumb, index) => (
                        <Thumbnail
                            key={index}
                            src={thumb}
                            alt={`thumbnail-${index + 1}`}
                            onClick={() => handleThumbnailClick(thumb)}
                        />
                    ))}
                </ThumbnailContainer>
            </ImageSection>

            <DetailsSection>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>
                    {product.price}
                    <OriginalPrice>{product.originalPrice}</OriginalPrice>
                </ProductPrice>
                <p>Bảo hành: {product.warranty}</p>
                <ActionButton primary onClick={handleAddToCart}>Thêm vào giỏ hàng</ActionButton>
                <ActionButton>Trả góp</ActionButton>

                <DescriptionSection>
                    <h2>Mô tả sản phẩm</h2>
                    <p>{product.description}</p>
                </DescriptionSection>

                <TechnicalSpecs>
                    <h3>Thông số kỹ thuật</h3>
                    <p>Thương hiệu: {product.technicalSpecs.brand}</p>
                    <p>Bảo hành: {product.technicalSpecs.warranty}</p>
                    <p>Model: {product.technicalSpecs.model}</p>
                    <p>Bộ nhớ: {product.technicalSpecs.memory}</p>
                    {/* Thêm các thông số khác nếu có */}
                </TechnicalSpecs>
            </DetailsSection>
        </Container>
    );
};

export default ProductDetailsPage;
