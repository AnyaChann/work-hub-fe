import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployerLogin.css';

const EmployerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Gọi API đăng nhập employer
      console.log('Employer login:', { email, password });
      alert('Đăng nhập thành công!');
    } catch (err) {
      setError(err.message || 'Đăng nhập thất bại');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login for employer');
  };

  return (
    <div className="employer-login-page">
      <div className="employer-login-container">
        {/* Left Side - Login Form */}
        <div className="employer-login-form">


          <div className="form-content">
            <div className="form-header">
              <div className="logo">
                <img src="/logo-WorkHub.png" alt="WorkHub" className="logo-img" />
                <span className="logo-text">WorkHub</span>
              </div>
            </div>
            <h1>Chào mừng bạn đã quay trở lại</h1>
            <p>Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel</p>

            {/* Google Login Button */}
            <button
              type="button"
              className="google-login-btn"
              onClick={handleGoogleLogin}
            >
              <span className="google-icon">G</span>
              Đăng nhập bằng Google
            </button>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              <div className="forgot-password">
                <Link to="/employer/forgot-password" className="forgot-link">
                  Quên mật khẩu
                </Link>
              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={loading}
              >
                {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </button>
            </form>

            <div className="register-link">
              <p>
                Chưa có tài khoản? <Link to="/employer/register">Đăng ký ngay</Link>
              </p>
            </div>
          </div>

          <div className="copyright">
            <p>©2014-2025 WorkHub Vietnam JSC. All rights reserved.</p>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="employer-login-illustration">
          <div className="illustration-content">
            <div className="chart-container">
              <div className="main-chart">
                <div className="chart-grid">
                  {/* Grid lines */}
                  <div className="grid-lines"></div>

                  {/* Chart bars */}
                  <div className="chart-bars">
                    <div className="bar bar-1"></div>
                    <div className="bar bar-2"></div>
                    <div className="bar bar-3"></div>
                    <div className="bar bar-4"></div>
                  </div>

                  {/* Trend line */}
                  <div className="trend-line"></div>
                </div>
              </div>

              {/* Pie chart */}
              <div className="pie-chart">
                <div className="pie-segment segment-1"></div>
                <div className="pie-segment segment-2"></div>
                <div className="pie-segment segment-3"></div>
              </div>

              {/* 3D Elements */}
              <div className="cube-1"></div>
              <div className="cube-2"></div>
              <div className="cylinder"></div>

              {/* Stars */}
              <div className="star star-1">⭐</div>
              <div className="star star-2">✨</div>
            </div>

            <div className="text-content">
              <h2>Track your funnel with <span className="highlight">Report</span></h2>
              <div className="pagination-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>

            <div className="bottom-logo">
              <img src="/logo-WorkHub.png" alt="WorkHub" className="bottom-logo-img" />
              <span className="bottom-logo-text">WorkHub</span>
              <p className="slogan">Tiếp lợi thế, nối thành công</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;