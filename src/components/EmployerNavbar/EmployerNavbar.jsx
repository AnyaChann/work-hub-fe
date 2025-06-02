import React from 'react';
import { Link } from 'react-router-dom';
import './EmployerNavbar.css';

const EmployerNavbar = () => {
  return (
    <nav className="employer-navbar">
      <div className="employer-navbar-logo">
        <Link to="/">
          <img src="/logo-WorkHub.png" alt="WorkHub" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">Work<span className="logo-cv">Hub</span></span>
            <span className="logo-slogan">Tiếp lợi thế - Nối thành công</span>
          </div>
        </Link>
      </div>
      
      <ul className="employer-navbar-menu">
        <li>
          <Link to="/employer/about">Giới thiệu</Link>
        </li>
        <li className="dropdown">
          <Link to="/employer/services" className="dropdown-toggle">
            Dịch vụ <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li>
          <Link to="/employer/pricing">Bảng giá</Link>
        </li>
        <li>
          <Link to="/employer/support">Hỗ trợ</Link>
        </li>
        <li>
          <Link to="/employer/blog">Blog tuyển dụng</Link>
        </li>
      </ul>
      
      <div className="employer-navbar-actions">
        {/* Language Selector */}
        {/* <div className="language-selector">
          <button className="language-btn">
            <img src="/vietnam-flag.png" alt="VN" className="flag-icon" />
            <span className="dropdown-arrow">▼</span>
          </button>
        </div> */}

        {/* Contact */}
        <div className="contact-info">
          <span className="contact-icon">📞</span>
          <span className="contact-text">Tư vấn tuyển dụng</span>
        </div>

        {/* Auth Buttons */}
        <Link to="/employer/login" className="btn btn-outline">
          Đăng nhập
        </Link>
        <Link to="/employer/register" className="btn btn-primary">
          Đăng tin ngay
        </Link>
      </div>
    </nav>
  );
};

export default EmployerNavbar;