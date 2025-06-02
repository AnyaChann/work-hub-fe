import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './EmployerSidebar.css';

const EmployerSidebar = ({ collapsed, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { icon: '🏠', label: 'Bảng tin', path: '/employer/dashboard' },
    { icon: '🔍', label: 'WorkHub Insights', path: '/employer/insights' },
    { icon: '🎁', label: 'WorkHub Rewards', path: '/employer/rewards' },
    { icon: '📊', label: 'Đối tác', path: '/employer/partners' },
    { icon: '🤖', label: 'Toppy AI - Đối tưởng', path: '/employer/ai' },
    { icon: '📝', label: 'CV ứng cử', path: '/employer/cv-applications' },
    { icon: '📋', label: 'Chiến dịch tuyển dụng', path: '/employer/campaigns' },
    { icon: '📈', label: 'Tin tuyển dụng', path: '/employer/job-posts' },
    { icon: '⚙️', label: 'Quản lý', path: '/employer/management' }
  ];

  return (
    <div className={`employer-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={onToggle}>
          ☰
        </button>
        {!collapsed && (
          <div className="logo">
            <img src="/logo-WorkHub.png" alt="WorkHub" />
          </div>
        )}
      </div>

      <div className="sidebar-user">
        {!collapsed && (
          <>
            <div className="back-to">
              <span>Bách Tô</span>
              <span>Employer</span>
            </div>
            <div className="user-info">
              Tà khoản sắc thâm: <span className="highlight">Chế Tô</span> 🏆
            </div>
          </>
        )}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <Link 
            key={index}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {!collapsed && (
        <div className="sidebar-footer">
          <div className="quick-cv">
            <span>Quản lý CV 🆕</span>
          </div>
          <div className="report-section">
            <span>Báo cáo tuyển dụng</span>
            <button className="create-report">+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployerSidebar;