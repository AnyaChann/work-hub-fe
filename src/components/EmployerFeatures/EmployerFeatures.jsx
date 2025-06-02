import React from 'react';
import './EmployerFeatures.css';

const EmployerFeatures = () => {
  const features = [
    {
      title: 'Tìm kiếm hồ sơ ứng viên',
      description: 'Tìm kiếm trong kho hồ sơ 3 triệu ứng viên với bộ lọc thông minh',
      icon: '🔍',
      image: '/feature-search.png'
    },
    {
      title: 'Đăng tin tuyển dụng miễn phí',
      description: 'Đăng tin tuyển dụng miễn phí và tiếp cận ứng viên phù hợp',
      icon: '📢',
      image: '/feature-post.png'
    },
    {
      title: 'Quản lý ứng viên hiệu quả',
      description: 'Theo dõi và quản lý toàn bộ quy trình tuyển dụng một cách dễ dàng',
      icon: '📊',
      image: '/feature-manage.png'
    }
  ];

  return (
    <section className="employer-features">
      <div className="container">
        <h2>Giải pháp tuyển dụng toàn diện</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className={`feature-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="feature-btn">Tìm hiểu thêm</button>
              </div>
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployerFeatures;