import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>TopCV</h2>
          <p>Tiếp lợi thế - Nối thành công</p>
          <p>Google for Startups Accelerator 2020</p>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <p>Hotline: (024) 6680 5588 (Giờ hành chính)</p>
          <p>Email: hotro@topcv.vn</p>
          <div className="footer-apps">
            <img src="appstore.png" alt="App Store" />
            <img src="googleplay.png" alt="Google Play" />
          </div>
        </div>
        <div className="footer-links">
          <h3>Về TopCV</h3>
          <ul>
            <li>Giới thiệu</li>
            <li>Góc báo chí</li>
            <li>Tuyển dụng</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Cộng đồng TopCV</h3>
          <div className="social-icons">
            <span>Facebook</span>
            <span>LinkedIn</span>
            <span>YouTube</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2014-2025 TopCV Vietnam JSC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;