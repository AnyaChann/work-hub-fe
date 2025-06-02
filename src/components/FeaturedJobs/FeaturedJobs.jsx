import React from 'react';
import './FeaturedJobs.css';

const FeaturedJobs = () => {
  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp Vietnam',
      location: 'Hồ Chí Minh',
      salary: '20-30 triệu',
      type: 'Fulltime',
      urgent: true
    },
    {
      title: 'Marketing Manager',
      company: 'Digital Agency',
      location: 'Hà Nội',
      salary: '25-35 triệu',
      type: 'Fulltime',
      urgent: false
    },
    {
      title: 'Backend Developer',
      company: 'StartupXYZ',
      location: 'Đà Nẵng',
      salary: '18-28 triệu',
      type: 'Remote',
      urgent: true
    },
    // Thêm nhiều jobs khác...
  ];

  return (
    <section className="featured-jobs">
      <div className="container">
        <div className="section-header">
          <h2>Việc làm tốt nhất</h2>
          <div className="filter-tabs">
            <button className="tab active">Tất cả việc làm</button>
            <button className="tab">Việc làm senior</button>
            <button className="tab">Việc làm HOT</button>
          </div>
        </div>
        
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              {job.urgent && <span className="urgent-badge">Gấp</span>}
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <div className="job-details">
                <span className="location">📍 {job.location}</span>
                <span className="salary">💰 {job.salary}</span>
                <span className="type">⏰ {job.type}</span>
              </div>
              <button className="apply-btn">Ứng tuyển ngay</button>
            </div>
          ))}
        </div>
        
        <div className="view-more">
          <button className="view-more-btn">Xem thêm việc làm</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;