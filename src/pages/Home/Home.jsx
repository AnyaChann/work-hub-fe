import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobCategory from '../../components/JobCategory/JobCategory';
import JobList from '../../components/JobList/JobList';
import Footer from '../../components/Footer/Footer'; // Import Footer
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="home-header">
        <h1>Tìm việc làm nhanh 24h</h1>
        <p>Tiếp cận hàng ngàn cơ hội việc làm từ các doanh nghiệp uy tín</p>
        <SearchBar />
      </header>
      <main className="home-main">
        <section className="job-category-section">
          <h2>Danh mục ngành nghề</h2>
          <JobCategory />
        </section>
        <section className="job-list-section">
          <h2>Việc làm tốt nhất</h2>
          <JobList />
        </section>
      </main>
      <Footer /> {/* Thêm Footer */}
    </div>
  );
};

export default Home;