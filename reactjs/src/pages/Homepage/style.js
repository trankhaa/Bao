// style.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const WrapperTypeProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const WrapperProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;

export const WrapperButtonMore = styled.div`
  text-align: center;
  margin-top: 20px;
`;

// Style cho nút xem thêm
export const ViewMoreButton = styled.button`
  border: 2px solid rgb(11, 116, 229);
  background: rgb(11, 116, 229);
  color: #fff;
  width: 240px;
  height: 48px;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #0a7dc1;
  }
`;
