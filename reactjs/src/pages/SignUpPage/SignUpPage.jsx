import React, { useState } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';
import { createProduct } from '../../services/userController';
import {
   SignUpContainer,
   SignUpForm,
   FormTitle,
   FormInput,
   SubmitButton,
   SocialLoginContainer,
   SocialButton,
   LoginPrompt,
   LoginLink,
} from './SignUpStyles';

const SignUp = () => {
   const [formData, setFormData] = useState({
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      password: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await createProduct(formData);
         console.log('User registered:', response);
         // Handle successful registration, like redirecting or showing a message
      } catch (error) {
         console.error('Error registering user:', error);
         // Handle error, such as displaying a notification to the user
      }
   };

   const handleGoogleLogin = (credentialResponse) => {
      console.log('Google Login Response:', credentialResponse);
      // Process Google login
   };

   const handleFacebookLogin = (response) => {
      console.log('Facebook Login Response:', response);
      // Process Facebook login
   };

   return (
      <SignUpContainer>
         <SignUpForm onSubmit={handleSubmit}>
            <FormTitle>Đăng Ký</FormTitle>
            <FormInput
               type='text'
               name='lastName'
               placeholder='Họ'
               value={formData.lastName}
               onChange={handleChange}
               required
            />
            <FormInput
               type='text'
               name='firstName'
               placeholder='Tên'
               value={formData.firstName}
               onChange={handleChange}
               required
            />
            <FormInput
               type='email'
               name='email'
               placeholder='Email'
               value={formData.email}
               onChange={handleChange}
               required
            />
            <FormInput
               type='tel'
               name='phone'
               placeholder='Số điện thoại'
               value={formData.phone}
               onChange={handleChange}
               required
            />
            <FormInput
               type='password'
               name='password'
               placeholder='Mật khẩu'
               value={formData.password}
               onChange={handleChange}
               required
            />
            <SubmitButton type='submit'>Đăng Ký</SubmitButton>

            <SocialLoginContainer>
               <GoogleOAuthProvider clientId='YOUR_GOOGLE_CLIENT_ID'>
                  <GoogleLogin
                     onSuccess={handleGoogleLogin}
                     onError={() => {
                        console.log('Login Failed');
                     }}
                     render={(renderProps) => (
                        <SocialButton onClick={renderProps.onClick}>
                           <GoogleOutlined /> Đăng ký bằng Google
                        </SocialButton>
                     )}
                  />
               </GoogleOAuthProvider>

               <FacebookLogin
                  appId='YOUR_FACEBOOK_APP_ID'
                  autoLoad={false}
                  fields='name,email,picture'
                  callback={handleFacebookLogin}
                  render={(renderProps) => (
                     <SocialButton onClick={renderProps.onClick}>
                        <FacebookOutlined /> Đăng ký bằng Facebook
                     </SocialButton>
                  )}
               />
            </SocialLoginContainer>

            <LoginPrompt>
               Bạn đã có tài khoản? <LoginLink href='/sign-in'>Đăng nhập</LoginLink>
            </LoginPrompt>
         </SignUpForm>
      </SignUpContainer>
   );
};

export default SignUp;
