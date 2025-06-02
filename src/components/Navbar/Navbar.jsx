import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo-WorkHub.png" alt="WorkHub" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">Work<span className="logo-cv">Hub</span></span>
            <span className="logo-slogan">Tiếp lợi thế - Nối thành công</span>
          </div>
        </Link>
      </div>
      
      <ul className="navbar-menu">
        <li className="dropdown">
          <Link to="/" className="dropdown-toggle">
            Việc làm <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/create-cv" className="dropdown-toggle">
            Tạo CV <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/tools" className="dropdown-toggle">
            Công cụ <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/career-guide" className="dropdown-toggle">
            Cẩm nang nghề nghiệp <span className="dropdown-arrow">▼</span>
          </Link>
        </li>
        <li className="WorkHub-pro">
          <Link to="/WorkHub-pro">
            WorkHub <span className="pro-badge">Pro</span>
          </Link>
        </li>
      </ul>
      
      <div className="navbar-actions">
        <Link to="/register" className="btn btn-outline">
          Đăng ký
        </Link>
        <Link to="/login" className="btn btn-primary">
          Đăng nhập
        </Link>
        <Link to="/employer" className="btn btn-secondary">
          Đăng tuyển & tìm hồ sơ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;