import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import CardComponent from '../../components/CardComponent/CardComponent';
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import SliderComponent from '../../components/SliderComponent/SliderComponent';

const Homepage = () => {
  const initialProducts = [
    { id: 1, name: 'Case Corsair 5000D Airflow RGB', price: '4.400.000đ', image: 'https://example.com/product1.jpg' },
    { id: 2, name: 'Case Corsair 5000D Airflow White', price: '4.400.000đ', image: 'https://example.com/product2.jpg' },
    { id: 3, name: 'Case Deepcool CK560 ARGB', price: '3.700.000đ', image: 'https://example.com/product3.jpg' },
    { id: 4, name: 'Case Corsair 4000D Airflow', price: '2.900.000đ', image: 'https://example.com/product4.jpg' },
    { id: 5, name: 'Case Deepcool CK500 White', price: '2.600.000đ', image: 'https://example.com/product5.jpg' },
  ];

  const moreProducts = [
    { id: 6, name: 'Case Deepcool CK560 Black', price: '3.700.000đ', image: 'https://example.com/product6.jpg' },
    { id: 7, name: 'Case Corsair 4000D Airflow Black', price: '2.900.000đ', image: 'https://example.com/product7.jpg' },
    { id: 8, name: 'Case Deepcool CK500 Mesh', price: '2.600.000đ', image: 'https://example.com/product8.jpg' },
    { id: 9, name: 'Case Deepcool CK500 White', price: '2.600.000đ', image: 'https://example.com/product9.jpg' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]); // Khởi tạo state cho giỏ hàng
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setProducts([...products, ...moreProducts]);
    setShowMore(true);
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Sản phẩm đã thêm vào giỏ hàng:', product);
  };

  return (
    <div>
      <SliderComponent arrImages={[slider1, slider2, slider3]} />

      {/* Bố cục cho Sidebar và danh sách sản phẩm */}
      <div style={{ display: 'flex', padding: '20px' }}>
        {/* Filter Sidebar */}
        <FilterSidebar />

        {/* Khu vực chứa danh sách sản phẩm */}
        <div style={{ flex: 1, paddingLeft: '20px' }}>
          {/* Danh sách sản phẩm */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {products.map((product) => (
              <CardComponent key={product.id} product={product} addToCart={addToCart} /> // Truyền addToCart vào CardComponent
            ))}
          </div>

          {/* Nút "Xem thêm" */}
          {!showMore && (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={handleShowMore} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff5050', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Xem thêm sản phẩm
              </button>
            </div>
          )}

          {/* Phần bình luận và đánh giá */}
          <div style={{ marginTop: '40px', padding: '20px', borderTop: '1px solid #ddd' }}>
            <h3>Đánh giá sản phẩm</h3>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px', color: '#ffb400', marginRight: '10px' }}>★ ★ ★ ★ ★</span>
                <span>(5 đánh giá)</span>
              </div>

              {/* Bình luận */}
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Nguyễn Quang Tèo</div>
                <div>★★★★☆</div>
                <div>Sản phẩm rất tốt, tôi rất hài lòng!</div>
              </div>
              <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '10px' }}>
                <div style={{ fontWeight: 'bold' }}>Trần Bò</div>
                <div>★★★★★</div>
                <div>Chất lượng sản phẩm tuyệt vời, giá cả hợp lý.</div>
              </div>

              {/* Form viết đánh giá */}
              <h4 style={{ marginTop: '20px' }}>Viết đánh giá của bạn</h4>
              <form>
                <div style={{ marginBottom: '10px' }}>
                  <label>Tên của bạn:</label>
                  <input type="text" style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Đánh giá:</label>
                  <select style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}>
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
                  </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Nhận xét của bạn:</label>
                  <textarea style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }} rows="4"></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ff5050', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Gửi đánh giá</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
