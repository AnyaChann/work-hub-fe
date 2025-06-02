import React from 'react';
import './EmployerStats.css';

const EmployerStats = () => {
  const stats = [
    {
      number: '3.000.000+',
      label: 'Ứng viên tiềm năng',
      icon: '👥'
    },
    {
      number: '40.000+',
      label: 'Hồ sơ mới mỗi tháng',
      icon: '📄'
    },
    {
      number: '100.000+',
      label: 'Doanh nghiệp tin tuyển',
      icon: '🏢'
    },
    {
      number: '500.000+',
      label: 'Ứng tuyển mỗi tháng',
      icon: '📊'
    }
  ];

  return (
    <section className="employer-stats">
      <div className="container">
        <h2>WorkHub - Kênh tuyển dụng hiệu quả nhất Việt Nam</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployerStats;