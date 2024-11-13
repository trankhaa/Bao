import styled from 'styled-components';
import { Button } from 'antd';


export const CartPageContainer = styled.div`
    padding: 40px;
    background-color: #f5f5f5;
`;

export const CartItem = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CartImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

export const CartDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;
`;

export const CartItemTitle = styled.h3`
    font-size: 18px;
    margin: 0;
    color: #333;
`;

export const CartPrice = styled.p`
    font-size: 16px;
    color: #ff4d4f;
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const TotalPrice = styled.h3`
    font-size: 20px;
    color: #333;
`;

export const CheckoutButton = styled(Button)`
    background-color: #ff4d4f;
    color: #fff;
    &:hover {
        background-color: #ff7875;
    }
`;

export const RemoveButton = styled(Button)`
    background-color: #ff4d4f;
    color: #fff;
    border: none;
    &:hover {
        background-color: #ff7875;
    }
`;
