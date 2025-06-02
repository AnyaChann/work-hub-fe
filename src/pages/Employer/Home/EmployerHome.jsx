import React from 'react';
import EmployerNavbar from '../../../components/EmployerNavbar/EmployerNavbar';
import EmployerHero from '../../../components/EmployerHero/EmployerHero';
import EmployerStats from '../../../components/EmployerStats/EmployerStats';
import EmployerFeatures from '../../../components/EmployerFeatures/EmployerFeatures';
// import EmployerTools from '../../components/EmployerTools/EmployerTools';
// import EmployerTestimonials from '../../components/EmployerTestimonials/EmployerTestimonials';
// import EmployerPlatforms from '../../components/EmployerPlatforms/EmployerPlatforms';
// import EmployerPartners from '../../components/EmployerPartners/EmployerPartners';
import EmployerCTA from '../../../components/EmployerCTA/EmployerCTA';
import Footer from '../../../components/Footer/Footer';
import './EmployerHome.css';

const EmployerHome = () => {
  return (
    <div className="employer-home">
      <EmployerNavbar />
      <EmployerHero />
      <EmployerStats />
      <EmployerFeatures />
      {/* <EmployerTools />
      <EmployerTestimonials />
      <EmployerPlatforms />
      <EmployerPartners /> */}
      <EmployerCTA />
      <Footer />
    </div>
  );
};

export default EmployerHome;