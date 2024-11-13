// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinFilled, YoutubeOutlined } from '@ant-design/icons';

// Styled Components
const FooterContainer = styled.div`
  background: #1e1e1e;
  color: #fff;
  padding: 40px 20px;
`;

const FooterSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 200px;
`;

const FooterTitle = styled.h4`
  margin-bottom: 15px;
  color: #fff;
  font-weight: bold;
`;

const FooterText = styled.p`
  margin: 5px 0;
  color: #ccc;
  font-size: 14px;
`;

const FooterLink = styled.a`
  display: block;
  color: #ccc;
  margin: 5px 0;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;

  & > * {
    margin-right: 15px;
    color: #fff;
    font-size: 20px;

    &:hover {
      color: #1e90ff;
    }
  }
`;

const SubscribeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    padding: 10px;
    width: 300px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #b20710;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #777;
  padding: 10px;
  font-size: 12px;
  border-top: 1px solid #444;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Đăng ký nhận tin */}
      <SubscribeSection>
        <h4>ĐĂNG KÝ NHẬN TIN</h4>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="email" placeholder="Email" />
          <button>ĐĂNG KÝ</button>
        </div>
      </SubscribeSection>

      <FooterSection>
        {/* Logo và Thông tin liên hệ */}
        <FooterColumn>
          <FooterTitle>XGEAR</FooterTitle>
          <FooterText>XGEAR - Chuyên cung cấp Laptop Gaming & PC cao cấp chính hãng.</FooterText>
          <FooterText>📍 HCM: 08 Tự Lập, Phường 4, Quận Tân Bình</FooterText>
          <FooterText>📍 Hà Nội: 10A1 Ngõ 49 Linh Lang, Ba Đình</FooterText>
          <FooterText>📞 Hotline: 02871081881</FooterText>
          <FooterText>📧 Email: sales@thenewxgear.com</FooterText>
        </FooterColumn>

        {/* Chính sách */}
        <FooterColumn>
          <FooterTitle>CHÍNH SÁCH</FooterTitle>
          <FooterLink href="#">Tìm kiếm</FooterLink>
          <FooterLink href="#">Liên hệ</FooterLink>
          <FooterLink href="#">Trung tâm bảo hành</FooterLink>
        </FooterColumn>

        {/* Bài viết */}
        <FooterColumn>
          <FooterTitle>BÀI VIẾT</FooterTitle>
          <FooterLink href="#">Hướng Dẫn & Thủ Thuật</FooterLink>
          <FooterLink href="#">Giải Trí & Game</FooterLink>
          <FooterLink href="#">Tin Tức Công Nghệ</FooterLink>
          <FooterLink href="#">Tin tức</FooterLink>
        </FooterColumn>

        {/* Hướng dẫn */}
        <FooterColumn>
          <FooterTitle>HƯỚNG DẪN</FooterTitle>
          <FooterLink href="#">Hướng dẫn thanh toán</FooterLink>
          <FooterLink href="#">Hướng dẫn trả góp</FooterLink>
          <FooterLink href="#">Tra cứu bảo hành</FooterLink>
          <FooterLink href="#">Tuyển dụng</FooterLink>
          <FooterLink href="#">Tin công nghệ</FooterLink>
          <FooterLink href="#">Chính sách bảo hành</FooterLink>
          <FooterLink href="#">Chính sách đổi mới hoàn tiền</FooterLink>
        </FooterColumn>

        {/* Tổng đài hỗ trợ và phương thức thanh toán */}
        <FooterColumn>
          <FooterTitle>TỔNG ĐÀI HỖ TRỢ</FooterTitle>
          <FooterText>Hồ Chí Minh: 093 373 1881 (9h00-20h00)</FooterText>
          <FooterText>Hà Nội: 097 232 1881 (9h00-20h00)</FooterText>
          <FooterText>Hotline: 028 7108 1881 (9h00-20h00)</FooterText>
          <FooterTitle>PHƯƠNG THỨC THANH TOÁN</FooterTitle>
          {/* Giả sử các hình ảnh biểu tượng thanh toán là các hình ảnh */}
          <img src="data:image/jpeg;base64,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" alt="Visa" style={{ width: '40px', marginRight: '10px' }} />
          <img src="data:image/png;base64,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" alt="MasterCard" style={{ width: '40px', marginRight: '10px' }} />
          <img src="data:image/png;base64,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" alt="JCB" style={{ width: '40px', marginRight: '10px' }} />
        </FooterColumn>
      </FooterSection>

      {/* Mạng xã hội */}
      <FooterSection>
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookOutlined />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramOutlined />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterOutlined />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinFilled />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <YoutubeOutlined />
          </a>
        </SocialIcons>
      </FooterSection>

      <Copyright>
        © 2024 Công ty TNHH THE NEW XGEAR - GPKD: 0316898252 do Sở KH-ĐT TP.HCM cấp. ©Copyright by Xgear
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
