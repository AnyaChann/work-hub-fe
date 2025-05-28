import React from 'react';
import './JobCategory.css';

const JobCategory = () => {
  const categories = [
    'Kinh doanh/Bán hàng',
    'Marketing/PR/Quảng cáo',
    'Chăm sóc khách hàng',
    'Nhân sự/Hành chính',
    'Công nghệ Thông tin',
    'Lao động phổ thông',
  ];

  return (
    <div className="job-category">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default JobCategory;