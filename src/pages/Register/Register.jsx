import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import { register } from '../../api/auth'; // Import hàm gọi API
import './Register.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      setLoading(false);
      return;
    }

    if (!agreeToTerms) {
      setError('Bạn cần đồng ý với điều khoản dịch vụ');
      setLoading(false);
      return;
    }

    try {
      const data = await register({ fullName, email, password });
      console.log('Register successful:', data);
      alert('Đăng ký thành công!');
    } catch (err) {
      setError(err.message || 'Đăng ký thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <div className="form-content">
            <h2>Chào mừng bạn đến với WorkHub</h2>
            <p>Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
            
            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Họ và tên</label>
                <InputField
                  type="text"
                  placeholder="Nhập họ tên"
                  icon="👤"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <InputField
                  type="email"
                  placeholder="Nhập email"
                  icon="📧"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <InputField
                  type="password"
                  placeholder="Nhập mật khẩu"
                  icon="🔒"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Xác nhận mật khẩu</label>
                <InputField
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  icon="🔒"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="terms-agreement">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                />
                <label htmlFor="terms">
                  Tôi đã đọc và đồng ý với{' '}
                  <a href="#" className="terms-link">Điều khoản dịch vụ</a> và{' '}
                  <a href="#" className="terms-link">Chính sách bảo mật</a> của WorkHub
                </label>
              </div>

              <button type="submit" className="btn-register" disabled={loading}>
                {loading ? 'Đang đăng ký...' : 'Đăng ký'}
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

            <div className="login-link">
              <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay</a></p>
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

        <div className="register-sidebar">
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

export default Register;