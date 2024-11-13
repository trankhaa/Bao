import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Thêm 'Link' vào đây
import { WrapperProducts, PageContainer } from './style'; // Thêm style nếu cần
import CardComponent from '../../components/CardComponent/CardComponent';


const ProductsPage = () => {
  const { category } = useParams(); // Lấy danh mục từ URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category]);

  const fetchProductsByCategory = (category) => {
    // Dữ liệu mẫu theo danh mục. Ở đây bạn có thể thay thế bằng API thực tế
    const allProducts = {
      laptop: [
        { id: 1, name: 'Laptop Dell', description: 'Máy tính xách tay Dell', price: '15,000,000 VND' },
        { id: 2, name: 'Laptop HP', description: 'Máy tính xách tay HP', price: '13,000,000 VND' },
      ],
      'màn-hình': [
        { id: 3, name: 'Màn Hình Samsung', description: 'Màn hình LCD Samsung', price: '5,000,000 VND' },
        { id: 4, name: 'Màn Hình LG', description: 'Màn hình LED LG', price: '4,500,000 VND' },
      ],
      pc: [
        { id: 5, name: 'PC Gaming', description: 'PC Gaming cao cấp', price: '20,000,000 VND' },
        { id: 6, name: 'PC Văn Phòng', description: 'PC cho công việc văn phòng', price: '10,000,000 VND' },
      ],
      // Bạn có thể thêm các danh mục khác ở đây
    };

    setProducts(allProducts[category] || []); // Set sản phẩm theo danh mục
  };

  return (
    <PageContainer>
      <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
        Sản phẩm {category}
      </h2>

      <WrapperProducts>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} style={{ marginBottom: '20px' }}>
              <CardComponent product={product} />
              <Link to={`/product-details/${product.id}`} style={linkStyle}>
                Xem chi tiết
              </Link>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm trong danh mục này.</p>
        )}
      </WrapperProducts>
    </PageContainer>
  );
};

const linkStyle = {
  marginTop: '10px',
  color: '#1a73e8',
  textDecoration: 'none',
  fontSize: '16px',
};

export default ProductsPage;
