import React, { useState } from 'react';
import EmployerSidebar from '../../../components/EmployerSidebar/EmployerSidebar';
import EmployerTopbar from '../../../components/EmployerTopbar/EmployerTopbar';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="employer-dashboard">
      <EmployerSidebar 
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className={`dashboard-main ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <EmployerTopbar />
        
        <div className="dashboard-content">
          {/* Notice Banner */}
          <div className="notice-banner">
            <div className="notice-icon">ℹ️</div>
            <div className="notice-text">
              <strong>Thông báo quan trọng</strong>
              <p>Từ ngày 08/05/2025, WorkHub nâng cấp hệ thống để mang đến trải nghiệm tối ưu với một số cải tiến và tính năng mới để đánh giá ứng viên chỉ cần vài click.</p>
            </div>
          </div>

          {/* Banner Slides */}
          <div className="banner-slides">
            <div className="slide active">
              <img src="/employer-banner-1.jpg" alt="Giỏ quà đã tìm tích" />
            </div>
            <div className="slide">
              <img src="/employer-banner-2.jpg" alt="Cơ hội nhận voucher giảm 40%" />
            </div>
            <div className="slide-controls">
              <button className="prev-btn">‹</button>
              <button className="next-btn">›</button>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-text">
              <h2>Xin chào, <span className="highlight">Bách Tô</span></h2>
              <p>Hiện tháng này các doanh số và hoạt động kinh doanh mà còn chuyên cung của bạn trong 1 ngày:</p>
              <div className="points-info">
                <span className="points">+9 Top Points</span>
                <p>để tối ưu việc đăng tin tuyển dụng của bạn</p>
              </div>
            </div>
            <div className="top-points-card">
              <div className="points-header">
                <span className="points-icon">💎</span>
                <span>+9 Top Points</span>
              </div>
              <div className="points-actions">
                <span>Sử dụng tin tuyển dụng</span>
                <button className="use-points-btn">Sử dụng</button>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h3>📊 Khám phá WorkHub dành cho nhà tuyển dụng</h3>
            <div className="actions-grid">
              <div className="action-card">
                <div className="action-icon">📝</div>
                <h4>Đăng tin tuyển dụng</h4>
                <button className="action-btn">Thử ngay</button>
              </div>
              <div className="action-card">
                <div className="action-icon">🔍</div>
                <h4>Tìm kiếm CV</h4>
                <button className="action-btn">Thử ngay</button>
              </div>
              <div className="action-card">
                <div className="action-icon">💎</div>
                <h4>Mua dịch vụ</h4>
                <button className="action-btn">Thử ngay</button>
              </div>
            </div>
          </div>

          {/* CV Excellence */}
          <div className="cv-excellence">
            <h3>✨ CV đề xuất</h3>
            <div className="cv-content">
              <div className="cv-robot">
                <img src="/cv-robot.png" alt="CV Robot" />
              </div>
              <div className="cv-info">
                <h4>Kích hoạt CV đề xuất bởi <span className="toppy-ai">Toppy AI</span> để được:</h4>
                <ul>
                  <li>✅ Gợi ý ứng viên tiềm năng</li>
                  <li>✅ Lọc sẵn các thông tin cơ bản</li>
                  <li>✅ Tự động gửi vào theo tiêu chí phù hợp</li>
                </ul>
                <p className="cv-service-info">
                  Mua dịch vụ Top Jobs để sử dụng tính năng CV đề xuất
                </p>
                <button className="buy-now-btn">Mua ngay</button>
              </div>
              <div className="cv-preview">
                <div className="cv-mock">
                  <div className="cv-header"></div>
                  <div className="cv-lines">
                    <div className="cv-line"></div>
                    <div className="cv-line"></div>
                    <div className="cv-line short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            {/* Member Info */}
            <div className="member-info">
              <h3>👤 Bách Tô</h3>
              <div className="member-details">
                <div className="member-id">Mã NTVD: 1993005</div>
                <div className="member-email">📧 bachto664@gmail.com</div>
                <div className="member-phone">📱 0388055380</div>
              </div>
              
              <div className="membership-tiers">
                <div className="tier-progress">
                  <div className="tiers">
                    <span className="tier active">Member</span>
                    <span className="tier">Silver</span>
                    <span className="tier">Gold</span>
                    <span className="tier">Platinum</span>
                    <span className="tier">Diamond</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div className="tier-benefits">
                  <div className="current-tier">
                    <span>Điểm sử dụng: 0 🔥</span>
                  </div>
                  <button className="upgrade-btn">Gia cấp lên VIP</button>
                </div>
                
                <div className="tier-description">
                  <p>Bạn cần đến tối thiểu 100 điểm sử dụng để lên bật Silver. Hiện tại bạn còn thiếu 100 điểm để lên hạng Gold.</p>
                  <a href="#" className="learn-more">Tìm hiểu thêm</a>
                </div>
              </div>
            </div>

            {/* Points & Credits */}
            <div className="points-credits">
              <div className="points-section">
                <h4>💎 Top Point (TP)</h4>
                <div className="points-balance">
                  <span className="balance">0</span>
                  <span className="label">Hiệu lực vĩnh viễn</span>
                  <span className="desc">🏆 Thực hiện nhiều ưu đãi Top Point</span>
                </div>
                <div className="points-note">
                  <p>Mua Point ngay để...</p>
                </div>
              </div>
              
              <div className="credits-section">
                <h4>💳 Credit (CP)</h4>
                <div className="credits-info">
                  <div className="credit-item">
                    <span>Chính: 0 CP</span>
                  </div>
                  <div className="credit-item">
                    <span>Khuyến mãi: 0 CP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="latest-updates">
              <h3>🔔 Cập nhật mới nhất</h3>
              <div className="updates-list">
                <div className="update-item">
                  <div className="update-date">02/06/2025</div>
                  <div className="update-text">Tăng ngay dịch vụ trong 2 dạo người kế, ngày Giai đấu Hàng Việt/VN-1 âm lọc và ngày Giải phòng Miền Nam 30/4 & Quốc tế Lao động 01/05</div>
                </div>
                <div className="update-item">
                  <div className="update-date">01/06/2025</div>
                  <div className="update-text">[WorkHub] Thông báo cao nhất Quay mặt hoạt động</div>
                </div>
                <div className="update-item">
                  <div className="update-date">28/05/2025</div>
                  <div className="update-text">[WorkHub] CHƯƠNG TRÌNH B3 - TỐI ÁN NHỮNG NGƯỜI LÀM TUYỂN DỤNG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;