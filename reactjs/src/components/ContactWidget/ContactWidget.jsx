// src/components/ContactWidget/ContactWidget.jsx
import React from 'react';
import styled from 'styled-components';
import { PhoneOutlined } from '@ant-design/icons';
import messengerIcon from '../../assets/icons/mesicon.webp'; // Thay bằng đường dẫn thực tế đến icon
import zaloIcon from '../../assets/icons/zaloicon.webp'; // Thay bằng đường dẫn thực tế đến icon

const WidgetContainer = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ContactButton = styled.a`
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    text-decoration: none;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    transition: box-shadow 0.3s;
    width: 150px;

    &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    }

    img, .anticon {
        font-size: 20px;
        margin-right: 10px;
    }
`;

const ContactWidget = () => {
    return (
        <WidgetContainer>
            <ContactButton href="tel:02871081881">
                <PhoneOutlined style={{ color: 'red' }} />
                (028) 7108 1881
                <span style={{ fontSize: '12px', color: '#888', marginLeft: 'auto' }}>(9h - 20h)</span>
            </ContactButton>
            <ContactButton href="https://www.messenger.com/e2ee/t/6817919184992176/" target="_blank" rel="noopener noreferrer">
                <img src={messengerIcon} alt="Messenger" style={{ width: '20px' }} />
                Chat Messenger
                <span style={{ fontSize: '12px', color: '#888', marginLeft: 'auto' }}>(9h - 20h)</span>
            </ContactButton>
            <ContactButton href="https://id.zalo.me/account?continue=https%3A%2F%2Fchat.zalo.me%2F" target="_blank" rel="noopener noreferrer">
                <img src={zaloIcon} alt="Zalo" style={{ width: '20px' }} />
                Chat Zalo
                <span style={{ fontSize: '12px', color: '#888', marginLeft: 'auto' }}>(9h - 20h)</span>
            </ContactButton>
        </WidgetContainer>
    );
};

export default ContactWidget;
