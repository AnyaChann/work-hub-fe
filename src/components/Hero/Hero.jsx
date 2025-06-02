import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', jobTitle, 'in', location);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.</h1>
          <p>Tiếp cận 40,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam</p>
          
          <div className="search-bar">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Vị trí ứng tuyển"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="search-input"
              />
              <input
                type="text"
                placeholder="Tỉnh/Thành phố"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="search-input"
              />
              <button onClick={handleSearch} className="search-btn">
                Tìm việc ngay
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-banner">
          <div className="banner-content">
            <h3>AUG TUYỂN DỤNG</h3>
            <p>Gia nhập đội ngũ AUG Technologies - Nơi công nghệ tạo nên sự khác biệt</p>
            <button className="cta-btn">Tìm hiểu thêm</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;