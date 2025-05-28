import React from 'react';
import InputField from '../../components/InputField/InputField';
import './Register.css';

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-form">
        <h2>Chào mừng bạn đến với TopCV</h2>
        <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
        <InputField type="text" placeholder="Nhập họ tên" icon="👤" />
        <InputField type="email" placeholder="Nhập email" icon="📧" />
        <InputField type="password" placeholder="Nhập mật khẩu" icon="🔒" />
        <InputField type="password" placeholder="Nhập lại mật khẩu" icon="🔒" />
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật</label>
        </div>
        <button className="btn btn-primary">Đăng ký</button>
        <div className="social-login">
          <p>Hoặc đăng nhập bằng</p>
          <button className="btn btn-google">Google</button>
          <button className="btn btn-facebook">Facebook</button>
          <button className="btn btn-linkedin">LinkedIn</button>
        </div>
        <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay</a></p>
      </div>
    </div>
  );
};

export default Register;