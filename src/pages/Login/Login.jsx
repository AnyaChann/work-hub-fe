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
      <div className="login-container">
        <div className="login-form">
          <div className="form-content">
            <h2>Chào mừng bạn đã quay trở lại</h2>
            <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
            
            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <InputField
                  type="email"
                  placeholder="Email"
                  icon="📧"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <InputField
                  type="password"
                  placeholder="Mật khẩu"
                  icon="🔒"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="forgot-password-link">
                <a href="#" className="forgot-password">Quên mật khẩu</a>
              </div>

              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
            </form>

            <div className="social-login-divider">
              <p>Hoặc đăng nhập bằng</p>
            </div>

            <div className="social-login-buttons">
              <button className="btn-google">
                <span className="google-icon">G</span> Google
              </button>
              <button className="btn-facebook">
                <span className="facebook-icon">f</span> Facebook
              </button>
              <button className="btn-linkedin">
                <span className="linkedin-icon">in</span> Linkedin
              </button>
            </div>

            <div className="register-link">
              <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
            </div>

            <div className="support-info">
              <p>Bạn gặp khó khăn khi tạo tài khoản?</p>
              <p>Vui lòng gọi tới số <strong>(084) 1234 5678</strong> (giờ hành chính).</p>
            </div>
          </div>
          
          {/* Thanh copyright */}
          <div className="copyright">
            <p>© 2025. All Rights Reserved. WorkHub Vietnam JSC.</p>
          </div>
        </div>

        <div className="login-sidebar">
          <div className="WorkHub-logo">
            <img src="/logo-WorkHub.png" alt="WorkHub" />
          </div>
          <h3>Tiếp lợi thế<br />Nối thành công</h3>
          <p>WorkHub - Hệ sinh thái nhân sự tiên phong ứng dụng công nghệ tại Việt Nam</p>
          <div className="qr-code">
            <img src="/qr-code.png" alt="QR Code" />
            <p>WorkHub.com.vn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;