import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TopCV</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Việc làm</Link>
        </li>
        <li>
          <Link to="/create-cv">Tạo CV</Link>
        </li>
        <li>
          <Link to="/tools">Công cụ</Link>
        </li>
        <li>
          <Link to="/career-guide">Cẩm nang nghề nghiệp</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/register" className="btn">
          Đăng ký
        </Link>
        <Link to="/login" className="btn btn-primary">
          Đăng nhập
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;