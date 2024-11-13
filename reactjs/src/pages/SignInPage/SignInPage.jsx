import React from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background: #fff;
`;

const SignInPage = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        // Xử lý đăng nhập ở đây (gửi dữ liệu đến API)
    };

    return (
        <PageContainer>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Đăng Nhập</h2>
            <Form name="signin" onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }}>
                        Đăng Nhập
                    </Button>
                </Form.Item>
            </Form>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <p>
                    Bạn chưa có tài khoản? <Link to="/sign-up">Đăng ký ngay!</Link>
                </p>
            </div>
        </PageContainer>
    );
};

export default SignInPage;
