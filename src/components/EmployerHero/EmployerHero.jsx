import React from 'react';
import './EmployerHero.css';

const EmployerHero = () => {
  return (
    <section className="employer-hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Đăng tin tuyển dụng tìm kiếm ứng viên WorkHub</h1>
          <p>Tiếp cận +3.000.000 ứng viên và +40.000 hồ sơ mới mỗi tháng trên WorkHub</p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Đăng tin tuyển dụng</button>
            <button className="btn-secondary">Tìm hiểu thêm</button>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="icon">✓</span>
              <span>Miễn phí đăng tin</span>
            </div>
            <div className="feature-item">
              <span className="icon">✓</span>
              <span>Tìm kiếm hồ sơ</span>
            </div>
            <div className="feature-item">
              <span className="icon">✓</span>
              <span>Quản lý ứng viên</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="laptop-mockup">
            <img src="/employer-dashboard.png" alt="WorkHub Dashboard" />
          </div>
          <div className="floating-elements">
            <div className="floating-card card-1">
              <h4>Tìm kiếm ứng viên</h4>
              <p>Tìm kiếm trong kho hồ sơ</p>
            </div>
            <div className="floating-card card-2">
              <h4>Quản lý tuyển dụng</h4>
              <p>Theo dõi tiến trình</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerHero;