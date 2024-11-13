import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6d5dfc, #c7d2fe);
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #4a4a4a;
  font-size: 1.8em;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  font-size: 1em;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  transition: border 0.2s ease;
  &:focus {
    outline: none;
    border-color: #6d5dfc;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  font-size: 1em;
  color: white;
  background-color: #6d5dfc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #574bda;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 20px;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 12px;
  font-size: 1em;
  background-color: #e0e0e0;
  color: #4a4a4a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d0d0d0;
  }
  svg {
    margin-right: 8px;
  }
`;

// Thêm LoginPrompt và LoginLink vào đây
export const LoginPrompt = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #6d5dfc;
`;

export const LoginLink = styled.a`
  color: #574bda;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
