import { CheckoutContainer, Title, SectionTitle, OrderSummary, Item, CheckoutButton } from './style';

// style.js
import styled from "styled-components";
import { Card, Button } from "antd";

export const CheckoutContainer = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #333;
`;

export const SectionTitle = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

export const OrderSummary = styled(Card)`
    margin-bottom: 20px;
    padding: 20px;
    background: #fff;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
`;

export const CheckoutButton = styled(Button)`
    width: 100%;
    background-color: #007aff;
    color: white;
    &:hover {
        background-color: #005bb5;
    }
`;
