import React, { useState } from 'react';
import './JobList.css';

const JobList = () => {
  const allJobs = [
    { title: 'Nhân Viên Kinh Doanh', location: 'Hà Nội', salary: '15 - 30 triệu' },
    { title: 'Trưởng Dự Án Marketing', location: 'Hồ Chí Minh', salary: '30 - 40 triệu' },
    { title: 'Kế Toán Tổng Hợp', location: 'Hà Nội', salary: '12 - 16 triệu' },
    { title: 'Nhân Viên IT', location: 'Đà Nẵng', salary: '20 - 25 triệu' },
    { title: 'Chuyên Viên Nhân Sự', location: 'Hồ Chí Minh', salary: '18 - 22 triệu' },
  ];

  const [visibleJobs, setVisibleJobs] = useState(3);

  const handleShowMore = () => {
    setVisibleJobs((prev) => prev + 2);
  };

  return (
    <div className="job-list">
      {allJobs.slice(0, visibleJobs).map((job, index) => (
        <div key={index} className="job-item">
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <p>{job.salary}</p>
        </div>
      ))}
      {visibleJobs < allJobs.length && (
        <button className="btn-show-more" onClick={handleShowMore}>
          Xem thêm
        </button>
      )}
    </div>
  );
};

export default JobList;