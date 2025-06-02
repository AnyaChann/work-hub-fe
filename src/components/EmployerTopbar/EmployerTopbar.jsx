import React from 'react';
import './EmployerTopbar.css';

const EmployerTopbar = () => {
  return (
    <div className="employer-topbar">
      <div className="topbar-left">
        <h1>Bảng tin</h1>
      </div>
      
      <div className="topbar-right">
        <div className="topbar-icons">
          <button className="topbar-icon" title="HR Insider">
            👥 HR Insider
          </button>
          <button className="topbar-icon" title="Đăng tin">
            📝 Đăng tin
          </button>
          <button className="topbar-icon" title="Tìm CV">
            🔍 Tìm CV
          </button>
          <button className="topbar-icon" title="Connect">
            🔗 Connect
          </button>
          <button className="topbar-icon" title="Insights">
            📊 Insights
          </button>
          <button className="topbar-icon notification" title="Notifications">
            🔔
            <span className="notification-badge">1</span>
          </button>
          <button className="topbar-icon cart" title="Cart">
            🛒
            <span className="cart-badge">0</span>
          </button>
          <div className="user-menu">
            <button className="user-avatar">
              <img src="/default-avatar.png" alt="User" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerTopbar;