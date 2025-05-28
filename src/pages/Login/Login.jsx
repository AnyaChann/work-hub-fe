import React from 'react';
import InputField from '../../components/InputField/InputField';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Chào mừng bạn đã quay trở lại</h2>
        <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
        <InputField type="email" placeholder="Email" icon="📧" />
        <InputField type="password" placeholder="Mật khẩu" icon="🔒" />
        <button className="btn btn-primary">Đăng nhập</button>
        <a href="#" className="forgot-password">Quên mật khẩu</a>
        <div className="social-login">
          <p>Hoặc đăng nhập bằng</p>
          <button className="btn btn-google">Google</button>
          <button className="btn btn-facebook">Facebook</button>
          <button className="btn btn-linkedin">LinkedIn</button>
        </div>
        <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
      </div>
    </div>
  );
};

export default Login;