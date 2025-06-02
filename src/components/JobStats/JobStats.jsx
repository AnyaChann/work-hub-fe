import React from 'react';
import './JobStats.css';

const JobStats = () => {
  const stats = [
    { number: '40,000+', label: 'Việc làm đang tuyển' },
    { number: '2,000+', label: 'Doanh nghiệp tin tuyển' },
    { number: '1,000+', label: 'Việc làm mới mỗi ngày' },
    { number: '50,000+', label: 'Ứng viên đã tìm được việc' }
  ];

  return (
    <section className="job-stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobStats;