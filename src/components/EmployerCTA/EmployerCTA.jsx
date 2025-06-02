import React from 'react';
import './EmployerCTA.css';

const EmployerCTA = () => {
  return (
    <section className="employer-cta">
      <div className="container">
        <div className="cta-content">
          <h2>Bắt đầu tuyển dụng ngay hôm nay!</h2>
          <p>Tham gia cùng hàng nghìn doanh nghiệp đang sử dụng WorkHub để tìm kiếm nhân tài</p>
          <div className="cta-buttons">
            <button className="btn-primary">Đăng ký miễn phí</button>
            <button className="btn-secondary">Liên hệ tư vấn</button>
          </div>
        </div>
        <div className="cta-stats">
          <div className="stat-item">
            <span className="number">24/7</span>
            <span className="label">Hỗ trợ khách hàng</span>
          </div>
          <div className="stat-item">
            <span className="number">100%</span>
            <span className="label">Miễn phí đăng ký</span>
          </div>
          <div className="stat-item">
            <span className="number">30 ngày</span>
            <span className="label">Dùng thử miễn phí</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerCTA;