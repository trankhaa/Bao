import { Badge, Col, Dropdown, Menu, Row } from 'antd';
import React, { useContext } from 'react';
import { WrapperHeader, TopHeaderRow, LogoWrapper, HotlineText, WrapperHeaderAccount, WrapperTextHeaderSmall, CartWrapper, SearchWrapper, LocationWrapper, NavigationMenu } from './style';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/xgear2.webp';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

const HeaderComponent = () => {
    const { cart } = useContext(CartContext);
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const totalItems = cart.reduce((sum, item) => sum + item.quantityCart, 0);

    const handleLogout = () => {
        setUser({
            isAuthenticated: false,
            name: '',
            email: '',
        });
        navigate('/sign-in');
    };

    // Menu thả xuống cho tài khoản
    const accountMenu = (
        <Menu>
            {user.isAuthenticated ? (
                <Menu.Item key="logout" onClick={handleLogout}>
                    Logout
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item key="sign-in">
                        <Link to="/sign-in">Sign In</Link>
                    </Menu.Item>
                    <Menu.Item key="sign-up">
                        <Link to="/sign-up">Sign Up</Link>
                    </Menu.Item>
                </>
            )}
        </Menu>
    );

    // Menu thả xuống cho địa chỉ
    const locationMenu = (
        <Menu>
            <Menu.Item key="location1">
                <div>
                    <p>Hồ Chí Minh - Xgear HCM</p>
                    <p>08 Tự Lập, Phường 4, Quận Tân Bình</p>
                    <p>Hotline: 02871081881</p>
                    <p>Giờ hoạt động: 9:00 - 20:00</p>
                </div>
            </Menu.Item>
            <Menu.Item key="location2">
                <div>
                    <p>Hà Nội - Xgear Hà Nội</p>
                    <p>10A1 Ngõ 49 Linh Lang, Ba Đình</p>
                    <p>Hotline: 0973231881</p>
                    <p>Giờ hoạt động: 9:00 - 20:00</p>
                </div>
            </Menu.Item>
        </Menu>
    );

    // Menu Navigation chính
    const navMenu = (
        <Menu mode="horizontal">
            <Menu.Item key="homepage">
                <Link to="/tin-tuc">TIN TỨC</Link>
            </Menu.Item>
            <Menu.Item key="macbook">
                <Link to="/productList/670ff2c12938a36073a9d9c3">LAPTOP</Link>
            </Menu.Item>
            <Menu.Item key="macbook99">
                <Link to="/productList/6729730be84df12ca0e8b77e">MÀN HÌNH</Link>
            </Menu.Item>
            <Menu.Item key="iphone">
                <Link to="/productList/67297313e84df12ca0e8b782">PC</Link>
            </Menu.Item>
            <Menu.Item key="ipad">
                <Link to="/productList/67297319e84df12ca0e8b786">LINH KIỆN</Link>
            </Menu.Item>
            <Menu.Item key="imac">
                <Link to="/productList/67297322e84df12ca0e8b78a">GAMING GEAR</Link>
            </Menu.Item>
            <Menu.Item key="surface">
                <Link to="/productList/67297376e84df12ca0e8b78e">PHẦN MỀM</Link>
            </Menu.Item>
            <Menu.Item key="accessories">
                <Link to="/productList/67297392e84df12ca0e8b792">PHỤ KIỆN</Link>
            </Menu.Item>
            <Menu.Item key="warranty">
                <Link to="/warrantyPolicy">BẢO HÀNH</Link>
            </Menu.Item>
            <Menu.Item key="contact">
                <Link to="/lien-he">LIÊN HỆ</Link>
            </Menu.Item>
            <Menu.Item key="delivery">
                <Link to="/deliveryPolicy">VẬN CHUYỂN</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <WrapperHeader>
            {/* Hàng đầu của header: logo, tìm kiếm, hotline, tài khoản, giỏ hàng */}
            <TopHeaderRow>
                <LogoWrapper onClick={() => navigate('/')}>
                    <img src={logo} alt="Macbook Saigon" />
                </LogoWrapper>

                <SearchWrapper>
                    <input placeholder="ACER | PREDATOR" />
                    <button>
                        <SearchOutlined />
                    </button>
                </SearchWrapper>

                <HotlineText>Hotline: 02871081881</HotlineText>

                <Dropdown overlay={locationMenu} trigger={['click']} placement="bottomCenter">
                    <LocationWrapper>
                        <EnvironmentOutlined style={{ fontSize: '20px', color: '#FFFFFF' }} />
                        <WrapperTextHeaderSmall>Hệ thống cửa hàng</WrapperTextHeaderSmall>
                    </LocationWrapper>
                </Dropdown>

                <Dropdown overlay={accountMenu} trigger={['click']} placement="bottomRight">
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '20px', color: '#FFFFFF' }} />
                        <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                    </WrapperHeaderAccount>
                </Dropdown>

                <CartWrapper>
                    <Link to="/cart">
                        <Badge count={totalItems} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
                        </Badge>
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </Link>
                </CartWrapper>
            </TopHeaderRow>

            {/* Thanh Navigation */}
            <NavigationMenu>
                {navMenu}
            </NavigationMenu>
        </WrapperHeader>
    );
};

export default HeaderComponent;
