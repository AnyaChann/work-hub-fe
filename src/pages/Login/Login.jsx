import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import { login } from '../../api/auth'; // Import hàm gọi API
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await login(email, password); // Gọi API đăng nhập
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token); // Lưu token vào localStorage
      alert('Đăng nhập thành công!');
      // Chuyển hướng người dùng sau khi đăng nhập thành công (nếu cần)
    } catch (err) {
      setError(err.message || 'Đăng nhập thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Chào mừng bạn đã quay trở lại</h2>
        <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            placeholder="Email"
            icon="📧"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Mật khẩu"
            icon="🔒"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
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