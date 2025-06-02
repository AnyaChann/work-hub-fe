import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import JobStats from '../../components/JobStats/JobStats';
import FeaturedJobs from '../../components/FeaturedJobs/FeaturedJobs';
// import TopCompanies from '../../components/TopCompanies/TopCompanies';
// import JobByLocation from '../../components/JobByLocation/JobByLocation';
// import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <JobStats />
      <FeaturedJobs />
      {/* <TopCompanies /> */}
      {/* <JobByLocation /> */}
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default Home;